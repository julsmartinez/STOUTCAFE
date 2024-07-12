const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'  ;
}

document.addEventListener("DOMContentLoaded", function() {
    var backtotop = document.getElementById("backtotop");

    // When the button is clicked, scroll to the top of the page
    backtotop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    });
});

$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3  ,
    dots:true,
    centerMode: true,
    });
  });
  
  // Slick version 1.5.8s


  