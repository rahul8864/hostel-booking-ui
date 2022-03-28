import React from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap'
import logo from './logo.png'
import boys from './boys.png'
import girls from './girls.png'
import firebase from 'firebase/compat/app'
import third from './third'

import 'firebase/compat/auth';

export default function second() {
    return (
//         <Container className='d-flex align-items-center justify-content-center bg-dark' style={{minHeight:'90vh'}}>
//         <Row className="justify-content-md-center">
//     <Col>
//     <Card className='w-100' style={{maxWidth:'300px'}}>
//             <Card.Body className=''>
//             <h3>Girls Hostel</h3>
//             </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//     <Card className='w-100' style={{maxWidth:'300px'}}>
//             <Card.Body className=''>
//             <h3>Boys Hostel</h3>
//             </Card.Body>
//         </Card>
//     </Col>
//   </Row>
//         </Container>
<Container className='d-flex align-items-center' style={{minHeight:'80vh'}}>
<Container className='d-flex flex-column'>
<h2 className='bg-red text-center mb-5 fw-bold'>Choose your Hostel</h2>
<Container className="d-flex justify-content-evenly align-items-center ">
<div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'250px',height:'200px',background:'pink',borderRadius:'25px'}}>
<div className='d-flex' style={{width:'100px',height:'100px',background:'white',borderRadius:'50%'}}>

<img
          alt=""
          src={girls}
          className="img-boys m-auto"
        />
</div>
    <h3 className='text-center'>Girls Hostel</h3>
</div>
<div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'250px',height:'200px',background:'skyblue',borderRadius:'25px'}}>
<div className='d-flex' style={{width:'100px',height:'100px',background:'white',borderRadius:'50%'}}>

<img
          alt=""
          src={boys}
          className="img-boys m-auto"
        />
</div>
    <h3 className='text-center'>Boys Hostel</h3>
</div>
</Container>
</Container>
</Container>
  )
}
