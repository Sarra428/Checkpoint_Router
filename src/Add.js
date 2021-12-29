import React, { useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const Add = ({setMovies,movies}) => {

    
   const [description, setDescription]=useState("")
    const [title,setTitle]=useState("")
    const [image, setImage]=useState("")
    const [show, setShow]= useState(false)
    const [rate, setRate]= useState ("")
  

    

    const handleClose=()=> setShow(false);
   

    const handleShow=()=> setShow(true);


  
const Adding = () => {     
    setMovies([...movies,       
        { id: Math.random(),         
            title,         
            posterUrl:image,         
            rate,         
            description,                   
                
        }])

    }

    return (
        <div>
         <Button variant="primary" onClick={handleShow}> Add movie </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Form style={{width:"50%", marginLeft:"100px" }}>
        <Form.Group >
            <Form.Label>title :</Form.Label>
                <Form.Control type="text" placeholder="add the name of movie" value={title} onChange={(e)=>setTitle(e.target.value)} />

            </Form.Group>
            <Form.Group>
            <Form.Label>Description :</Form.Label>
                <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}  />

            </Form.Group>
            <Form.Group>
            <Form.Label>Picture :</Form.Label>
                <Form.Control type="text" placeholder=" "  value={image} onChange={(e)=>setImage(e.target.value)}    />

            </Form.Group>
            
            <Form.Group>
            <Form.Label>Rating :</Form.Label>
                <Form.Control type="text" placeholder=" " value={rate} onChange={(e)=>setRate(e.target.value)} />

            </Form.Group>
            </Form>

        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={()=> { Adding()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
 }

export default Add
