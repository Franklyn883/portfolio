

const aboutMeBtn = document.querySelectorAll(".aboutme-btn");
const skillsBtn = document.querySelectorAll(".skills-btn");
const projectBtn = document.querySelectorAll(".project-btn");
const contactsBtn = document.querySelectorAll(".contacts-btn");

const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills-tools");
const projects = document.getElementById("projects");
const contacts = document.getElementById("contacts");

//mobile navigation
const mobileMenu = document.querySelector('.mobile-menu')
const showMenu = document.getElementsByClassName('show-menu')[0]
const closeMenu = document.getElementsByClassName('close-menu')[0]

aboutMeBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        aboutMe.scrollIntoView({behavior:"smooth"})
        mobileMenu.style.display ="none"
        console.log("js here")
    })
})

skillsBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        skills.scrollIntoView({behavior:"smooth"})
        mobileMenu.style.display ="none"
        console.log("js here")
    })
})

projectBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        projects.scrollIntoView({behavior:"smooth"})
        mobileMenu.style.display ="none"
        console.log("js here")
    })
});

contactsBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        contacts.scrollIntoView({behavior:"smooth"})
        mobileMenu.style.display ="none"
        console.log("js here")
    })
});


showMenu.addEventListener('click', (e)=>{
    
    mobileMenu.style.display ="flex"
})

closeMenu.addEventListener('click',(e)=>{
    mobileMenu.style.display ="none"
})