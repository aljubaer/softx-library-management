'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _user = require('./user.controller');

var routes = (0, _express.Router)();

routes.post('/signup', _user.signUp);
routes.post('/login', _user.login);
routes.get('/', _user.getAllUsers);

exports.default = routes;