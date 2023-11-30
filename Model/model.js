const mongoose=require("mongoose");
const { isNumberObject } = require("util/types");

const dataSchema= new mongoose.Schema(
    {
    //     Schemafields:{
    //         reviewSchema:{
    //                 content:{
    //                     type:String,
    //                     required:true,
    //                 },
    //                 rating:{
    //                         type:Number,
    //                         required:true,
    //                 },
    //                 Author:{
    //                     type:String,
    //                     required:true,
    //                 },
    //                 CreatedAt:{
    //                     type:Date,
    //                     required:true,
    //                 },
    //         },
            
                //MovieSchema:{
                        Title:{
                            type:String,
                            required:true,
                        },
                        Description:{
                                type:String,
                                required:true,
                        },
                        Genre:{
                            type:String,
                            required:true,
                        },
                        ReleaseYear:{
                            type:Number,
                            required:true,
                        },
                        Reviews:{
                            type:Array,
                            
                        },
                        ID:{
                            type:Number,
                            required:true,
                        }
                //}
            
        //}

                    }
)
module.exports=mongoose.model("data",dataSchema);