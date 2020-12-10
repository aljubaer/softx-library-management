'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BookServices = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bookModel = require('./book.model.js');

var _bookModel2 = _interopRequireDefault(_bookModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBook = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
        var book;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _bookModel2.default.create(data);

                    case 2:
                        book = _context.sent;

                        console.log(book);
                        return _context.abrupt('return', book);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createBook(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getBook = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var book;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _bookModel2.default.findOne({ _id: id });

                    case 2:
                        book = _context2.sent;
                        return _context2.abrupt('return', book);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getBook(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var removeBook = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
        var data;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _bookModel2.default.deleteOne({ _id: id });

                    case 2:
                        data = _context3.sent;
                        return _context3.abrupt('return', data.deletedCount);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function removeBook(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var fetchAll = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var books;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return _bookModel2.default.find();

                    case 2:
                        books = _context4.sent;

                        console.log(books);
                        return _context4.abrupt('return', books);

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function fetchAll() {
        return _ref4.apply(this, arguments);
    };
}();

var updateBook = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_id, data) {
        var book;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return _bookModel2.default.findOneAndUpdate({ _id: _id }, data, { new: true });

                    case 2:
                        book = _context5.sent;

                        console.log(book);
                        return _context5.abrupt('return', book);

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function updateBook(_x4, _x5) {
        return _ref5.apply(this, arguments);
    };
}();

var BookServices = exports.BookServices = {
    createBook: createBook,
    removeBook: removeBook,
    fetchAll: fetchAll,
    getBook: getBook,
    updateBook: updateBook
};