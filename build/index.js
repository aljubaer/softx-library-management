'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./config/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

require('./config/db');

var _modules = require('./modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _middleware2.default)(app);

app.use('/user', _modules.UserRoutes);
app.use('/book', _modules.BookRoutes);

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('../swagger.json');

app.get('/', function (req, res) {
    res.send('Welcome');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 3000, function (error) {
    if (error) {
        console.log(error);
    }
    console.log('Server listening on port 3000');
});