const panels = document.querySelectorAll(".panel");


panels.forEach(panel =>{
    panel.addEventListener("click", ()=>{
        removeActiveClass()
        panel.classList.add("active");
        console.log(panels);
     })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}