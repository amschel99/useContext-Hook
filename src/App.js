import React, {useState,  createContext} from 'react';
import Child from "./Child"
 export const timeContext=createContext();
const App=()=>{
  const[time, setTime]=useState(new Date())
 
  return <timeContext.Provider value={{time, setTime}}>

  <Child/>
 
  </timeContext.Provider>
  
  
}
export default App;

