
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue=document.querySelector("#counterValue");
let reset=document.querySelector("#reset");

let counter=0;
//function for increment counter value
increment.addEventListener('click',()=>{
    counter++;
    counterValue.innerText=counter;
});
//function for decrement counter value
decrement.addEventListener('click',()=>{
    counter--;
    counterValue.innerText = counter;
});
reset.addEventListener("click",()=>{
    counter = 0;
    counterValue.innerText=counter;
});