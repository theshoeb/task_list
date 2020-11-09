const express = require('express')
const app = express();
const mongoose = require('mongoose')
const PORT =5000
const{MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{ useNewUrlParser: true ,useUnifiedTopology: true })
mongoose.connection.on('connected',()=>{
    console.log("conntected to mongoose yup")
    })

mongoose.connection.on('error',(err)=>{
console.log("error in connecting",err)
})

require('./models/notes')
require('./models/bin')


app.use(express.json())
app.use(require('./routes/notes.js'))
app.listen(PORT,()=>{
  console.log("Kon jagaya Mujhe.......")
})