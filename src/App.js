import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Paper from "./components/Paper";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";
import rock from './images/icon-rock.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
export const myContext=createContext()


function App() {
 
  
 


  
    
  const array=[<div className="rock2" >
        
  <img src={rock} alt="" />
  
  </div>,<div className="paper2">
  <img src={paper} alt="" />
  
 </div>, <div className="scissors2" >
  <img src={scissors} alt="" />
  </div>]
  
  const myTime=Math.floor(Math.random()*3)
  return (
    <myContext.Provider value={{array,myTime}}>
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='rock' element={<Rock/>}/>
      <Route path='paper' element={<Paper/>}/>
      <Route path='scissors' element={<Scissors/>}/>
      
     
     </Routes>
    
    </div>
    </myContext.Provider>
    
  );
}

export default App;
