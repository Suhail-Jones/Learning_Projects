var finalResult = 0;
var currentOperation = "";
console.log("script loaded");

function addOperator(operator)
{
    
    let lastChar = currentOperation[currentOperation.length - 1];

    if(!isNaN(lastChar) || !isNaN(operator))
    {
        currentOperation += operator;
    }
    else if(currentOperation != "")
    {
        currentOperation = currentOperation.slice(0, -1) + operator;
    }
    if(currentOperation != "")
    {
        updateDisplay(currentOperation);
    }
}

function updateDisplay(text)
{
    let el = document.getElementById("result");
    el.textContent = text;
    el.style.fontSize = text.length > 9 ? "40px" : "100px";
}

function compute()
{
    if(currentOperation != "")
    {
        try
        {
            finalResult = eval(currentOperation);
            updateDisplay(String(finalResult));
            finalResult = 0;
            currentOperation = "";
        }
        catch(SyntaxError)
        {
            console.log("Invalid Operation.");
        }
    }
    else
    {
        document.getElementById("result").textContent = 0;
    }
    
    
}

document.getElementById("add").addEventListener("click", () => addOperator("+"));
document.getElementById("subtract").addEventListener("click", () => addOperator("-"));
document.getElementById("multiply").addEventListener("click", () => addOperator("*"));
document.getElementById("divide").addEventListener("click", () => addOperator("/"));
document.getElementById("compute").addEventListener("click", () => compute());

var numList = document.getElementsByClassName("numbers");
for(let i = 0; i < numList.length; i++)
{
    numList[i].addEventListener("click", () => addOperator(numList[i].textContent));
}
