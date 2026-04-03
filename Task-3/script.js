const result = document.getElementById("result");

function appendValue(value){
result.value += value;
}

function clearDisplay(){
result.value = "";
}

function deleteLast(){
result.value = result.value.slice(0,-1);
}

function calculate(){

try{
result.value = eval(result.value);
}

catch{
result.value = "Error";
}

}

document.addEventListener("keydown", function(event){

const key = event.key;

if(!isNaN(key) || "+-*/.%".includes(key)){
appendValue(key);
}

else if(key === "Enter"){
calculate();
}

else if(key === "Backspace"){
deleteLast();
}

else if(key === "Escape"){
clearDisplay();
}

});