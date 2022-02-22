let container = document.querySelector (".container");
let imgs = document.querySelectorAll(".imgslider>img")
let imgArray = Array.from(imgs);
let slider = document.querySelector(".imgslider")
let lFlipper = document.querySelector(".left-flipper")
let rFlipper = document.querySelector(".right-flipper")
let selectedIndicators = Array.from(document.querySelectorAll(".select"));
let currentImg = 1;
let incrementer = 1;

function displayCurrent(){
        slider.setAttribute("style",`left:${(-300)*currentImg}px;` )
        selectedIndicators.forEach((element) => {
            if (element.getAttribute("data-index") == `${currentImg}`){
                element.style.opacity = 0.5;
                console.log(`IMG ${currentImg}`)
            } else {
                element.style.opacity = 0.25;
            }
            
            });
        

}
displayCurrent()

function changeImg(){
    console.log(currentImg)
    if ((currentImg < (imgArray.length-1))&&(currentImg > 0)){
    currentImg  = currentImg + incrementer ;
    } else {
        incrementer = -incrementer;
        currentImg  = currentImg + incrementer ;
    } 
    displayCurrent()
}

setInterval(changeImg,5000)

function previousImg(){
    if (currentImg> 0){
    currentImg += -1;
    displayCurrent()
    }

}
function nextImg(){
    if (currentImg < (imgArray.length-1)){
        currentImg +=1;
        displayCurrent()
        }
}


lFlipper.addEventListener("click",previousImg)
rFlipper.addEventListener("click",nextImg)