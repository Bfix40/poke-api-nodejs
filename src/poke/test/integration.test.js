const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app").app;

chai.use(chaiHttp);

describe("Integration Testing For Users", () => {
    it("Should return all the users", (done) => {
        chai.request(app)
            .get("/api/v1/users")
            .end((err, res) => {

            });
    });
});