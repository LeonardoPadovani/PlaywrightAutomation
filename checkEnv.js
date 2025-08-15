const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Ambiente e alvo (target)
const env = process.env.NODE_ENV || 'hml'; // 'hml' ou 'dev'
const target = process.env.TEST_TARGET || 'api'; // 'api' ou 'web'

// Caminho para o arquivo .env
const envFileName = `.env.${env}`; // ex: env.dev ou env.hml
const envPath = path.resolve(__dirname, 'tests', 'support', target, 'envs', envFileName);

// Verifica se o arquivo existe
if (!fs.existsSync(envPath)) {
  console.error(`❌ Arquivo de ambiente não encontrado: ${envPath}`);
  console.error(`Crie o arquivo ${envFileName} dentro de support/${target}/`);
  process.exit(1);
}

// Carrega as variáveis
console.log(`✅ Ambiente: ${env} | Target: ${target}`);
dotenv.config({ path: envPath });



