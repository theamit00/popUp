const popUpContainer = document.querySelector('.popUp__container');
const popUp = document.querySelector('.popUp');

document.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{
    
        popUpContainer.style.scale = "1";
        popUp.style.opacity = "1";
        
    },2000);

})


popUp.addEventListener('click',(e)=>{

    let close = e.target.closest('.close');
    if(close){
        popUpContainer.style.scale = "0";
        popUp.style.opacity = "0";
    }

})