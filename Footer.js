import "./Footerstyle.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">

        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white" , margin:"20px"}}/>
               
                    <p>Old Town , Rathi Nager </p>
                    <p> Badnera </p>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color:"white" , margin:"20px"}}/>
                         +917066396598
                </div>
                <div className="mail">
                        <FaMailBulk size={20} style={{color:"white" , margin:"20px"}}/>
                        kunalnakashe8@gmail.com
                </div>

                
            </div>
            <div className="right">
                <h3>About Me</h3>
                <p> Hi , My name is kunal,
                <p>I am a fresher but a passionate web developer</p> 
                I have completed my graduation in computer science ,
                    i am interested in web development , i have done some project you can please take look of that.
                    <br/>
        
                        <p>THANK YOU   ..... </p>

                </p>

                <div className="social">
                    <FaInstagram size={40} style={{color:"white" , margin:"20px"}}/>
                    <FaLinkedin size={40} style={{color:"white" , margin:"20px"}}/>
                    <FaFacebook size={40} style={{color:"white" , margin:"20px"}}/>
                    <FaWhatsapp size={40} style={{color:"white" , margin:"20px"}}/>

                </div>        
            </div>

        </div>

    </div>
  )
}

export default Footer