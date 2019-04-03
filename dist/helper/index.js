"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var baseDir = _path.default.join(__dirname, '/../../data/number.json');

var readFile = (0, _util.promisify)(_fs.default.readFile);
var writeFile = (0, _util.promisify)(_fs.default.writeFile);

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "saveNumber",
    value: function () {
      var _saveNumber = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        var findFile, newData, stringData, get;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.findFile();

              case 3:
                findFile = _context.sent;
                newData = _objectSpread({}, findFile, data);
                stringData = JSON.stringify(newData);
                _context.next = 8;
                return writeFile(baseDir, stringData);

              case 8:
                get = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function saveNumber(_x) {
        return _saveNumber.apply(this, arguments);
      }

      return saveNumber;
    }()
  }, {
    key: "getNumbers",
    value: function () {
      var _getNumbers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var files;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return readFile(baseDir, "utf8");

              case 3:
                files = _context2.sent;
                return _context2.abrupt("return", this.convertToArray(this.parseJsonToObject(files)));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getNumbers() {
        return _getNumbers.apply(this, arguments);
      }

      return getNumbers;
    }()
  }, {
    key: "generateNumbers",
    value: function () {
      var _generateNumbers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var savedNumbers, currentNumbers, quantity, i, number, join;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.findFile();

              case 3:
                savedNumbers = _context3.sent;
                currentNumbers = {};
                quantity = 1000;

                for (i = 0; i < quantity; i++) {
                  number = Math.floor(Math.random() * 8 + 1) + Math.random().toString().slice(2, 10);
                  join = 0 + number;
                  if (savedNumbers[join]) delete join[i];
                  currentNumbers[join] = true;
                }

                _context3.next = 9;
                return this.saveNumber(currentNumbers);

              case 9:
                return _context3.abrupt("return", this.convertToArray(currentNumbers));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 12]]);
      }));

      function generateNumbers() {
        return _generateNumbers.apply(this, arguments);
      }

      return generateNumbers;
    }()
  }, {
    key: "parseJsonToObject",
    value: function parseJsonToObject(str) {
      try {
        var obj = JSON.parse(str);
        return obj;
      } catch (e) {
        return {};
      }
    }
  }, {
    key: "convertToArray",
    value: function convertToArray(numbers) {
      var convert = Object.keys(numbers).map(function (data) {
        return data;
      });
      return convert;
    }
  }, {
    key: "findFile",
    value: function () {
      var _findFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _findFile2, savedNumbers;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return readFile(baseDir, "utf8");

              case 3:
                _findFile2 = _context4.sent;
                savedNumbers = this.parseJsonToObject(_findFile2);
                return _context4.abrupt("return", savedNumbers);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function findFile() {
        return _findFile.apply(this, arguments);
      }

      return findFile;
    }()
  }]);

  return Helper;
}();

var _default = Helper;
exports.default = _default;