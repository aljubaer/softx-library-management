'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _bookService = require('./book.service.js');

var _auth = require('../../services/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.post('/', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var book;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _bookService.BookServices.createBook(req.body);

                    case 3:
                        book = _context.sent;

                        res.status(200).json(book);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        res.status(400).json({ message: _context.t0.message });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

routes.get('/', [_auth.AuthServices.getTokenFromHeaders, _auth.AuthServices.isAdmin], function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var books;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _bookService.BookServices.fetchAll();

                    case 3:
                        books = _context2.sent;

                        res.status(200).json(books);
                        _context2.next = 10;
                        break;

                    case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](0);

                        res.status(500).json({ message: _context2.t0.message });

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

routes.get('/:bookId', function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var id, book;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        id = req.params.bookId;
                        _context3.next = 4;
                        return _bookService.BookServices.getBook(id);

                    case 4:
                        book = _context3.sent;

                        if (book) {
                            res.status(200).json(book);
                        } else {
                            res.status(404).json({ message: "Book not found" });
                        }
                        _context3.next = 11;
                        break;

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](0);

                        res.status(500).json({ message: _context3.t0.message });

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

routes.delete('/:bookId', function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
        var id, count;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        id = req.params.bookId;
                        _context4.next = 4;
                        return _bookService.BookServices.removeBook(id);

                    case 4:
                        count = _context4.sent;

                        if (count) {
                            res.status(200).json({ message: "Book has been deleted" });
                        } else {
                            res.status(404).json({ message: "Book not found" });
                        }
                        _context4.next = 11;
                        break;

                    case 8:
                        _context4.prev = 8;
                        _context4.t0 = _context4['catch'](0);

                        res.status(500).json({ message: _context4.t0.message });

                    case 11:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
    };
}());

routes.put('/:bookId', function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var id, updateOptions, book;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        id = req.params.bookId;
                        updateOptions = req.body;
                        _context5.next = 5;
                        return _bookService.BookServices.updateBook(id, updateOptions);

                    case 5:
                        book = _context5.sent;

                        res.status(200).json(book);
                        _context5.next = 12;
                        break;

                    case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5['catch'](0);

                        res.status(404).json({ message: "Book not found" });

                    case 12:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[0, 9]]);
    }));

    return function (_x10, _x11) {
        return _ref5.apply(this, arguments);
    };
}());

routes.put('/:bookId/active', function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
        var id, updateOptions, book;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        id = req.params.bookId;
                        updateOptions = { isActive: true };
                        _context6.next = 5;
                        return _bookService.BookServices.updateBook(id, updateOptions);

                    case 5:
                        book = _context6.sent;

                        res.status(200).json(book);
                        _context6.next = 12;
                        break;

                    case 9:
                        _context6.prev = 9;
                        _context6.t0 = _context6['catch'](0);

                        res.status(404).json({ message: "Book not found" });

                    case 12:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined, [[0, 9]]);
    }));

    return function (_x12, _x13) {
        return _ref6.apply(this, arguments);
    };
}());

routes.put('/:bookId/deactive', function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
        var id, updateOptions, book;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        id = req.params.bookId;
                        updateOptions = { isActive: false };
                        _context7.next = 5;
                        return _bookService.BookServices.updateBook(id, updateOptions);

                    case 5:
                        book = _context7.sent;

                        res.status(200).json(book);
                        _context7.next = 12;
                        break;

                    case 9:
                        _context7.prev = 9;
                        _context7.t0 = _context7['catch'](0);

                        res.status(404).json({ message: "Book not found" });

                    case 12:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, undefined, [[0, 9]]);
    }));

    return function (_x14, _x15) {
        return _ref7.apply(this, arguments);
    };
}());

exports.default = routes;