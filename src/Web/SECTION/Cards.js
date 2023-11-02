import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
//  const img = {props.data.img};
  return (
    <Card style={{ width: '24rem', 
    backgroundImage: `url( ${props.data.img})`,
    height:'250px', backgroundSize: 'cover', borderRadius: '50px' }}>
      
      <Card.Body>
        <Card.Title style={{color:'white',textAlign:'center',marginTop:'30%'}}>{props.data.text}</Card.Title>
      </Card.Body>
    </Card>
  )
}
