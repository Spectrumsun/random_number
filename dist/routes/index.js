"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _RandomNumber = _interopRequireDefault(require("../controllers/RandomNumber"));

var _types = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).json({
    success: _types.tsConstructSignatureDeclaration,
    message: 'Random Phone Number Generator'
  });
});
router.get('/numbers', _RandomNumber.default.getSavedNumbers);
router.post('/random', _RandomNumber.default.createNumbers); // A catch-all routes

router.use('*', function (req, res) {
  return res.status(404).json({
    message: 'That url does not exist on this server 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫'
  });
});
var _default = router;
exports.default = _default;