"use strict";

require("@babel/polyfill");

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var logger = (0, _debug.default)('log');
var PORT = process.env.PORT || 9000;

_app.default.listen(PORT);

logger("Find me on http://localhost:".concat(PORT));