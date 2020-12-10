'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllUsers = exports.login = exports.signUp = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _yup = require('yup');

var Yup = _interopRequireWildcard(_yup);

var _user = require('./user.service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUp = exports.signUp = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var data, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log('SIgning up');
                        data = req.body;
                        _context.next = 5;
                        return _user.UserServices.createUser(data);

                    case 5:
                        user = _context.sent;

                        console.log(user);
                        res.status(200).json({ message: 'User registration successful' });
                        _context.next = 13;
                        break;

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](0);

                        res.status(401).json({ message: _context.t0.message });

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 10]]);
    }));

    return function signUp(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var login = exports.login = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var data, accessToken;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _context2.prev = 1;
                        _context2.next = 4;
                        return (0, _user.getUser)(data);

                    case 4:
                        accessToken = _context2.sent;

                        console.log(accessToken);
                        res.status(200).json(accessToken);
                        _context2.next = 12;
                        break;

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](1);

                        res.status(401).json({ message: _context2.t0.message });

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[1, 9]]);
    }));

    return function login(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var getAllUsers = exports.getAllUsers = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var users;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _user.UserServices.fetchAllUsers();

                    case 3:
                        users = _context3.sent;

                        res.status(200).json(users);
                        _context3.next = 10;
                        break;

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3['catch'](0);

                        res.status(500).json({ message: _context3.t0.message });

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 7]]);
    }));

    return function getAllUsers(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();