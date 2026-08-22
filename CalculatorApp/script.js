var finalResult = 0;
var currentOperation = "2";
console.log("script loaded");

function addOperator(operator)
{
    
    let lastChar = currentOperation[currentOperation.length - 1];

    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/")
    {
        currentOperation += operator;
    }
    else
    {
        currentOperation = currentOperation.slice(0, -1) + operator;
    }
    console.log("Current Operation: " + currentOperation);
}

function compute()
{
    finalResult = eval(currentOperation);
}

document.getElementById("add").addEventListener("click", () => addOperator("+"));
document.getElementById("subtract").addEventListener("click", () => addOperator("-"));
document.getElementById("multiply").addEventListener("click", () => addOperator("*"));
document.getElementById("divide").addEventListener("click", () => addOperator("/"));
document.getElementById("compute").addEventListener("click", () => compute());