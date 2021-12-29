import React from 'react'
import {Card, ListGroupItem, ListGroup, } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Cards = ({el}) => {



    return (
        <div>
                  

            <Card style={{ width: '18rem' , height:'55rem'  ,marginLeft:"40px", marginBottom:"40px" }}>
           
                <Card.Img variant="top" src={el.posterUrl}   style={{height:"400px"}} />
               
                <Card.Body>
                    <Card.Title   > {el.title}  </Card.Title>
                    
                    <Card.Text   style={{fontFamily:"inherit", justifyContent:'center' }} >
                       {el.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.trailer}  </ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.rate}  </ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> {el.id} </ListGroupItem>
                </ListGroup>   
                <Link to={`/details/${el.id}`}><button> Details </button> </Link> 
            </Card>
           
</div>
     
    )
}

export default Cards
