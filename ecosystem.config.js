module.exports = {
  apps: [
    {
      name: 'typebot-builder',
      script: '/home/typebot/public_html/apps/builder/index.js', // ou outro arquivo de entrada
      instances: 1,
      exec_mode: 'cluster', // ou 'fork' se preferir
      env: {
        NODE_ENV: 'production',
        // Adicione outras variáveis de ambiente aqui, se necessário
      },
      watch: false, // define como true se você quiser que PM2 reinicie ao mudar arquivos
      port: 3002,
    },
    {
      name: 'typebot-viewer',
      script: '/home/typebot/public_html/apps/viewer/index.js', // ou outro arquivo de entrada
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      watch: false,
      port: 3003,
    },
    {
      name: 'typebot-landing',
      script: '/home/typebot/public_html/apps/landing/index.js', // ou outro arquivo de entrada
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      watch: false,
      port: 3004,
    }
  ]
};
