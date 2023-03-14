
const compModelSchema = require("../models/compModelSchema");
const reviewModelSchema = require ("../models/reviewModelSchema")

const addCompany = async(req,res) => {
    try{
        const isCompanyExists = await compModelSchema.findOne({ companyName: req.body.companyName });
        if (isCompanyExists) {
            res.status(409).json({
                success : "failure",
                message : "Company already exists",
            });
        }else{
            const addCompany = await new compModelSchema(req.body) 
            try {
                const filePath = `/uploads/${req.file.filename}`;
                addCompany.company_logo = filePath;
                addCompany.save();
                res.status(201).json({
                    success : "success",
                    message : "Company successfully added ",
                });
            }catch (err) {
                res.status(400).json({
                    success : "failure",
                    Error : err.message,
                });
            }
        }
    }catch(err){
        res.status(400).json({
            success : "failure",
            Error : err.message 
        })

    }
}


const getCompany = async(req,res) => {
    try{
        const company = await compModelSchema.find();
        res.status(200).send({
            success : "success",
            message : "company name display",
            data : company
    })
    }catch(err){
        res.status(400).json({
            success : "failure",
            Error : err.message
        })
    }
}


const compReviewDetail = async(req,res) => {
    const id = req.params.id
    try{
        const CompanyDetails = await compModelSchema.findById(id)
        const review = await reviewModelSchema.find({ company_id : id})
        .populate({
            path : "user_id",
            select : "userName city profilePic",
        }).populate({
            path : "company_id",
            select : "id"
         });
        const compReviewDetail = {
            companyName : CompanyDetails,
            review : review
        }
        return res.status(200).json({
            success : "success",
            message : "Show company review details here",
            data : compReviewDetail
        });
    }catch(err){
        res.status(500).json({
            success : "failure",
            Error : err.message
        })
    }
}


const compSearch = async(req,res) => {
    try{
        const isSearch = await compModelSchema.find({city : req.body.city});
        res.status(200).json({
            success : "success",
            message : "Show your searching company here",
            data : isSearch
        })
    }catch(err){
        res.status(500).json({
            success : "failure",
            Error : err.message
        })
    }   
} 



module.exports = { 
    addCompany,
    getCompany,
    compReviewDetail,
    compSearch
}
