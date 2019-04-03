"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helper = _interopRequireDefault(require("../helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RandomNumber =
/*#__PURE__*/
function () {
  function RandomNumber() {
    _classCallCheck(this, RandomNumber);
  }

  _createClass(RandomNumber, null, [{
    key: "createNumbers",
    value: function () {
      var _createNumbers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var newNumbers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _helper.default.generateNumbers();

              case 2:
                newNumbers = _context.sent;
                res.status(201).json({
                  success: true,
                  message: 'Number created',
                  newNumbers: newNumbers
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createNumbers(_x, _x2) {
        return _createNumbers.apply(this, arguments);
      }

      return createNumbers;
    }()
  }, {
    key: "getSavedNumbers",
    value: function () {
      var _getSavedNumbers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var numbers;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _helper.default.getNumbers();

              case 2:
                numbers = _context2.sent;
                res.status(200).json({
                  success: true,
                  message: 'List of Numbers',
                  savedNumbers: numbers
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSavedNumbers(_x3, _x4) {
        return _getSavedNumbers.apply(this, arguments);
      }

      return getSavedNumbers;
    }()
  }]);

  return RandomNumber;
}();

;
var _default = RandomNumber;
exports.default = _default;