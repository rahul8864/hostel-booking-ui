import React from 'react'
import { Navbar, Container,Card, Button, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import '../App.css'

import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';
export default function NavBar() {
    const style = {
        borderBottom:'solid 1px #e6e8f1',
    }
  return (
    <>
  <Navbar style={style}>
    <Container >
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <span className='ms-3'><strong>Newton</strong> School</span>
      </Navbar.Brand>
      {/* <div className='flex row'>
      <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className=''
          style={{borderRadius:'50%'}}
        />
      <NavDropdown id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        </div> */}
        <div className='btn arrow'>
      <button className='dropdown btn arrow' style={{background:'transparent',border:'transparent',position:'relative'}}>
      <img
          alt=""
          src=''
          width="30"
          height="30"
          className=''
          style={{borderRadius:'50%'}}
        />
      </button>
      {/* <div className='arrow position-absolute flex flex-row' style={{width:'150px',height:'100px',background:'red'}}>
      <a className='bg-danger text-decoration-none flex flex-row'>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className=''
          style={{borderRadius:'50%'}}
        />
        <div className='user-details flex flex-column'>
        <p>Rahul</p>
        <p>Gmail</p>
        </div>
        </a>
    </div>*/}
      </div>
    </Container>
  </Navbar>
</>
  )
}
