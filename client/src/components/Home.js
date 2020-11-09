import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label } from 'reactstrap';
import '../App.css';
import { Card,  CardTitle, CardText, Row, Col,Spinner } from 'reactstrap';
import Carde from './Carde';



const  Home=()=> {
    const [notes,setnotes]=useState([])
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    useEffect(()=>{
      fetch('/mynotes',)
      .then(res=>res.json()).then(result=>{
        console.log(result.notes)
        setnotes(result.notes)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    ,[])
  
    const [modal, setModal] = useState(false);
    const [load, setload] = useState(true);
    const toggle = () => setModal(!modal)
  
  
    const PostData=()=>{
      setload(false)
      toggle()
       fetch("/postnotes",{
         method:"post",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
           title,
           body
         })
       }).then(res=>res.json())
       .then(data=>{
          if(data.error){
            // M.toast({html:data.error,classes:"#c62828 red darken-3"})
          }
          else{
            // M.toast({html:data.message,classes:"#43a047 green darken-1"})
            console.log(data)
            setload(true)
           
            setnotes(data.notes)
            
           
          }
       }).catch(err=>{console.log(err)})
    
    }


    const deleteNote = (noteId)=>{
        console.log(noteId)
        fetch('/deletenote/'+noteId,{method:"delete"})
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
         
       { load?notes.map(note=>{
         return  <Carde key={note._id} title={note.title} body={note.body}  id={note._id} del={deleteNote}/>})
         :
         <Spinner color="primary" />
     }
       </Row>

<a className="btn-floating btn-large waves-effect waves-light red modal-trigger" id="udtabtn" onClick={toggle}   style={{position:"fixed"}}><i className="material-icons">add</i></a>
<div>
 <Modal isOpen={modal} toggle={toggle} backdrop={true} fade={true} centered style={{}}>
   <ModalHeader toggle={toggle}>My Note</ModalHeader>
   <ModalBody style={{background:"rgb(84 110 122)"}}>
     
         <Label>Title</Label>
           <input
           type="text"
           placeholder="title"
           value={title}
           onChange={(e)=>settitle(e.target.value)}
           /> 
           <Label>Body</Label>{' '}
            <input
           type="text"
           placeholder="body"
           value={body}
           onChange={(e)=>setbody(e.target.value)}
           />

   </ModalBody>
   <ModalFooter style={{background:"rgb(84 110 122)"}}>
   <Button  onClick={()=>PostData()}>Stick it</Button> {''}
     <Button color="secondary" onClick={toggle}>Cancel</Button>
   </ModalFooter>
 </Modal>
</div>
</div>

);
}

export default Home;
