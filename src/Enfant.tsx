import React, { useState } from 'react'

type EnfantProps = {
    title:string;
    content:string;
    date:string;
}



export default function Enfant(props: EnfantProps) {
    const {date,title,content} = props
    const [state, setState] = useState<string>("Je suis le state")
    const [counter,setCounter] =useState<number>(0)
   
const handleOneMore= () =>(
    setCounter(counter+1)
)

   
const handleLessOne= () => {
    counter > 0&&setCounter(counter-1) 
  
    }

    const counterColor = ["red", "silver", "blue","green", "orange", "purple","maroon","lime","navy","aqua"]
   
   
    const randomColor= (array:string[]) => {
        if(counter === 0) {
            return "black"}
    else{let rand = Math.floor(Math.random()*array.length)
    let rValue = array[rand]
        return rValue }  
    }
 
    
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <div style={{width:"500px"}}>
            <h1 style={{borderBottom:"1px solid silver"}}>{title}</h1>
             <p>{date}</p> 
            <h5>{state}</h5>
            <p>{content}</p> 
            <button onClick = {handleLessOne} style={{cursor:'pointer', padding:'1rem 2rem'}}>-</button> 
            <button onClick = {handleOneMore} style={{margin:'0 1rem', cursor:'pointer', padding:'1rem 2rem'}}>+</button> 
            <button onClick = {()=>setCounter(0)} style={{cursor:'pointer', padding:'1rem 2rem'}}>Reset counter</button> 
            <p >counter: <span style={{fontSize:"2rem", fontStyle:"bold", color:`${randomColor(counterColor)}`}}>{counter}</span></p>
        </div>
    </div>
  )
}
