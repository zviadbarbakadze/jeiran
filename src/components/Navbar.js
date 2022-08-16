import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  

  return (
    <div className="table">
    
        <Link className='link' to='/rock'>ROCK</Link>
       <Link className='link' to='/paper'>PAPER</Link>
       <Link className='link' to='/scissors'>SCISSORS</Link>
        
    
    
</div>
  )
}
