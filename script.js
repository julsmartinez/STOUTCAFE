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

// $(document).ready(function(){   
//     $('.carousel').slick({
//         slidesToShow: 3  ,
//         dots:true,
//         centerMode: true,
//     });
// });
  

  // Scroll Function
var scrollButtonCount = document.querySelectorAll(".nav-link").length;
var temporaryElement;
var scrollButtonElement;

for(var i = 0; i < scrollButtonCount; i++){
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function(event){
        event.preventDefault();
        temporaryElement = this.getAttribute("class");
        scrollButtonElement = temporaryElement.slice(9, temporaryElement.length);
        scrollFunction(scrollButtonElement);
        //return false;
    });
}
function scrollFunction(element){
    const divElement = document.querySelector("html");
    switch(element){
        case "coffee":
            divElement.scrollTop = 100;
            break;
        case "non-coffeee":
            divElement.scrollTop = 1075
            break;
        case "tea":
            divElement.scrollTop = 2025
            break;
        case "pastries":
            divElement.scrollTop = 2555
            break;
        case "apetizers":
            divElement.scrollTop = 3075
            break;
        case "sandwiches":
            divElement.scrollTop = 3600
            break;
        case "pasta":
            divElement.scrollTop = 4545
            break;
        case "ricebowl":
            divElement.scrollTop = 5160
            break;
    }
}

// Add to cart function
var homeProductsButtonsCount = document.querySelectorAll(".product-link").length;
var quantity = 1;
var imageSource;
var nameOfProduct;
var tempPriceOfProduct;
var priceOfProduct;
var descriptionOfProduct;
for (var j = 0; j < homeProductsButtonsCount; j++){
    document.querySelectorAll(".product-link")[j].addEventListener("click", function(event){
        event.preventDefault();
        // Store source attribute value to array of images
        imageSource = this.querySelector("img").getAttribute("src");

        // Store name of product to array of names
        nameOfProduct = this.querySelector("h5").innerHTML;

        // Store price of product to array of price
        tempPriceOfProduct = this.querySelector("h4").innerHTML;
        priceOfProduct = tempPriceOfProduct.slice(1, tempPriceOfProduct.length);

        descriptionOfProduct = this.querySelector("p.card-text").innerHTML;

        addDetailsToPopupCard(imageSource, nameOfProduct, priceOfProduct, descriptionOfProduct);
    });
}

// override button click on drinks
$(".coffee-container").on("click", function(){
    $(".extras").css("visibility", "visible");
    $(".checkbox-group").css("visibility", "visible");
    $(".variation").css("visibility", "visible");
    $(".radio-group").css("visibility", "visible");
    $('.scrollable').css("overflow-y", "scroll");
});

$(".non-coffee-container").on("click", function(){
    $(".variation").css("visibility", "visible");
    $(".radio-group").css("visibility", "visible");
    $('.scrollable').css("overflow-y", "scroll");
});

$(".tea-container").on("click", function(){
    $(".variation").css("visibility", "visible");
    $(".radio-group").css("visibility", "visible");
    $('.scrollable').css("overflow-y", "scroll");
});

// Add details to popup card 
function addDetailsToPopupCard(image, productName, price, description){
    let imageElement = $(".popup-img-container > img");
    imageElement.attr("src", image);
    
    let nameElement = $(".popup-title");
    nameElement.text(productName);

    let priceElement = $(".popup-number");
    priceElement.text("₱" + price);

    let descriptionElement = $(".popup-description");
    descriptionElement.text(description);
    $(".extras").css("visibility", "hidden");
    $(".checkbox-group").css("visibility", "hidden");
    $(".variation").css("visibility", "hidden");
    $(".radio-group").css("visibility", "hidden");
    $('.popup-container').css('visibility', 'visible');
    $('.scrollable').animate({scrollTop: 0},10);
    $('.scrollable').css("overflow-y", "hidden");
    $('body').css("overflow", "hidden");
}

// Close button to popup card
$("i.fa-xmark").on("click", function(){
    // close/hide the popup container
    $('.popup-container').css('visibility', 'hidden');
    $('body').css("overflow", "visible");
    $(".variation").css("visibility", "hidden");
    $(".radio-group").css("visibility", "hidden");
    $(".extras").css("visibility", "hidden");
    $(".checkbox-group").css("visibility", "hidden");
    $('.scrollable').css("overflow", "hidden");
});

// Adding Price, Quantity, Variation value, Extras
$(".plus").on("click", function(){
    quantity++;
    $(".quantity-number").text(quantity);
});
$(".minus").on("click", function(){
    quantity--;
    $(".quantity-number").text(quantity);
});

// Taking values of radio button and checkbox checked
$(".radio-option").on("click",function(){
    var selectedVariation = $("input:checked").attr("value");
});

$(".checkbox-option").on("click", function(){
    var checkedEspresso = $(".checkbox-option").attr("value");
});

// Add To cart button function
$(".addtocart").on("click", function(){
    var totalPriceOfProduct = priceOfProduct * quantity;
    // next create element for add to cart page
})
// Login function
// Signup function
// Slick version 1.5.8s


  