const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Notes = mongoose.model("Notes")
const Bin =mongoose.model("Bin")

router.get('/mynotes',(req,res)=>{
      
      Notes.find()
      .then(notes=>{
            res.json({notes})
      })
      .catch(err=>{
          console.log(err)
      })
})

router.post('/postnotes',(req,res)=>{
      const {title,body}=req.body
      if(!title || !body){
        return   res.status(422).json({error:"Please add all field"})
  }

  const notes= new Notes({
      title,
      body
  })

      notes.save()
      .then(result=>{  res.json({notes:result}) })
      .catch(err=>{ console.log(err) })
 
})

router.delete('/deletenote/:noteId',(req,res)=>{
      Notes.findOne({_id:req.params.noteId})
      .exec((err,post)=>{
          if(err||!post){
              return res.status(422).json({error:err})
          }
// saving deleted note in Bin for Recycle-------- 
      const {title,body}=post
      const bin=new Bin({title,body})
      bin.save()
      .then(result=>{ console.log(`Moved to bin ${result}`) })
      .catch(err=>{ console.log(err) })
//.................now remove note from Notes Db...........................
      post.remove()
      .then(result=>{
      res.json(result)
      }).catch(err=>{console.log(err)})
      })
})

router.delete('/deletebin/:noteId',(req,res)=>{
      Bin.findOne({_id:req.params.noteId})
      .exec((err,post)=>{
          if(err||!post){
              return res.status(422).json({error:err})
          }
          post.remove()
      .then(result=>{
      res.json(result)
      }).catch(err=>{console.log(err)})
      })
})

router.get('/bin',(req,res)=>{
    Bin.find()
    .then(trash=>{
        res.json({trash})
  })
  .catch(err=>{
      console.log(err)
  })
})

module.exports=router