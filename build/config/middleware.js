'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('../constants/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.use((0, _morgan2.default)(_index.isDev ? 'dev' : 'common'));
    app.use(_express2.default.json());
    app.use((0, _cors2.default)());
};