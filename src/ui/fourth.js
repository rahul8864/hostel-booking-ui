import React from 'react'
import { Container } from 'react-bootstrap'

export default function fourth() {
    const lanes1 = [
        { id: 1, title: 'G1'},
        { id: 2, title: 'G2'},
        { id: 3, title: 'G3'},
      ];
      const lanes2 = [
        { id: 4, title: 'G4'},
        { id: 5, title: 'G5'},
        { id: 6, title: 'G6'},
      ]
  return (
    <>
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{minHeight:'80vh'}}>
        <h2 className='mt-3 fw-bold'>Choose a Hostel</h2>
        <div className='d-flex flex-row mt-3'>
        {lanes1.map((postDetails,index) => {
        return <div key={postDetails.id}><div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'100px',height:'100px',background:'gray',borderRadius:'20px',marginLeft:'15px'}}>
            <h1 className='d-flex flex-column bold text-white fw-bold'>{postDetails.title}</h1>
        </div></div>})}
        </div>
        <div className='d-flex flex-row mt-3'>
        {lanes2.map((postDetails,index) => {
        return <div key={postDetails.id}><div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'100px',height:'100px',background:'gray',borderRadius:'20px',marginLeft:'15px'}}>
            <h1 className='d-flex flex-column bold text-white fw-bold'>{postDetails.title}</h1>
        </div></div>})}
        </div>
        </Container>
    </>
  )
}
