import React from 'react'

import { Fade } from 'react-reveal'
import './header.css'
const Search = () => {
  
  return (
    <Fade bottom>

    <div className='constrain' >
            <div className="bg-gradient">
<input className="input-transparent" type="text" placeholder="Search"/>
  </div>
    </div>
    </Fade>
  )
}

export default Search