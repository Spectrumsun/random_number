"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.urlencoded({
  limit: '50mb',
  extended: true
}), _bodyParser.default.json());
app.use(_express.default.static(_path.default.join(__dirname, '/../client/public')));
app.use(_express.default.static(_path.default.join(__dirname, '/../client/src')));
app.use('/api/v1/', _routes.default);
app.get('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '/../client/public/index.html'));
});
var _default = app;
exports.default = _default;