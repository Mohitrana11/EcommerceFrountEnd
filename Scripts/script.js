// Circle :


// let circle = document.querySelector('.circle');
// window.addEventListener('mousemove',(e)=>{
//     let xValue= e.pageX;
//     let yValue= e.pageY;
//     setTimeout(() => {
//         circle.style.top=`${yValue}px`;
//         circle.style.left=`${xValue}px`;
        
//     }, 50);
// });


// navbar side box:

let ham= document.querySelector(".f-cm5");
let crouse = document.querySelector(".crouse");
document.querySelector('.top-down-slide').style.display='none';
ham.addEventListener('click',(e)=>{
    document.querySelector('.f-cm5').classList.toggle('.top-down-slide');
    if(document.querySelector('.f-cm5').classList.contains('.top-down-slide')){
        ham.style.display='inline';
        document.querySelector('.top-down-slide').style.display='none';
    }else{
        ham.style.display='none'; 
        document.querySelector('.top-down-slide').style.display='inline';
    }
})
crouse.addEventListener('click',(e)=>{
    document.querySelector('.f-cm5').classList.toggle('.top-down-slide');
    if(document.querySelector('.f-cm5').classList.contains('.top-down-slide')){
        ham.style.display='inline';
        document.querySelector('.top-down-slide').style.display='none';
    }else{
        ham.style.display='none'; 
        document.querySelector('.top-down-slide').style.display='inline';
    }
});

// Search button: 


// Images:

// let mainImg = document.getElementById("mainImg");
// console.log(mainImg)
// let smallImg = document.querySelectorAll(".small-img");
// console.log(smallImg)
// smallImg[0].addEventListener('click',(e)=>{
//     mainImg.src=smallImg[0].src;
// })
// smallImg[1].addEventListener('click',(e)=>{
//     mainImg.src=smallImg[1].src;
// })
// smallImg[2].addEventListener('click',(e)=>{
//     mainImg.src=smallImg[2].src;
// })
// smallImg[3].addEventListener('click',(e)=>{
//     mainImg.src=smallImg[3].src;
// })

//[Slide 4: ]------------------------------------------------------------------------------------------------

let slideSection = [...document.querySelectorAll(".pro-slide")];
let preBtn = [...document.querySelectorAll(".prev")];
let nxtBtn= [...document.querySelectorAll(".next")];
slideSection.forEach((items,i)=>{
    let slideDimensions = items.getBoundingClientRect();
    let containerWidth = slideDimensions.width;
    nxtBtn[i].addEventListener('click',()=>{
        items.scrollLeft +=containerWidth-200;

    });
    preBtn[i].addEventListener('click',()=>{
        items.scrollLeft -=containerWidth+200; 
    });
});


