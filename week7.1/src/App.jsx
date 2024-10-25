import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import { DashBoard } from "./components/DashBoard"
import { Landing } from "./components/Landing"
import { PropDrilling } from "./components/PropDrilling"
import { useState } from "react"
import { Countcontext } from "./components/Countcontext"


function App() {
   const [count,setCount]=useState(0);
   return(
     
    <div>
     
       <div>
           {/* <PropDrilling count={count} setCount={setCount}/> */}
           <Countcontext/>
       </div>
      <BrowserRouter>
      <Appbar/>
       <Routes>
          <Route 
            path="/DashBoard"
            element={<DashBoard/>}
          />
          <Route
            path="/"
            element={<Landing/>}
          />
       </Routes>
     </BrowserRouter>
     </div>
   )
}

const Appbar=()=>{
  const navigat=useNavigate();
  return <div>
    <div>
         <button onClick={()=>{
             navigat("/");
         }}>Landing
         </button>
         <button onClick={()=>{
            navigat("/DashBoard");
         }}>Dashboard</button>
       </div>
  </div>
    
       
       
}

export default App
