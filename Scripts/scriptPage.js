// Images:

let mainImg = document.getElementById("mainImg");
console.log(mainImg)
let smallImg = document.querySelectorAll(".small-img");
console.log(smallImg)
smallImg[0].addEventListener('click',(e)=>{
    mainImg.src=smallImg[0].src;
})
smallImg[1].addEventListener('click',(e)=>{
    mainImg.src=smallImg[1].src;
})
smallImg[2].addEventListener('click',(e)=>{
    mainImg.src=smallImg[2].src;
})
smallImg[3].addEventListener('click',(e)=>{
    mainImg.src=smallImg[3].src;
})