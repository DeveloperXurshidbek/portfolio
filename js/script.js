window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    let toTop = document.querySelector(".to-top")
    toTop.classList.toggle("active", window.scrollY > 0)
    header.classList.toggle("sticky", window.scrollY > 0)
})

