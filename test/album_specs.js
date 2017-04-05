const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../server');

describe('Albums', function () {
    describe('/POST album', () => {
        it('it should POST an album', (done) => {
            let album = {
                title: "Ladies and Gentlemen",
                performer: "George Michael",
                cost: 100
            };
            chai.request(server)
                .post('/albums')
                .send(album)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        })
    });
});

