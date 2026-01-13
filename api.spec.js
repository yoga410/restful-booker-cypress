const { it } = require('mocha');
const request = require('supertest');

const baseUrl = 'https://restful-booker.herokuapp.com';
const method = 'get';
const endPointGet = '/booking';
const endPointError = '/bokinggg';
const endPointGetSpecific = '/booking/2';

const endPointPost = '/booking';
const header = { "Content-Type": "application/json" };

const body = {
    "firstname": "Josh",
    "lastname": "Allen",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "super bowls"
}

describe ('API testing', function() {
    this.timeout(30000);
//Method get
    it ('get sukses', async function () {
        const response = await request(baseUrl)
        .get(endPointGet)
        .expect(200);
        console.log('response.body')
        console.log(response.body)
        console.log('response.statusCode')
        console.log(response.statusCode)
    });

    it ('sukses with param', async function () {
        const response = await request(baseUrl)
        .get(endPointGetSpecific)
        console.log('response.body')
        console.log(response.body)
    });
    it(
        'get sukses', async function () {

        const response = await request(baseUrl)
        .get(endPointError)
        console.log('response.statusCode')
        console.log(response.statusCode)
    });

//Method Post

    it('post', async function () {
        const response = await request(baseUrl)
        .post(endPointPost)
        .set(header)
        .send(body)
        console.log('Response Body:'); 
        console.log(response.body);
    });
});