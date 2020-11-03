const card = document.querySelector(".card")
const container = document.querySelector(".container")
const circle = document.querySelector(".circle")
const img = document.querySelector(".picture img")
const heading = document.querySelector("h1")
const sub = document.querySelector("h3")
const link = document.querySelector(".contact")

container.addEventListener("mouseenter", e => {
    img.style.transform = "translateZ(100px)"
    heading.style.transform = "translateZ(80px)"
    sub.style.transform = "translateZ(80px)"
    link.style.transform = "translateZ(80px)"
    card.style.transition = '0.5s ease';
    circle.style.minHeight = '0px';
    circle.style.minWidth = '0px'
    link.style.color = "black"
})


container.addEventListener("mousemove", e => {
    console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    card.style.transition = 'none';
})

container.addEventListener("mouseleave", e => {
    card.style.transition = '0.5s ease';
    img.style.transform = "translateZ(0px)"
    heading.style.transform = "translateZ(0px)"
    sub.style.transform = "translateZ(0px)"
    link.style.transform = "translateZ(0px)"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    circle.style.minHeight = '30vh';
    circle.style.minWidth = '30vh';
    link.style.color = "darkgrey";

})