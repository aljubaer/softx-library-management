'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthServices = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JWT_SECRET = 'secretkey';

var JWT_OPTS = {
    issuer: 'myapp'
};

var createToken = function createToken(user) {
    if (!user && !user._id) {
        return null;
    }

    var payload = {
        id: user._id,
        role: user.role
    };

    return _jsonwebtoken2.default.sign(payload, JWT_SECRET, JWT_OPTS);
};

var verifyToken = function verifyToken(token) {
    return _jsonwebtoken2.default.verify(token, JWT_SECRET, JWT_OPTS);
};

var getTokenFromHeaders = function getTokenFromHeaders(req, res, next) {
    var token = req.headers.authorization || '';
    token = token.replace("Bearer ", '');
    console.log('token ', token);
    if (token) {
        try {
            var payload = verifyToken(token);
            console.log('payload ', payload);
            req.payload = payload;
            next();
        } catch (error) {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
};

var isAdmin = function isAdmin(req, res, next) {
    if (req.payload && req.payload.role === 'ADMIN') {
        next();
    } else res.sendStatus(401);
};

var AuthServices = exports.AuthServices = {
    createToken: createToken,
    verifyToken: verifyToken,
    getTokenFromHeaders: getTokenFromHeaders,
    isAdmin: isAdmin
};