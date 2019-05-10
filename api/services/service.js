// Global variables and objects
var Log = require('../../classes/logger');
var xmpp = require('simple-xmpp');
// var config = require('../../configuration/configuration');

/*
Get property of item
*/
module.exports.login = function(){
  var logger = new Log();
  return new Promise(function(resolve, reject) {
    xmpp.connect({
    	jid: "<agid>@vicinity.ws",
    	password: "<pwd>",
    	host: 'commserver.vicinity.ws',
    	port: 5222
    });

    xmpp.on('online', function(data) {
      logger.debug(data);
    	resolve('Connected with JID: ' + data.jid.user);
    });

    xmpp.on('error', function(err) {
      logger.error('Error ' + err);
    	reject(err);
    });
  });
}
