'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserServices = exports.createUser = exports.getUser = exports.authUser = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user2 = require('./user.model');

var _user3 = _interopRequireDefault(_user2);

var _auth = require('../../services/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authUser = exports.authUser = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var token, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = _auth.AuthServices.getTokenFromHeaders(req);

                        if (token) {
                            _context.next = 4;
                            break;
                        }

                        req.user = null;
                        return _context.abrupt('return', res.sendStatus(401));

                    case 4:
                        _context.next = 6;
                        return _user3.default.findById(token.id);

                    case 6:
                        user = _context.sent;

                        if (user) {
                            _context.next = 10;
                            break;
                        }

                        req.user = null;
                        return _context.abrupt('return', res.sendStatus(401));

                    case 10:

                        req.user = user;
                        return _context.abrupt('return', next());

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function authUser(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var fetchAllUsers = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var users;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        users = _user3.default.find();
                        return _context2.abrupt('return', users);

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function fetchAllUsers() {
        return _ref2.apply(this, arguments);
    };
}();

var getUser = exports.getUser = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
        var _user, accessToken, user;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _user3.default.findOne({ email: data.email });

                    case 3:
                        _user = _context3.sent;

                        if (_user) {
                            _context3.next = 7;
                            break;
                        }

                        console.error("User not found!");
                        throw new Error('User not exist');

                    case 7:
                        accessToken = _auth.AuthServices.createToken(_user);
                        user = {
                            id: _user._id,
                            name: _user.name,
                            email: _user.email,
                            accessToken: accessToken
                        };
                        _context3.next = 11;
                        return _user3.default.updateOne({ _id: user._id }, { accessToken: accessToken });

                    case 11:
                        return _context3.abrupt('return', accessToken);

                    case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](0);

                        console.error(_context3.t0.message);
                        throw new Error(_context3.t0.message);

                    case 18:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 14]]);
    }));

    return function getUser(_x4) {
        return _ref3.apply(this, arguments);
    };
}();

var createUser = exports.createUser = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data) {
        var user;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return getUser(data);

                    case 3:
                        if (!_context4.sent) {
                            _context4.next = 5;
                            break;
                        }

                        throw new Error('User exist');

                    case 5:
                        _context4.next = 13;
                        break;

                    case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4['catch'](0);
                        _context4.next = 11;
                        return _user3.default.create(data);

                    case 11:
                        user = _context4.sent;
                        return _context4.abrupt('return', user);

                    case 13:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 7]]);
    }));

    return function createUser(_x5) {
        return _ref4.apply(this, arguments);
    };
}();

var UserServices = exports.UserServices = {
    getUser: getUser,
    createUser: createUser,
    fetchAllUsers: fetchAllUsers
};