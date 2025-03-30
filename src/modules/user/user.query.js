const userModel = require('./../../models/user.model');

const userQuery = {};

userQuery.registerUser = function(userDetails){
  return userModel.create(userDetails);
}

module.exports = userQuery;