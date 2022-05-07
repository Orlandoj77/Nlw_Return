import { Widget } from "./components/Widget";

{/*import { useState } from 'react'

interface ButtonProps{
 text:String
}

function Button(props:ButtonProps){
  return(
    <button className='bg-violet-500 p-2'>{props.text ?? "Default"}</button>
   )
}

function App() {
  return (
    <>
    <Button text="Hello world"/>
    <Button text="Hello world2"/>
    <Button />
    </>
    
  )
}

export default App*/}
export function App(){
  return <Widget />
}