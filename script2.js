document.querySelector(".title").addEventListener("mouseover",()=>{
  document.querySelector("#rain").style.background="linear-gradient(#d5adc8, #ff8489) fixed";  
})
document.querySelector(".title").addEventListener("mouseout",()=>{
  document.querySelector("#rain").style.background="linear-gradient(red,black) fixed";
})
