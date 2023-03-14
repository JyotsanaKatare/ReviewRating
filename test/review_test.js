
let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/reviewModelSchema");
let routes = require("../routes/reviewRouters");

chai.should();
chai.use(chaiHttp);

describe("POST/api/reviews", () => {
    // it("It  should return add review detail:", (done) => {
    //     const data = {
    //         enterYourReview: "better better",
    //         rating: 4,
    //         company_id: "63fda42372a6e64ed8fef744",
    //         user_id: "63d7291f42cdd0b68a8e9556"
    //     };
    //     chai
    //         .request(server)
    //         .post("/review/add_review")
    //         .send(data)
    //         .end((err, res) => {
    //             res.should.have.status(201);
    //             res.should.be.a("object");
    //             res.body.should.have.property("success").eq("success");
    //             res.body.should.have.property("message").eq("Review successfully added");
    //            done();
    //         })
    // })
})

it("It  should return add review detail Error message:", (done) => {
    const data = {
        enterYourReview: "osumeee ",
        rating: 5,
        company_id: "63d41f14086a1137ac31dd0d",
        user_id: "64013d7f2e067efa15e3bdb5"
    };
    chai
        .request(server)
        .post("/review/add_review")
        .send(data)
        .end((err, res) => {
            res.should.have.status(409);
            res.should.be.a("object");
            res.body.should.have.property("success").eq("failure");
            res.body.should.have.property("message").eq("Give another review");
            done();
        })
})

describe("PATCH/api/reviews", () => {
    it("It  should return update review detail:", (done) => {
        const data = {
            enterYourReview: "better",
            rating: 4,
            company_id: "63d41f14086a1137ac31dd0d",
            user_id: "63c89cf727565a8b2dce3003"
        };
        chai
            .request(server)
            .post("/review/update_review/64015447a83fe66717aa6094")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Review update successfully");
                done();
            })
    })
})