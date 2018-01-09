const assert = require('assert');
const challenge = require('../index');

describe('Zesty.io Challenge', () => {
    describe('Creates stringified response body', () => {

        it('Should create body with' , () => {
          const actual = challenge.createResponseBody('bob@mail.com', 'Bob', 'Smith', 'https://github.com/bobsmith', 'https://bobsmith.io')
          const expected = JSON.stringify({
            email: 'bob@mail.com',
            name: {
              first: 'Bob',
              last: 'Smith',
            },
            github: 'https://github.com/bobsmith',
            website: 'https://bobsmith.io'
          });

          assert.equal(actual, expected);
        });

    })
})
