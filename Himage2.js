import "./Himage2styles.css"
import React from 'react'
import { Link } from "react-router-dom";
import form from "../knimg/form.jpeg"
import restaurent from "../knimg/restaurent.jpeg"
import todo from "../knimg/todo.jpeg"


const Himage2 = () => {
  return (

<>
    
    <div className="img1">
    <div className="head1">
            <h1>PROJECTS</h1>
            <p>These are some recent Projects</p>
    
        </div>
        
        <div className="card1">
            <img src={form} alt="kunal;" />
             <h1>PROJECT1</h1>
            <p> FORM VALIDATION</p>
            <p> DEVELOPMENT SKILLS
            LIKE HTML CSS AND JS 
            AND ALSO HAVE KNOWLEDGE OF JS AND CSS LIBRARIES LIKE REACT JS BOOTSTRAP
            CREATIVE AND RESPONSIVE DESIGNS.
            </p>
            <Link to="https://github.com/Kunal-Nakashe02/-UN-code-.git">VIEW</Link>
        </div>

        <div className="card1">
            <img src={restaurent} alt="kunal;" />
             <h1>PROJECT 2</h1>
            <p>SASS RESTAURENT SITE</p>
            <p> DEVELOPMENT SKILLS
            LIKE HTML CSS AND JS 
            AND ALSO HAVE KNOWLEDGE OF JS AND CSS LIBRARIES LIKE REACT JS BOOTSTRAP
            CREATIVE AND RESPONSIVE DESIGNS.
            </p>
            <Link to="https://github.com/Kunal-Nakashe02/scssProject.git">VIEW</Link>
        </div>
       



        <div className="card1">
            <img src={todo} alt="kunal;" />
             <h1>PROJECT 3</h1>
            <p>TO DO LIST</p>
            <p> DEVELOPMENT SKILLS
            LIKE HTML CSS AND JS 
            AND ALSO HAVE KNOWLEDGE OF JS AND CSS LIBRARIES LIKE REACT JS BOOTSTRAP
            CREATIVE AND RESPONSIVE DESIGNS.
            </p>
            <Link to="https://github.com/Kunal-Nakashe02/-UN-code-.git">VIEW</Link>
        </div>
        

    </div>
    </>
  )
}

export default Himage2;