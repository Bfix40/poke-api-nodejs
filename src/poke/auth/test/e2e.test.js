const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const app = require('../../app').app;

chai.use(chaiHttp);

describe('Suite de test de E2E de AUTH', () => {
    it('Should retunr 200 and token for succesful login', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: 'bfix40@gmail.com',
                password: 'root',
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                chai.assert.equal(res.body.token, 'string');
                chai.request(app)
                    .get('/api/v1/post')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200);
                        done();
                    });
            });
    });
    it('Should retunr 200 and token for succesful login', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: 'bfix40@gmail.com',
                password: 'root',
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                chai.assert.equal(res.body.token, 'string');
                chai.request(app)
                    .get('/api/v1/post')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200);
                        chai.request(app)
                            .post('/api/v1/post')
                            .send({
                                title: 'Test',
                                content: 'Testing for E2E',
                                user_id: '1',
                            })
                            .set('content-type', 'application/json')
                            .set('Authorization', `JWT ${token}`)
                            .end((err, res) => {
                                chai.assert.equal(res.status, 201);
                                done();
                            });
                    });
            });
    });
    it('Should retunr 204 and token for succesful add of post', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: 'bfix40@gmail.com',
                password: 'root',
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                chai.assert.equal(res.body.token, 'string');
                chai.request(app)
                    .get('/api/v1/post')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200);
                        chai.request(app)
                            .post('/api/v1/post')
                            .send({
                                title: 'Test',
                                content: 'Testing for E2E',
                                user_id: '1',
                            })
                            .set('content-type', 'application/json')
                            .set('Authorization', `JWT ${token}`)
                            .end((err, res) => {
                                chai.assert.equal(res.status, 201);
                               chai.request(app)
                                   .delete('/api/v1/post/1')
                                   .set('Authorization', `JWT ${token}`)
                                   .end((err, res) => {
                                       chai.assert.equal(res.status, 204);
                                       done();
                                   });;
                            });
                    
                    });
                
            });
        
    });
});
