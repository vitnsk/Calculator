
 let znach;
 let int1;
 let int2;
 let result;
 let operator;

function backspace() {
    let display = document.querySelector("#display");
     display.value=display.value.slice(0,-1);
}
 function cleardisp(){
    let display = document.querySelector("#display");
    display.value="";
 }

function valmem(operatorKey){
    int1=Number(znach);
    cleardisp();
    operator=operatorKey;

}

function res(){
    int2=Number(znach);  
    cleardisp();
    switch(operator){
    case '+':
    result=int1+int2;
    break;
    case '-':
    result=int1-int2;
    break;
    case '*':
    result=int1*int2;
    break;
    case '/':
    result=int1/int2;
    break;
    }
    display.value= result;
   
}
function val(num){
    let display = document.querySelector("#display");
    display.value=display.value+num;
    znach=Number(display.value);
}
