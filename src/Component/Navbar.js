import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
        <NavLink to="">HOME</NavLink>&ensp;
        <NavLink to="about">ABOUT</NavLink>&ensp;
        <NavLink to="contact">CONTACT</NavLink>&ensp;
        <NavLink to="help" >HELP</NavLink>&ensp;
        <NavLink to='mobile'>MOBILE</NavLink>&ensp;
        <NavLink to='user' >Users</NavLink>&ensp;
    </div>
  )
}

export default Navbar