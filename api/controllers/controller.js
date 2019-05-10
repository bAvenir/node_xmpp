var service = require('../services/service');

module.exports.login = function (req, res, next) {
  // var auth = req.headers.authorization;
  service.login()
  .then(function(response){
    res.send(response);
  })
  .catch(function(err){
    res.send(err);
  });
};
