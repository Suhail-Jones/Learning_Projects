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
    else
    {
        currentOperation = currentOperation.slice(0, -1) + operator;
    }
    document.getElementById("result").textContent = currentOperation;
}

function compute()
{
    finalResult = eval(currentOperation);
    document.getElementById("result").textContent = finalResult;
    finalResult = 0;
    currentOperation = "";
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
