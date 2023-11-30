const Data=require("../Model/model");

exports.getdata=async(req,res) =>{
    try{
        const datas=await Data.find({});
        res.status(200).json({
            success:true,
            data:datas,
            message:"Data fetched",

        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
    
        })
    }
}



exports.getdataById=async(req,res) =>{
    try{
        const id=req.params.id;
        const data=await Data.findOne({ID:id})

        if(!data){
            return res.status(404).json({
                success:false,
                message:"No Data Found"
            })
        }
        res.status(202).json({
            success:true,
            data:data,
            message:"Data Fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
    
        })
    }
}