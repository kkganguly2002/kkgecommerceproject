// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        console.log("hi");
        nav.classList.add('active');
        console.log("hello");
    })
}
if(close){
    close.addEventListener('click',()=>{
        console.log("hi");
        nav.classList.remove('active');
        console.log("hello");
    })
}