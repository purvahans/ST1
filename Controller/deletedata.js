const Data=require("../Model/model");
exports.deletedata=async(req,res)  =>{
    try{
        const{ID}=req.params;
        await Data.findOneAndDelete(ID.toString());

        res.json({
            suceess:true,
            message:"Data deleted"
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