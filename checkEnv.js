const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Ambiente 
const env = process.env.NODE_ENV || 'hml'; // 'hml' ou 'dev'

// Caminho para o arquivo .env
const envFileName = `.env.${env}`; // ex: env.dev ou env.hml
const envPath = path.resolve(__dirname, 'tests', 'support', 'envs', envFileName);

// Verifica se o arquivo existe
if (!fs.existsSync(envPath)) {
  console.error(`❌ Arquivo de ambiente não encontrado: ${envPath}`);
  console.error(`Crie o arquivo ${envFileName} dentro de support/envs}/`);
  process.exit(1);
}

// Carrega as variáveis
console.log(`✅ Ambiente: ${env}`);
dotenv.config({ path: envPath });



