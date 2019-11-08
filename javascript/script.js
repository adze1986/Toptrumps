const button1 = document.getElementById("marvel");
const button2 = document.getElementById("simpsons");
const button3 = document.getElementById("dc");
const button4 = document.getElementById("family");
const button5 = document.getElementById("harry");
const button6 = document.getElementById("min");

button1.addEventListener("click", ()=>{
    window.location.replace("../htmls/marvel.html")
})
button2.addEventListener("click", ()=>{
    window.location.replace("../htmls/simpsons.html")
})
button3.addEventListener("click", ()=>{
    window.location.replace("../htmls/dc.html")
})
button4.addEventListener("click", ()=>{
    window.location.replace("../htmls/family.html")
})
button5.addEventListener("click", ()=>{
    window.location.replace("../htmls/harry.html")
})
button6.addEventListener("click", ()=>{
    window.location.replace("../htmls/min.html")
})