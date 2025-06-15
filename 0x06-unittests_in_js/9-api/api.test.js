const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  describe('Index Page', () => {
    it('should return a welcome message', (done) => {
      request.get('http://localhost:7865', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('Cart Page', () => {
    it('should return the correct status code when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/5555', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal('Payment methods for cart 5555');
        done();
      });
    });
    it('should return the correct status code when :id is not a number', (done) => {
      request.get('http://localhost:7865/cart/anything', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
    it('should return the correct status code when :id is not given', (done) => {
      request.get('http://localhost:7865/cart/', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
