import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ResourceCard =({img,title,info,Url,onClick})=>{
  
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />{/*429 x 240*/}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {info}
        </Card.Text>
        <Button variant="primary" onClick={()=>{onClick(Url)}}>Open PDF</Button>
      </Card.Body>
    </Card>
    </>
    
}
export default ResourceCard; 
