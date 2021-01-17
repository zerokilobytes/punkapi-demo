const chai = require("chai");
const expect = require('chai').expect;
const sinon = require('sinon');
const httpMocks = require('node-mocks-http');


var request = {};
var response = {};


const requestheader = require('../src/middlewares/requestheader');
describe('Test Request Header Middleware', function () {
    context('Valid arguments are passed', function () {
        beforeEach(function (done) {
            /* 
             * before each test, set the REQUEST and RESPONSE variables 
            **/
            request = httpMocks.createRequest({
                method: 'POST',
                url: '/api/beer/add-rating',
                headers: {
                    'x-user': 'tester@webmail.com'
                }
            });
            response = httpMocks.createResponse();

            done();
        });

        it('should accept three arguments', function () {
            expect(requestheader.validate.length).to.equal(3);
        });

        it('should return 200 status code', function (done) {
            requestheader.validate(request, response, function next(error) {
                if (response.statusCode != 200) {
                    throw new Error('Expected 200 for status code');
                }
                done();
            });
        });

        it('should return 400 status code when x-user header param is empty', function (done) {
            request = httpMocks.createRequest({
                method: 'POST',
                url: '/api/beer/add-rating',
                headers: {
                }
            });

            requestheader.validate(request, response, function next(error) {
                if (response.statusCode != 400) {
                    throw new Error('Expected 400 for status code');
                }
                done();
            });
        });

        it('should return 400 status code when x-user header param is a valid email address', function (done) {
            request = httpMocks.createRequest({
                method: 'POST',
                url: '/api/beer/add-rating',
                headers: {
                    'x-user': 'bad-email*webmail.com'
                }
            });

            requestheader.validate(request, response, function next(error) {
                if (response.statusCode != 400) {
                    throw new Error('Expected 400 for status code');
                }
                done();
            });
        });
    });
}); 