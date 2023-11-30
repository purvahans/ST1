const Data=require("../Model/model");
exports.updatedata=async(req,res)  =>{
    try{
        const{id}=req.params;
        const {Title,Description,Genre,ReleaseYear,Reviews}=req.body;

        const data=await Data.findOneAndUpdate(
            {ID:id},
            {Title,Description,Genre,ReleaseYear,Reviews,updateAt: Date.now()},
        );

        res.json({
            suceess:true,
            data:data,
            message:"Data Updated"
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
