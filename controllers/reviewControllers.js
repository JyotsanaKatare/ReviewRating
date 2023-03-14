
const reviewModelSchema = require('../models/reviewModelSchema');

const addReview = async(req,res) => {
try{
    const isReviewExists = await reviewModelSchema.findOne({ user_id: req.body.user_id});
    if (isReviewExists) {
        res.status(409).json({
            success : "failure",
            message : "Give another review",
        });
    }else{
        const addReview = await new reviewModelSchema(req.body) 
        try {
            addReview.save();
            res.status(201).json({
               success : "success",
               message : "Review successfully added",
            });
        }catch (err) {
            res.status(400).json({
                success : "failure",
                error : err.message
            });
        }
    }
}catch(err){
    res.status(400).json({
        success : "failure",
        error : err.message
    })
    }
}


const updateReview = async(req,res) => {
    const id = req.params;
    try{
       const newReview = await reviewModelSchema.findByIdAndUpdate(id,{$set : req.body});
       newReview.save();
       res.status(200).json({
        success : "success",
        message : "Review update successfully"
       });
    }catch (err) {
        res.status(400).json({
            success : "failure",
            error : err.message
        });
    }
}


const deleteReview = async(req,res) => {
    const id = req.params;
    try{
        const deletereview = await reviewModelSchema.findByIdAndDelete(id,{$set : req.body});
        res.status(200).json({
            success : "success",
            message : "Delete your review successfully"
        });
    }catch (err) {
        res.status(400).json({
            success : "failure",
            error : err.message
        });
    }
}


const  listReview = async(req,res) => {
   try{
      const listReview = await reviewModelSchema.find();
      res.status(200).json({
        success : "success",
        message : "Show list of review",
        data : listReview
    });
   }catch (err) {
    res.status(400).json({
        success : "failure",
        error : err.message
    });
}
}


const detailReview = async(req,res) => {
    const id = req.params.id;
    try{
        const detailReview = await reviewModelSchema.findOne({id:id})
        .populate({
            path : "company_id",
            select : "companyName location city foundedeOn"
        }).populate({
            path : "user_id",
            select : "userName city profilePic"
        })
        res.status(200).json({
            success : "success",
            message : "Show detail of review",
            data : detailReview
        });
    }catch (err) {
        res.status(400).json({
            successs: "failure",
            error: err.message
        });
    }
}

module.exports = {
     addReview, 
     updateReview,
     deleteReview,
     listReview,
     detailReview
}
