const container = document.querySelector('.container');
const parentHeight = document.querySelector('.container').offSetHeight


function fetchDivs(divs = 10){
    // console.log(container.children.length);
   let i=0;
    while(i < divs){
   const div = document.createElement('div');
    div.innerHTML = "Masai school"
    container.appendChild(div)
    i++;
    }   
    }

fetchDivs();


console.log("aks",container.clientHeight);
// listen for scroll event and load more divs if we reach the bottom of window
container.addEventListener('scroll',()=>{
    console.log("scrolled", container.scrollTop) //scrolled from top
    console.log("scrolled he", container.scrollHeight) //scrolled from top
    console.log(parentHeight) //visible part of screen
    if(container.scrollTop + container.offsetHeight >= container.scrollHeight){
        fetchDivs();
    }
})