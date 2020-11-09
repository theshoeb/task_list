import React,{useState,useEffect} from 'react';
import '../App.css';
import { Card,  CardTitle, CardText, Row, Col,Spinner } from 'reactstrap';
import Carde from './Carde';



const  Bin=()=> {
    const [notes,setnotes]=useState([])
    useEffect(()=>{
      fetch('/bin',)
      .then(res=>res.json()).then(result=>{
        console.log(result.trash)
        setnotes(result.trash)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    ,[])

const deleteBin = (noteId)=>{
        console.log(noteId)
        fetch('/deletebin/'+noteId,{method:"delete"})
        .then(res=>res.json())
        .then(result=>{console.log(result)
        const newData = notes.filter(item=>{
            return item._id !== result._id
        })
        setnotes(newData)
        })
      }
  
  
  
return( 
<div className="Home">
       <Row  style={{marginTop:"77px", marginLeft:"10px"}}>
         
       {
           notes.map(note=>{ return  <Carde key={note._id} title={note.title} body={note.body} id={note._id} del={deleteBin}/>})
       }
       </Row>
</div>

);
}

export default Bin;
