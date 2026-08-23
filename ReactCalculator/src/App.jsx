import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [currentOperation, setCurrentOperation] = useState("");
  const [finalResult, setFinalResult] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const displayText = String(isTyping ? currentOperation : finalResult);

  const handleClick = (value) => 
  {
      let lastOperation = currentOperation[currentOperation.length-1];
      if(((currentOperation.length < 22) && value != "clear" && value != "." && value != "=") && (!isNaN(lastOperation) || !isNaN(value) || (currentOperation == "" && value == "-")))
      {
        setIsTyping(true);
        setCurrentOperation(currentOperation + value);
      }
      else if((currentOperation.length < 22) && (currentOperation != "") && (value == "+" || value == "-" || value == "*" || value == "/"))
      {
        setIsTyping(true);
        setCurrentOperation(currentOperation.slice(0, -1) + value);
      }
      else if(value == "clear")
      {
        setIsTyping(true);
        setCurrentOperation("");
      }
      else if((currentOperation.length < 22) && value == ".")
      {
        let operations = ["+", "-", "/", "*"];

        // Get the last index of each operation
        let indices = operations.map(str => currentOperation.lastIndexOf(str));

        // Get the latest index of all the indices
        let lastIndex = Math.max(...indices);

        let lastSegment = currentOperation.slice(lastIndex + 1);

        if(!lastSegment.includes("."))
        {
          setIsTyping(true);
          setCurrentOperation(currentOperation + value);
        }        
      }
      else if(value == "=")
      {
        setIsTyping(false);
        if(!isNaN(lastOperation) || lastOperation == ".")
        {
          try
          {
            let raw = new Function(`return ${currentOperation}`)();
            setFinalResult(Number(raw.toFixed(4)));
          }
          catch
          {
            setFinalResult("Invalid Calculation");
          }
          
        }
        else
        {
          setFinalResult("Invalid Calculation");    
        }
          setCurrentOperation("");
      }
  }

  
  return (
    <>
      <div id="outerBox">
        <p id="result" style={{ fontSize: displayText.length > 7 ? "32px" : "64px" }}>{displayText}</p>
        <div className="keyPad">
          <Button buttonName="1" buttonDisplay="1" onPress={handleClick}/>
          <Button buttonName="2" buttonDisplay="2" onPress={handleClick}/>
          <Button buttonName="3" buttonDisplay="3" onPress={handleClick}/>
          <Button buttonName="+" buttonDisplay="+" onPress={handleClick}/>
          <Button buttonName="4" buttonDisplay="4" onPress={handleClick}/>
          <Button buttonName="5" buttonDisplay="5" onPress={handleClick}/>
          <Button buttonName="6" buttonDisplay="6" onPress={handleClick}/>
          <Button buttonName="-" buttonDisplay="−" onPress={handleClick}/>
          <Button buttonName="7" buttonDisplay="7" onPress={handleClick}/>
          <Button buttonName="8" buttonDisplay="8" onPress={handleClick}/>
          <Button buttonName="9" buttonDisplay="9" onPress={handleClick}/>
          <Button buttonName="*" buttonDisplay="×" onPress={handleClick}/>
          <Button buttonName="0" buttonDisplay="0" onPress={handleClick}/>
          <Button buttonName="." buttonDisplay="." onPress={handleClick}/>
          <Button buttonName="clear" buttonDisplay="CE" onPress={handleClick}/>
          <Button buttonName="/" buttonDisplay="÷" onPress={handleClick}/>
          <Button buttonName="=" buttonDisplay="=" onPress={handleClick} extraClass="equals"/>
        </div>
      </div>
    </>
  )
}

export default App
