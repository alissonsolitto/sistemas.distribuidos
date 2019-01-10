'use strict';

var Store = require('./StoreService');

exports.createUser = function(args, res, next) {  
  res.end(JSON.stringify(Store.addUser(args.body.value)));
}

exports.deleteUser = function(args, res, next) {
  res.end(JSON.stringify(Store.delUser(args.id.value)));
}

exports.getUser = function(args, res, next) {
  res.end(JSON.stringify(Store.getAllUser()));
}

exports.updateUser = function(args, res, next) {
  res.end(JSON.stringify(Store.updateUser(args.body.value, args.id.value)));
}