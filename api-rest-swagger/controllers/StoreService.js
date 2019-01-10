'use strict';

var user = [];

exports.addUser = function (u) {
  try {
    user.push(u);    
    return u;
  }
  catch (err) {
    return err;
  }
}

exports.getAllUser = function () {
  try {
    return user;
  }
  catch (err) {
    return err;
  }
}

exports.delUser = function (id) {
  try {
    user.splice(id, 1);
    return id;
  }
  catch (err) {
    return err;
  }
}

exports.updateUser = function (u, id) {
  try {
    user[id] = u;
    return u;
  }
  catch (err) {
    return err;
  }
}