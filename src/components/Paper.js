import React from 'react'
import { useNavigate } from 'react-router-dom'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
export default function Paper() {
  const navigate=useNavigate()
  const array=[<div className="rock2" >
    
        
  <img src={rock} alt="" />
  
  </div>,<div className="paper2">
  <img src={paper} alt="" />
  
 </div>, <div className="scissors2" >
  <img src={scissors} alt="" />
  </div>]
  
  const myTime=Math.floor(Math.random()*3)
  return (
    <div className='battle'>
   
   <div className="picker">
        <h3>YOU PICKED</h3>
        <h3>THE HOUSE PICKED</h3>
        </div>
    <div className="fight">
    <div className="paper2">
    <img src={paper} alt="" />
    
   </div>
        {array[myTime]===array[0]?<span className='winspan'>You Win</span>:null}
        {array[myTime]===array[1]?<span>Draw</span>:null}
        {array[myTime]===array[2]?<span className='losespan'>You Lose</span>:null}
       
       {array[myTime]}
      
      
     
    </div>
    <button onClick={()=>navigate('/')}>Play Again</button>
   </div>
  )
}
