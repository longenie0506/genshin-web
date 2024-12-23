var sidebarbutton = document.getElementById("sidebar-open")
var sidebarimg = document.getElementById("sidebar-openimg")
var sidebar = document.getElementById("sidebar")

var isOpen = true;

sidebarbutton.addEventListener("click",()=>{
    if(isOpen){
        sidebar.style.transform = "translate(100%,-50%)"
        sidebarimg.style.transform = "rotate(180deg)"
    }else{
        sidebar.style.transform = "translate(0%,-50%)"
        sidebarimg.style.transform = "rotate(0deg)"
    }
    isOpen = !isOpen
})

var modal = document.getElementById("modal")
var playvideo = document.getElementById("s1-play")
var video = document.getElementById("modal-video")
var isPlaying = false

modal.addEventListener("click",()=>{
    modal.style.visibility = "hidden"
    isPlaying = !isPlaying
    video.src = ""
})

playvideo.addEventListener("click",()=>{
    modal.style.visibility = "visible"
    isPlaying = !isPlaying
    video.src = "https://www.youtube.com/embed/TAlKhARUcoY"

})

var regions = document.getElementsByClassName("region")
var chars = document.getElementsByClassName("region-char")

for(var i = 0 ; i < regions.length ; i++){
    
    regions[i].addEventListener("mouseover",()=>{
        regions[i].style.backgroundSize = "140%"
        regions[i].style.border = "white solid 5px"
        chars[i].style.visibility = "visible"
    },i)

    
    
    regions[i].addEventListener("mouseout",()=>{
        regions[i].style.backgroundSize = "120%"
        regions[i].style.border = "none"
        chars[i].style.visibility = "hidden"
    })
}


