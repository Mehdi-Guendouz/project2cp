const selector = document.querySelectorAll(".hidden_ele")
const a_hover = document.querySelectorAll(".a_hover")
const navContainer = document.querySelector(".nav_menu_container")
const toggleBtn = document.getElementById("toggle")
const landingCnt = document.querySelector(".container")
const closeBtn = document.querySelector(".close")


toggleBtn.addEventListener("click",()=>{
  navContainer.classList.toggle("hide_navbar")
})

closeBtn.addEventListener("click",()=>{
  navContainer.classList.toggle("hide_navbar")
})

landingCnt.addEventListener("click",()=>{
  navContainer.classList.remove("hide_navbar")
})

selector.forEach(function(element){
    element.addEventListener("click",(e)=>{
       const li_hide =  e.currentTarget.parentElement
       const rotate = e.currentTarget.querySelector(".fa-angle-down")
       li_hide.classList.toggle("hide_sub")
       rotate.classList.toggle("fa-rotate-180")
    })
})

a_hover.forEach((element)=>{
  element.addEventListener("mouseover",(e)=>{
      const nav_hover = e.currentTarget.querySelector(".nav_hover")
      nav_hover.style.height = "90%";
  })
  element.addEventListener("mouseout",(e)=>{
      const nav_hover = e.currentTarget.querySelector(".nav_hover")
      const current = e.currentTarget
      if( !current.classList.contains("current_place")){
        nav_hover.style.height = "0%";
      }
  })
  /*element.addEventListener("click",(e)=>{
    const current = e.currentTarget
    const currentClass = current.classList
    if(!currentClass.contains("hidden_ele")){
      currentClass.add("current_place")
    }
  })*/
})