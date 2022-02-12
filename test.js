/* global describe, it, beforeEach, afterEach */
var expect = require('chai').expect;
var request = require('request');

describe('/ endpoint', function () {
  var url = 'http://localhost:3000/';
  var app = require('./app');
  var instance;
  beforeEach(function () {
    instance = app.listen(3000);
  });
  afterEach(() => {
    instance.close();
  });
  it('returns status 200', function(done) {
    // request(url, function(error, response, body)
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('returns "Hello World!" string', function(done) {
    // request(url, function(error, response, body)
    request(url, function (error, response) {
      expect(response.body).to.equal('Hello World!');
      done();
    });
  });
});
