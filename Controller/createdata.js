const Data=require("../Model/model");

exports.createdata=async(req,res) => {
    try{
    const{Title,Description,Genre,ReleaseYear,Reviews,ID}=req.body;
    const response=await Data.create({Title,Description,Genre,ReleaseYear,Reviews,ID});
         res.status(200).json({
             success:true,
             data:response,
           message:"successful",
         })
     }
     catch(err){
         console.error(err);
         console.log(err);
         res.status(500).json({
             success:false,
             data:"server failed",
             message:err.message,
         })
     }
}
