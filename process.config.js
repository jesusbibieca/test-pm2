module.exports = {
  apps : [{
    name: 'My APP',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'start',
    instances: 2,
    autorestart: true,
    watch: true,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production'
    },
    env_hook: {
      command: 'git pull origin master && npm i && npm test && pm2 restart "My APP"'
    }
  }]
};
