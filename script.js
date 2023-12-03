
 let znach="";
 let int1=0;
 let int2=0;
 let result=0;
 let operator="";
 let cl='cl';
 display.value='0';

function backspace() {
    let display = document.querySelector("#display");
    display.value=display.value.slice(0,-1);
}
 function cleardisp(){
    let display = document.querySelector("#display");
    display.value="";
 }

 function resertcalc(){
    cleardisp();
    imt1=0;
    int2=0;
    znach=0;
    display.value='0';
    cl='cl';
 }

function valmem(operatorKey){
    int1=Number(znach);    
    operator=operatorKey;
    screen.value=znach;
    cl='cl';
}

function resultat(){
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

    znach=result;   
}

function val(num){
    if(cl=='cl')
    {
        cleardisp();
        cl='';
    }
  let display = document.querySelector("#display");
  display.value=display.value+num;
  znach=display.value;
}

function negativenum(){
    cleardisp(); 
    let minus= znach.slice(0,1);
    if(minus!='-')
    {
    display.value = '-'+znach;    
    }
    else{
        display.value=znach.slice(1);
    }
    znach=display.value;
}