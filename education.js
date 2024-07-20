// Education page   

const educationBtn = document.querySelectorAll('.education-btn')
const education = document.getElementById('education')
//Education


educationBtn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        education.scrollIntoView({behavior:"smooth"})
        mobileMenu.style.display ="none"
    })
})

