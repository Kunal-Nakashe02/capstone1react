import "./Navbarstyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"



const Navbar = () => {

        const [Click, setClick]=useState(false)
        const handleClick=()=> setClick(!Click);

  return (
    <div className="header">
        <div className="links">    
           <Link className="kunal" to="/">KUNAL </Link>
        </div>    
   
            <div className="hamburger" onClick={handleClick}>
                {Click ?
                (<FaBars size={20} style={{color:"white"}} />):
                (<FaTimes size={20}  style={{color:"white"}}/>)
            }                   
            </div>

    <div className={Click?("kns"):("kns:active")}>
        
         <div className="links">    <Link  className="link1" to='/'>HOME</Link></div> 
       
         <div className="links">    <Link className="link1"  to='/project'>PROJECTS</Link> </div>
       
         <div className="links">    <Link className="link1"  to='/about'>ABOUT</Link></div>
        
         <div className="links">    <Link className="link1"  to='/contact'>CONTACT</Link></div> 
     
         </div>
    </div>
  )
}

export default Navbar;