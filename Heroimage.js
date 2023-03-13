import "./Heroimage1.css"
import React from 'react'
import kn from "../knimg/kn.jpeg"
import background from "../knimg/background.jpeg"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <>
    <div className="all-img">
      <div className="bgimg">
          <img className="background" src={background} />
      </div>
        <div className="content">
            <p>HI ,I'M KUNAL NAKASHE</p>
            <h1> WEB DEVELOPER .</h1>
        <div>
        <Link className="btn1"  to='/project'>PROJECTS</Link> 
        <Link className="btn2"  to='/contact'>CONTACT</Link>
        </div>

        </div>
    </div>
   
    </>
  )
}

export default Heroimage;