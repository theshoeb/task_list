import React, { useState } from 'react';
import {Button, Card, CardBody, CardTitle,CardFooter, CardText, Row, Col } from 'reactstrap';


const Carde=({title,body,id,del})=>{



return(

     <Col sm="4" >
        <Card body inverse color="danger" className="zoom">
            <CardBody >
                <CardTitle>
                  {title}
                </CardTitle>
                <CardText>
                  {body}
                </CardText>
            </CardBody>
            <CardFooter><Button color="secondary" onClick={()=>{del(id)}}>Delete</Button></CardFooter>
        </Card>
     </Col>
)
}
export default Carde