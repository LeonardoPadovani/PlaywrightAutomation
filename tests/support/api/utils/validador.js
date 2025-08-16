const { expect } = require('@playwright/test')
const Ajv = require('ajv');
const addFormats = require('ajv-formats');


class Validador {


    static validaStatusCode(response, expectedStatus) {
        expect(response).toBeDefined();
        expect(response.status()).toBe(expectedStatus);
    }

    
    static validaConteudo(objeto, regras) {
        for (const chave in regras) {
            const valor = objeto[chave];
            const regra = regras[chave];

            if (typeof regra === 'function') {
                const resultado = regra(valor);
                expect(resultado).toBe(true);
            } else if (Array.isArray(regra)) {
                expect(regra.includes(valor)).toBe(true);
            } else {
                expect(valor).toBe(regra);
            }
        }
    }

    static validaSchema(schema, data) {
        const ajv = new Ajv({ allErrors: true, strict: false });
        addFormats(ajv); // permite validar formatos como "uri", "email", "date", etc.

        const validate = ajv.compile(schema);
        const valid = validate(data);

        if (!valid) {
            console.error('❌ Erros de validação:', JSON.stringify(validate.errors, null, 2));
            throw new Error('Schema inválido');
        }

        console.log('✅ Schema válido');
        return true;
    }
}



module.exports = { Validador }





