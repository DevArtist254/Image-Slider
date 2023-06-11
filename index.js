//const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const sildes = document.querySelectorAll(".slide")
let tracker = 0

function left() {
 tracker++
 let prev = tracker - 1
 if (tracker > sildes.length - 1) tracker = 0

 sildes[prev].classList.remove("myStyle")
 sildes[tracker].classList.add("myStyle")
}

function right() {
 tracker--
 let prev = tracker + 1
 if (tracker < 0) tracker = sildes.length - 1
 sildes[prev].classList.remove("myStyle")
 sildes[tracker].classList.add("myStyle")
}

leftBtn.addEventListener("click", left)
rightBtn.addEventListener("click", right)
