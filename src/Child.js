import React, {useContext,useEffect} from 'react'
import { timeContext } from './App'

const Child = () => {
    const{time, setTime}=useContext(timeContext)
   useEffect(()=>{

       const timer= setTimeout(()=>{setTime(new Date())}, 1000);
       return ()=>{clearTimeout(timer)}
   },[time,setTime])
  return (
    <div>Time in Nairobi: {time.toLocaleTimeString()}</div>
  )
}

export default Child