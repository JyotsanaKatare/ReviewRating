
// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const utils = require("../models/userModelSchema");
// let routes = require("../routes/userRouters");

// chai.should();
// chai.use(chaiHttp);

// describe("POST/api/users", () => {
//     it("It  should return signUp user detail :", (done) => {
//         const data = {
//             userName: "Raman",
//             userEmail: "ramana@gmail.com",
//             password: "@@@jjjjAAAAA123123",
//             phone_no: "5555588888",
//             city: "abcabc",
//             state: "xyzxyz"
//         };
//         chai
//             .request(server)
//             .post("/user/register")
//             .set("Content-Type", "application/x-www-form-urlencoded")
//             .field(data)
//             .attach("profilePic", "/Users/a/Desktop/image2.jpg", "image2.jpg")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("User's data successfully registered");
//                 done();
//             })
//     })
// })

// it("It  should return signUp user detail Error message:", (done) => {
//     const data = {
//         userName: "Raman",
//         userEmail: "001ramann@gmail.com",
//         password: "@@@jjjjAAAAA123123",
//         phone_no: "5555588888",
//         city: "abcabc",
//         state: "xyzxyz"
//     };
//     chai
//         .request(server)
//         .post("/user/register")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(409);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Entered email is already exists");
//             done();
//         })
// })

// it("It  should return login user detail :", (done) => {
//     const data = {
//         userEmail: "abhi123@gmail.com",
//         password: "@@@jjjjAAAAA123123",
//     };
//     chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("User login successfull");
//             res.body.should.have.property("token");
//             done();
//         })
// })

// it("It should return login user Error message :", (done) => {
//     const data = {
//         userEmail: "abhiiii@gmail.co",
//         password: "@@@jjjjAAAAA123123",
//     };
//     chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Not registered user");
//             done();
//         })
// })

// it("It should return login Email or Password Error message:", (done) => {
//     const data = {
//         userEmail: "abhi@gmail.com",
//         password: "@@@jjjjAAAAA1231234",
//     };
//     chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(400);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Email or Password is invalid");
//             done();
//         })
// })

// it("It should return reset password email:", (done) => {
//     const data = {
//         userEmail: "001ramann@gmail.com",
//     };
//     chai
//         .request(server)
//         .post("/user/passwordEmailSend")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("Email send to user successfully");
//             done();
//         })
// })

// it("It should return reset password email Error message:", (done) => {
//     const data = {
//         userEmail: "45ramann@gmail.com",
//     };
//     chai
//         .request(server)
//         .post("/user/passwordEmailSend")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(403);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Email user is not found");
//             done();
//         })
// })

// it("It should return reset password:", (done) => {
//     const data = {
//         newPassword: "&&&aaaaSSSSS123124",
//         confirmPassword: "&&&aaaaSSSSS123124"
//     };
//     chai
//         .request(server)
//         .post("/user/resetPassword/63c89cf727565a8b2dce3003/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc4MDMwNTAsImV4cCI6MTY3NzgwMzk1MH0.07Kd1FLEzaOR_tkqHhyuQPq6_IiZ0eqxeRodueTXjkE")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("Password successfully update");
//             done();
//         })
// })

// it("It should return reset password Error message:", (done) => {
//     const data = {
//         newPassword: "&&&aaaaSSSSS123124",
//         confirmPassword: "&&&aaaaSSSSS1231255"
//     };
//     chai
//         .request(server)
//         .post("/user/resetPassword/63c89cf727565a8b2dce3003/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc4MDMwNTAsImV4cCI6MTY3NzgwMzk1MH0.07Kd1FLEzaOR_tkqHhyuQPq6_IiZ0eqxeRodueTXjkE")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(403);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("Newpassword and Confirmpassword is not match");
//             done();
//         })
// })

// // it("It should return reset password Error message:", (done) => {
// //     const data = {
// //         newPassword: "&&&aaaaSSSSS123124",
// //         confirmPassword: "&&&aaaaSSSSS123123"
// //     };
// //     chai
// //         .request(server)
// //         .post("/user/resetPassword/63c89cf727565a8b2dce3003/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc4MDMwNTAsImV4cCI6MTY3NzgwMzk1MH0.07Kd1FLEzaOR_tkqHhyuQPq6_IiZ0eqxeRodueTXjkE")
// //         .send(data)
// //         .end((err, res) => {
// //             res.should.have.status(403);
// //             res.should.be.a("object");
// //             res.body.should.have.property("success").eq("failure");
// //             res.body.should.have.property("message").eq("Email user is not found");
// //             done();
// //         })
// // })
