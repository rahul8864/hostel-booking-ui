import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

export default function firth() {
    const lanes1 = [
        { id: 1, title: 'G1'},
        { id: 2, title: 'G2'},
        { id: 3, title: 'G3'},
        { id: 4, title: 'G4'},
      ];
      const lanes2 = [
        { id: 9, title: 'G9'},
        { id: 8, title: 'G8'},
        { id: 7, title: 'G7'},
        { id: 6, title: 'G6'},
      ]
      const lanes3 = [
          {id: 10, title: 'G10'},
          {title: ''},
          {title: ''},
          {id: 5, title: 'G5'},
      ]
      const styled = {
          width:'150px',
          paddingLeft:'15px',
          background:'#f3f3f3',
          borderRadius:'50px',
          border:'none',
          paddingTop:'5px',
          paddingBottom:'5px',
          fontSize:'20px'
      }
      const btn = {
          height:'45px',
          width:'200px',
          border:'none',
          borderRadius:'50px',
          background:'navy',
          fontSize:'20px',
          fontWeight:'bold',
          color:'white',
      }
  return (
    <>
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{minHeight:'80vh'}}>
        <h2 className='mt-3 fw-bolder'>Choose a Floor</h2>
        <select className='custom-select theme-pink' name='floors' id='floors' style={styled}>
            <option value='1'>1st Floor</option>
            <option value='1'>2nd Floor</option>
            <option value='1'>3rd Floor</option>
            <option value='1'>4th Floor</option>
            <option value='1'>5th Floor</option>
        </select>
        <div className='d-flex flex-column justify-content-center align-items-center mt-2' style={{width:'500px',height:'400px',borderRadius:'20px',border:'2px solid gray'}}>
        <div className='d-flex flex-row' style={{marginTop:'10px',marginBottom:'10px'}}>
        {lanes1.map((postDetails,index) => {
        return <div key={postDetails.id}><div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'100px',height:'100px',background:'yellowgreen',borderRadius:'20px',marginLeft:'10px',marginRight:'10px'}}>
            <h1 className='d-flex flex-column bold text-white'>{postDetails.title}</h1>
        </div></div>})}
        </div>
        <div className='d-flex flex-row' style={{marginTop:'10px',marginBottom:'10px'}}>
        {lanes3.map((postDetails,index) => {
        return <div key={postDetails.id}><div className='d-flex flex-column justify-content-space align-items-center' style={{width:'100px',height:'100px',background:'yellowgreen',borderRadius:'20px',marginLeft:'10px',marginRight:'10px'}}>
            <h1 className='d-flex flex-column bold text-white'>{postDetails.title}</h1>
        </div></div>})}
        </div>
        <div className='d-flex flex-row' style={{marginTop:'10px',marginBottom:'10px'}}>
        {lanes2.map((postDetails,index) => {
        return <div key={postDetails.id}><div className='d-flex flex-column justify-content-evenly align-items-center' style={{width:'100px',height:'100px',background:'yellowgreen',borderRadius:'20px',marginLeft:'10px',marginRight:'10px'}}>
            <h1 className='d-flex flex-column bold text-white'>{postDetails.title}</h1>
        </div></div>})}
        </div>
        </div>
        <button className='mt-2' style={btn}>Book Room</button>
        </Container>
    </>
  )
}
