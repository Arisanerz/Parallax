const wrapper = document.querySelector('.parallax')
const images = document.querySelectorAll('.parallax img')
const title = document.querySelector('h1')
const cursor = document.querySelector('.cursor')
const cursorInner = document.querySelector('.cursor-inner')

wrapper.addEventListener('mousemove', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const x = (windowWidth / 2 - mouseX) / 45
    const y = (windowHeight / 2 - mouseY) / 45

    images[0].style.transform = `translateX(${x / 10}px) translateY(${y / 10}px)`
    images[1].style.transform = `translateX(${x}px) translateY(${y}px)`
    images[2].style.transform = `translateX(${-x}px) translateY(${-y}px)`
    images[3].style.transform = `translateX(${x / 5}px) `
    images[4].style.transform = `translateX(${-x / 5}px) `
    
    title.style.transform = `translateX(${x * 1}px) translateY(${y * 1}px)`
    
    cursor.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`
    cursorInner.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`


})