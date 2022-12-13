function multiplyBy()
{
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 / num2;
}

function SummationBy() 
{ 
        num1 = Number(document.getElementById("firstNumber").value);
       num2 = Number(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 + num2;
}
function SubtractionBy() 
{ 
        num1 =Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 - num2;
}