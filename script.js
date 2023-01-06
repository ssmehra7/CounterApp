

let counter=0;
let flag =1;
const increamentbtn =document.querySelector("#increment");
const decreamentbtn =document.querySelector("#decrement");
const resetbtn =document.querySelector("#reset");
const count_display=document.querySelector("#counter_display");
const startinfi=document.querySelector('#start');
const stopinfi=document.querySelector('#stop');
const previous=document.querySelector('#previous');
const savebtn=document.querySelector('#save');
const resetprev=document.querySelector('#resetprev');

function increase(){
    console.log("increase");
    counter=counter+1;
    // let str=`${counter}`;
    count_display.innerHTML=counter;
}


function decrease(){
    console.log("decrease");
    counter=counter-1;
    count_display.innerHTML=counter;

}


function reset(){
    console.log("reset");
    counter=0;
    count_display.innerHTML=counter;
}

function save(){
    console.log(counter);
    previous.innerHTML+=" "+counter+" - ";

}

function resetpreviouscontent() {
    console.log("it worked")
    previous.innerHTML="Previous Entries:";
}
// function startinfinity(){

//     while(flag){
//         console.log("clicked");
//         counter=counter+1;
//         count_display.innerHTML=counter;

//     }

// }

// function stopinfinity(){
//     flag=0;

// }





increamentbtn.addEventListener('click',increase);
decreamentbtn.addEventListener('click',decrease);
resetbtn.addEventListener('click',reset);
savebtn.addEventListener('click',save);
resetprev.addEventListener('click',resetpreviouscontent);
// startinfi.addEventListener('click',startinfinity);
// stopinfi.addEventListener('click',stopinfinity);
