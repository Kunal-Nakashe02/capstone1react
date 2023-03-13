import "./Contactforstyle.css"

import React from 'react'

const ContactMe = () => {
  return (
    <div>
      
<form className="main">

<label>Name:</label><br/>
<input type="text" />
<br/>
<label>Email:</label><br/>
<input type="email" />
<br/>
<label>number:</label><br/>
<input type="number"  />
<br/>
<button type='submit' >Submit</button>
</form>

    </div>
  )
}

export default ContactMe;