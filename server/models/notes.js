const mongoose=require('mongoose')


const notes_schema= new mongoose.Schema({
    title:{type:"String",required:true},
    body:{type:"String",required:true}
})
mongoose.model("Notes",notes_schema)
