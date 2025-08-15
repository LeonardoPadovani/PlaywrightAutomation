const { expect } = require('@playwright/test')

class Validador {


    static validaStatusCode(response, expectedStatus) {
        expect(response).toBeDefined();
        expect(response.status()).toBe(expectedStatus);
    }

    static validaChaves(objeto, chavesEsperadas) {
        const chavesAtuais = Object.keys(objeto).sort();
        const chavesOrdenadas = [...chavesEsperadas].sort();

        expect(chavesAtuais).toEqual(chavesOrdenadas);
    }

    static validaTiposDoSchema(objeto, schema) {
        expect(objeto).toMatchObject(schema);
    }


    // Valida um objeto com base em um schema
    static validaObjetoComSchema(objeto, schema) {
        const objetoKeys = Object.keys(objeto).sort();
        const schemaKeys = Object.keys(schema).sort();

        expect(objetoKeys).toEqual(schemaKeys);

        for (const key of schemaKeys) {
            const valor = objeto[key];
            const tipoEsperado = schema[key];

            if (Validador._isMatcher(tipoEsperado)) {
                expect(valor).toEqual(tipoEsperado);
            } else if (Array.isArray(tipoEsperado)) {
                expect(Array.isArray(valor)).toBe(true);
                const itemSchema = tipoEsperado[0];
                Validador.validaArrayComSchema(valor, itemSchema);
            } else if (typeof tipoEsperado === 'object' && tipoEsperado !== null) {
                Validador.validaObjetoComSchema(valor, tipoEsperado);
            } else {
                expect(typeof valor).toBe(tipoEsperado);
            }
        }
    }

    // Valida um array de objetos com base em um schema de item
    static validaArrayComSchema(array, itemSchema) {
        expect(Array.isArray(array)).toBe(true);
        for (const item of array) {
            Validador.validaObjetoComSchema(item, itemSchema);
        }
    }

    static _isMatcher(valor) {
        return typeof valor === 'object' && valor !== null && 'asymmetricMatch' in valor;
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


}

module.exports = { Validador }





