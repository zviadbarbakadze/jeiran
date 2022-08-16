import React, { useRef} from 'react'
import triangle from '../images/bg-triangle.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'
import sticker from '../images/image-rules.svg'
import close from '../images/icon-close.svg'
import { Link } from 'react-router-dom'


export default function Main() {
   
   
   
    const ruleRef=useRef()
     
    const showRules=()=>{
        ruleRef.current.classList.toggle('visible')
       
    }
    
  
  return (
    <div className='main-cont' >
        
       
        <div className="triangle">
            <img src={triangle} alt="" className='troika'/>
            <Link className='link' to='/rock'><div className="rock"  >
            <img src={rock} alt="" />
            
            </div></Link>
            

           <Link className='link' to='/scissors'>
           <div className="scissors" >
            <img src={scissors} alt="" />
            </div>
           </Link>

           <Link className='link' to='/paper'>
           <div className="paper">
            <img src={paper} alt="" />
           </div>
           </Link>

        </div>
        <div className="rules"  onClick={showRules}>
            <h3>RULES</h3>
        </div>
        <div className="rules-sticker"ref={ruleRef} >
            <div className="close-text">
                <h4>RULES</h4>
                <img src={close} alt="" className='close'onClick={showRules} />
            </div>
            <img src={sticker} alt="" className='sticker'/>
        </div>
    </div>
  )
}
