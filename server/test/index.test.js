var app = require('../index');
var supertest = require('supertest');
var request = supertest(app);
var should = require('should');

describe('GET /uisdc', function () {
  it('should return data', function (done) {
    request.get('/uisdc')
      .end(function (err, res) {
        res.status.should.equal(200);
        done(err);
      });
  });
});
