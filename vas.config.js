module.exports = {
  apps: [{
    name: "xmpp_node",
    script: "./index.js",
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    merge_logs: true,
    instances: 1,
    watch: false,
    exec_mode: "cluster",
    env_development: {
      NODE_ENV: "development",
      PORT: 9997,
      SERVER_JWT_SECRET: "",
      SERVER_TIME_INTERVAL: 60000,
      SERVER_REQ_TIMEOUT: 10000,
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
