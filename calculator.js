
//GRABBING ELEMENTS FROM THE HTML DOCUMENT
let calcScreenEl = document.querySelector(".calcScreen");
let buttonsEl = document.querySelectorAll(".btn")
let clearbtnEl = document.getElementById("clearbtn");
let equalbtnEl = document.getElementById("equalbtn");

console.log
//view all the html buttons being held in this element
console.log(buttonsEl)

//convert the elements in buttonsEl into an array
arrayButtonsEl = Array.from(buttonsEl)
console.log(arrayButtonsEl)


//use a for each loop to iterate each element of the array and call the function on each element
arrayButtonsEl.forEach(function(element) {
    element.addEventListener("click", function(e){
      //console.log(element.innerText)
      switch(element.innerText){
        case 'c':
            calcScreenEl.value='';
            break;
        case '=':
            try{
                let myResult = eval(calcScreenEl.value);
                calcScreenEl.value = myResult;
            }
            catch{
                calcScreenEl.value='Error!';
                
            }
            
            break;
        case 'Ans':
            let myAns = myResult;
            calcScreenEl.value = myAns;
            break;
        case '←':
        calcScreenEl.value = calcScreenEl.value.slice(0,1);
            break;
        default:
            calcScreenEl.value += element.innerText;
            break;
      }
      
    })
});


//ACTIVATE THE BUTTONS

calcScreenEl.addEventListener("click", function(e) {
    switch(e.target.innerText){
        default:
            display.innerText
    }
});

/*
 clearbtnEl.addEventListener("click", function(e){
 if(e= "click"){
    console.log("Ive been clicked");
 } 
    else if (e.shiftKey){
        console.log("shiftkey pressed on click")
    }
    else if(e="dblclick"){
        console.log("Ive been dbl clicked")
    }
}); 
*/

 

















































/*
MY personal trrial
let additionbtnEL = document.getElementById("additionbtn");
let subtractionbtnEl = document.getElementById("subtractionbtn");
let divisionbtnEl = document.getElementById("divisionbtn");
let multiplicationbtnEl = document.getElementById("multiplicationbtn");
let ninebtnEl = document.getElementById("ninebtn");
let eightbtnEl = document.getElementById("eightbtn");
let sevenbtnEl = document.getElementById("sevenbtn");
let sixbtnEl = document.getElementById("sixbtn");
let fivebtnEl = document.getElementById("fivebtn");
let fourbtnEl = document.getElementById("fourbtn");
let threebtnEl = document.getElementById("threebtn");
let twobtnEl = document.getElementById("twobtn");
let onebtnEl = document.getElementById("onebtn");
let zerobtnEl = document.getElementById("zerobtn");


//FUCNTIONS TO DISPLAY THE BUTTON TEXT ON THE CALC SCREEN
additionbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' + '
};

subtractionbtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' - '
};

divisionbtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' / '
};

multiplicationbtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' * '
};

ninebtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 9 '
};

eightbtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 8 '
};

sevenbtnEl.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 7 '
};

sixbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 6 '
};

fivebtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 5 '
};

fourbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 4 '
};

threebtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 3 '
};

twobtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 2 '
};

onebtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 1 '
};

zerobtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' 0 '
};

periodbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' . '
};

equalbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ' = '
};

clearbtnEL.onclick = function (){
    screenDisplayAnswerEl.innerHTML = ''
};
*/














