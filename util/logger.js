const winston = require("winston");

const stampFunction = function (time) {
  const date = new Date();
  const localeString = date.toLocaleString();
  const ms = ("000" + date.getMilliseconds()).substr(-3);
  return `${localeString.substr(0,19)}:${ms} ${localeString.substr(20)}`;
};

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      silent: false,
      prettyPrint: true,
      timestamp: stampFunction
    }),
    new (winston.transports.File)({
      filename: 'console.log',
      timestamp: stampFunction
    })
  ]
});

module.exports = logger;
