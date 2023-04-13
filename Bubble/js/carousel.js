let prev = document.getElementById("prev")
let next = document.getElementById("next")
 
prev.addEventListener("click", () =>{
    section.scrollLeft -= 330
})
next.addEventListener("click", () =>{
    section.scrollLeft += 330
})