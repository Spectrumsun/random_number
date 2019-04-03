"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("../../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Random Number', function () {
  it('should access the endpoint successfully  ', function (done) {
    (0, _supertest.default)(_app.default).get('http://localhost:9000/api/v1/').set('Content-Type', 'application/json').expect(400).end(function (err, res) {
      expect(res.body.success).toEqual(false);
      if (err) return done(err);
      done();
    });
  });
});