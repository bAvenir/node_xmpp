var config = module.exports = {};

config.port = process.env.PORT;
config.timeInterval = process.env.SERVER_TIME_INTERVAL;
config.timeout = Number(process.env.SERVER_REQ_TIMEOUT);
config.rootpath = "/home/app"; // __dirname
