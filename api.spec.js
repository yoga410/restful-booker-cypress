const request = require('supertest');

const baseUrl = 'https://restful-booker.herokuapp.com'
const method = 'get'
const endPointGet = '/booking'

describe ('API testing', function() {
    it ('get sukses', async function () {
        this.timeout(10000);

        const response = await request(baseUrl)
        .get(endPointGet)
        .expect(200);
        console.log('response.body')
        console.log(response.body)
    });
});