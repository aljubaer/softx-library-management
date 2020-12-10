"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.set("debug", true);
_mongoose2.default.set("useCreateIndex", true);

try {
	_mongoose2.default.connect(_constants.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
} catch (error) {
	_mongoose2.default.createConnection(_constants.DB_URL, {
		useNewURlParser: true,
		useUnifiedTopology: true
	});
}

_mongoose2.default.connection.once("open", function () {
	console.log("MongoDB running");
}).on("error", function (err) {
	throw err;
});