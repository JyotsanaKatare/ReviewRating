
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../services/emailService");
const userModelSchema = require("../models/userModelSchema");


const signUpUser = async (req, res) => {
    try{
        const isEmailExists = await userModelSchema.findOne({userEmail : req.body.userEmail});
        if(isEmailExists){
            res.status(409).json({
                success : "failure",
                message : "Entered email is already exists"
            });
        }else {
            const signUpUser = await new userModelSchema(req.body)
            const salt = await bcrypt.genSalt(10);
            signUpUser.password = await bcrypt.hash(req.body.password, salt);
            try{
                const filePath = `/uploads/${req.file.filename}`;
                signUpUser.profilePic = filePath;
                signUpUser.save();
                res.status(201).json({
                    success : "success",
                    message : "User's data successfully registered",
                });
            }catch(err){
                res.status(400).json({
                    success : "failure",
                    message :  err.message
                });
            }
        }
    }catch (err) {
        res.status(400).json({
            success : "failure",
            message : err.message
        })
    }
}

           
const userLogin = async (req,res) => {
    try{
        const { userEmail, password } = req.body;
        if(userEmail && password) {
            const user = await userModelSchema.findOne({ userEmail:userEmail });
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (user.userEmail === userEmail && isMatch) {
                //Generate jwt
                const token = jwt.sign({ userId:user.user_id}, process.env.JWT_SECRET_KEY,{expiresIn: '5d'});
                res.status(200).send({
                    success : "success",
                    message : "User login successfull",
                    "data": user,
                    "token": token
                });
                }else {
                    res.status(400).send({
                        success : "failure",
                        message : "Email or Password is invalid"
                    });
                }
            }else {
                res.status(400).send({
                    success : "failure",
                    message : "Not registered user"
                });
            }
        }
    }catch (error) {
           res.status(400).json({
            success : "failure",
            message : err.message
           })
    }
}


const resetPasswordEmail = async (req,res) => {
const { userEmail } = req.body;
    try{
        const user = await userModelSchema.findOne({ userEmail : userEmail });
        if(user != null) {
            const secret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ userId:user._Id}, secret,{expiresIn: '15m'});
            const link = 'http://127.0.0.1:7000/api/user/reset/${user._Id}/${token}';
            const id = user._id
            const emailSend = sendEmail(userEmail,token,id) 
            return res.status(200).json({
                success : "success",
                message : "Email send to user successfully",
                userId : user._id,
                token : token
            });
            }else{
                res.status(403).json({
                    success : "failure",
                    message : "Email user is not found"
                });
            }
        }catch(err) { 
            res.status(500).json({
                success : "failure",
                message : err.message
            });
        }
    }


const resetPassword = async(req,res) => {
const {id, token} = req.params;
const { newPassword, confirmPassword} = req.body;
    try{
        const checkUser = await userModelSchema.findById(id);
        if(checkUser !=null){
            const secretKey = process.env.JWT_SECRET_KEY;
            jwt.verify(token,secretKey);
            if(newPassword === confirmPassword){
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(confirmPassword,salt);
                await userModelSchema.findByIdAndUpdate(checkUser._Id,{$set : { password : password },});
                res.status(200).json({
                    success: "success",
                    message :"Password successfully update",
                });
            }else{
                res.status(403).json({
                    success : "failure",
                    message :"Newpassword and Confirmpassword is not match",
                });
            }
        }else{
            res.status(403).json({
                success :"failure",
                message :"Email user is not found"
            });
        }
    }catch (err){
        res.status(500).json({
            success :"failure",
            message : err.message,
        });
    }
};            
         
        
module.exports = {
    signUpUser,
    userLogin,
    resetPasswordEmail,
    resetPassword
}
