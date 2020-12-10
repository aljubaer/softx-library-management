'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _book = require('./book.routes');

Object.defineProperty(exports, 'BookRoutes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_book).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }