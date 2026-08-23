import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  return (
    <>
      <div id="outerBox"></div>
      <p id="result">0</p>
      <div className="keyPad">
        <Button buttonName="1" buttonDisplay="1"></Button>
        <Button buttonName="2" buttonDisplay="2"></Button>
        <Button buttonName="3" buttonDisplay="3"></Button>
        <Button buttonName="+" buttonDisplay="+"></Button>
        <Button buttonName="4" buttonDisplay="4"></Button>
        <Button buttonName="5" buttonDisplay="5"></Button>
        <Button buttonName="6" buttonDisplay="6"></Button>
        <Button buttonName="-" buttonDisplay="−"></Button>
        <Button buttonName="7" buttonDisplay="7"></Button>
        <Button buttonName="8" buttonDisplay="8"></Button>
        <Button buttonName="9" buttonDisplay="9"></Button>
        <Button buttonName="*" buttonDisplay="×"></Button>
        <Button buttonName="0" buttonDisplay="0"></Button>
        <Button buttonName="." buttonDisplay="."></Button>
        <Button buttonName="clear" buttonDisplay="CE"></Button>
        <Button buttonName="/" buttonDisplay="÷"></Button>
        <Button buttonName="=" buttonDisplay="="></Button>  
      </div>
    </>
  
  
  )
}

export default App
