const chai = require('chai');
const expect = chai.expect;
let config = require('../config/database');
const User = require('../app/models/user');

describe("Models", function () {
    describe('User', function () {
        it('should allow us to create a user', function (done) {
            const user = new User({name: 'Jake'});
            user.save(function (err, user) {
                expect(err).to.equal(null, 'Error while creating user');
                expect(user.name).to.equal('Jake', 'Error saving user\'s name');
                done();
            })
        });
    })
});