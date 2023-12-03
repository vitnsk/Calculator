

function backspace() {
    let display = document.querySelector("#display");
     display.value=display.value.slice(0,-1);
}
 function cleardisp(){
    let display = document.querySelector("#display");
    display.value="";
 }

function sum( int1,int2){
    return int1+int2;
}

function val(num){
    let display = document.querySelector("#display");
    display.value=display.value+num;
}
