/* Hover and Out Hover effect of nav */

let navElement1 = document.querySelector(".linkA");
let navElement2 = document.querySelector(".linkB");
let blocElement1 = document.querySelector(".nav_container_barA");
let blocElement2 = document.querySelector(".nav_container_barB");


/* 
navElement1.addEventListener("mouseover", hover1);
navElement2.addEventListener("mouseover", hover2);
navElement1.addEventListener("mouseout", out1);
navElement2.addEventListener("mouseout", out2);
function hover1() {
    blocElement1.style.borderTop = "2px solid #0065FC ";
    navElement1.style.color = "#0065FC";
};
function out1() {
    blocElement1.style.borderTop = "";
    navElement1.style.color = "grey";
};

function hover2() {
    blocElement2.style.borderTop = "2px solid #0065FC "
    navElement2.style.color = "#0065FC";
};
function out2() {
    blocElement2.style.borderTop = "";
    navElement2.style.color = "grey";
};
   */




/*research button hover */
let researchButton = document.querySelector('#research_button');
researchButton.addEventListener('mouseover', ()=>{researchButton.style.backgroundColor= "#074095"});
researchButton.addEventListener('mouseout', ()=>{researchButton.style.backgroundColor= "#0065FC"});


/* Filters animation */

let filtersButton = document.querySelectorAll('#filters_ul li i'); 
let filtersContainer = document.querySelectorAll('.filters_buttons');


for (let i = 0; i < filtersContainer.length; i++ ) {

    filtersContainer[i].addEventListener('mouseover', () =>{
        filtersButton[i].style.color = "white";
        filtersButton[i].style.backgroundColor = "#0065FC";
        filtersButton[i].style.transform = "rotate(360deg)";
        filtersContainer[i].style.color="#0065FC";
        filtersContainer[i].style.cursor="pointer";
        
    })

    filtersContainer[i].addEventListener('mouseout', () =>{
        filtersButton[i].style.color = "#0065fc";
        filtersButton[i].style.backgroundColor = "#DEEBFF";
        filtersButton[i].style.transform = "rotate(0)"
        filtersContainer[i].style.color="";

    }) 

}

