
let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/compModelSchema");
let routes = require("../routes/compRouters");

chai.should();
chai.use(chaiHttp);

// describe("POST/api/companies", () => {
//     it("It  should return add company detail :", (done) => {
//         const data = {
//             companyName: "Tech mahindra",
//             location: "Indore",
//             city: "Indore",
//             foundedOn: "2002/12/11",
//             userId: "63c7420a7902d75955039262"
//         };
//         chai
//             .request(server)
//             .post("/company/addCompany")
//             .set("Content-Type", "application/x-www-form-urlencoded")
//             .field(data)
//             .attach("profilePic", "/Users/a/Desktop/image2.jpg","image2.jpg")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Company successfully added");
//                 done();
//             })
//     })
//})

// it("It  should return add company detail :", (done) => {
//     const data = {
//         companyName: "Tech mahindra",
//         location: "Indore",
//         city: "Indore",
//         foundedOn: "2002/12/11",
//         userId: "63c7420a7902d75955039262"
//     };
//     chai
//         .request(server)
//         .post("/company/addCompany")
//         .set("Content-Type", "application/x-www-form-urlencoded")
//         .field(data)
//         .attach("profilePic", "/Users/a/Desktop/image2.jpg","image2.jpg")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(409);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Company already exists");
//             done();
//         })
// })

// describe("GET/api/companies", () => {
//     it("It  should return get company detail :", (done) => {
//         const data = {};
//         chai
//             .request(server)
//             .get("/company/getCompany")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("company name display");
//                 done();
//             })
//     })
// })  

// it("It  should return company review detail :", (done) => {
//     const data = {};
//     chai
//         .request(server)
//         .get("/company/comp_review_detail/63d41f14086a1137ac31dd0d")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("Show company review details here");
//             done();
//         })
// })

// it("It  should return search company :", (done) => {
//     const data = {
//         city:"Indore"
//     };
//     chai
//         .request(server)
//         .get("/company/search_comp")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("Show your searching company here");
//             done();
//         })
// })
