let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
const resultOutput=document.getElementById("result-output");
const addBtn=document.getElementById("add-btn");
const subtractBtn=document.getElementById("subtract-btn");
const multiplyBtn=document.getElementById("multiply-btn");
const clearBtn=document.getElementById("clear-btn");
const resultBtn=document.getElementById("result-btn");


function add(){
    let num1Value=parseInt(num1.value);
    let num2Value=parseInt(num2.value);
    if(num1Value && num2Value){
        let addition = num1Value+num2Value;
        resultOutput.innerText=addition;
    }else{
        resultOutput.innerText="error";
    }
}

function subtract(){
    let num1Value=parseInt(num1.value);
    let num2Value=parseInt(num2.value);
    if(num1Value && num2Value){
        let subtraction = num1Value - num2Value;
        resultOutput.innerText=subtraction;
    }else{
        resultOutput.innerText="error";
    }
}

function multiply(){
    let num1Value=parseInt(num1.value);
    let num2Value=parseInt(num2.value);
    if(num1Value && num2Value){
        let multiplication = num1Value * num2Value;
        resultOutput.innerText=multiplication;
    }else{
        resultOutput.innerText="error";
    }
}

function divide(){
    let num1Value=parseInt(num1.value);
    let num2Value=parseInt(num2.value);
    if(num1Value && num2Value){
        let division = num1Value / num2Value;
        resultOutput.innerText=division;
    }else{
        resultOutput.innerText="error";
    }
}

function clearFields(){
    num1.value = "";
    num2.value = "";
    resultOutput.innerText = "";
}