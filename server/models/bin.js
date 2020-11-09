const mongoose=require('mongoose')

const bin_schema=new mongoose.Schema({
        title:{type:"String", required:true},
        body:{type:"String", required:true}
})

mongoose.model("Bin",bin_schema)