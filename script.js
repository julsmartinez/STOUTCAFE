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
var drinks = 0;
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

        priceOfProduct = parseInt(tempPriceOfProduct.slice(1, tempPriceOfProduct.length));

        descriptionOfProduct = this.querySelector("p.card-text").innerHTML;

        addDetailsToPopupCard(imageSource, nameOfProduct, priceOfProduct, descriptionOfProduct);
    });
}

// override button click on drinks
var selectedVariation;
$(".coffee-container").on("click", function(){
    $(".sandwichSmores").css("display", "none");
    $(".nachos").css("display", "none");
    $(".riceBowls").css("display", "none");
    $(".allPasta").css("display", "none");

    
    $(".espressoDrinks").css("display", "block");
    $(".espressoDrinks").css("visibility", "visible");
    $(".variation").css("display", "block");
    $(".extras").css("display", "block");
    $(".size").css("visibility", "visible");
    $(".radio-group").css("display", "flex");
    $(".checkbox-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "scroll");
    $(".drinks").eq(0).prop('checked', true);
    selectedVariation = $(".drinks").eq(0).prop('checked', true).val();
});

$(".non-coffee-container").on("click", function(){
    $(".sandwichSmores").css("display", "none");
    $(".nachos").css("display", "none");

    $(".variation").css("display", "block");
    $(".size").css("visibility", "visible");
    $(".radio-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "hidden");
    $(".drinks").eq(0).prop('checked', true);
    selectedVariation = $(".drinks").eq(0).prop('checked', true).val();
});

$(".tea-container").on("click", function(){
    $(".sandwichSmores").css("display", "none");
    $(".nachos").css("display", "none");

    $(".variation").css("display", "block");
    $(".size").css("visibility", "visible");
    $(".radio-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "hidden");
    $(".drinks").eq(0).prop('checked', true);
    selectedVariation = $(".drinks").eq(0).prop('checked', true).val();
});

$(".pastry").on("click", function(){
    $(".size").css("display", "none");
    $(".sandwichSmores").css("display", "none");
    $(".nachos").css("display", "none");
    $('.scrollable').css("overflow-y", "hidden");
});

$(".appetizer").on("click", function(){
    $(".size").css("display", "none");
    $(".sandwichSmores").css("display", "none");

    $(".variation").css("display", "block");
    $(".nachos").css("display", "block");
    $(".nachos").css("visibility", "visible");
    $(".radio-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "hidden");

    $(".snacks").eq(0).prop('checked', true);
    selectedVariation = $(".snacks").eq(0).prop('checked', true).val();
});

$(".sandwich").on("click", function(){
    $(".size").css("display", "none");
    $(".nachos").css("display", "none");

    $(".variation").css("display", "block");
    $(".sandwichSmores").css("visibility", "visible");
    $(".sandwichSmores").css("display", "block");
    $(".radio-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "hidden");
});

$(".pasta").on("click", function(){
    $(".espressoDrinks").css("display", "none");
    $(".riceBowls").css("display", "none");

    $(".extras").css("display", "block");
    $(".allPasta").css("visibility", "visible");
    $(".checkbox-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "scroll");
});

$(".rice").on("click", function(){
    $(".espressoDrinks").css("display", "none");
    $(".allPasta").css("display", "none");

    $(".extras").css("display", "block");
    $(".riceBowls").css("visibility", "visible");
    $(".checkbox-group").css("display", "flex");
    $('.scrollable').css("overflow-y", "scroll");
});


// Add details to popup card 
function addDetailsToPopupCard(image, productName, price, description){
    drinks = 0;
    let imageElement = $(".popup-img-container > img");
    imageElement.attr("src", image);
    
    let nameElement = $(".popup-title");
    nameElement.text(productName);

    let priceElement = $(".popup-number");
    priceElement.text("₱" + price);

    let descriptionElement = $(".popup-description");
    descriptionElement.text(description);
    // radio and checkbox button container to set default display to none
    $(".radio-group").css("display", "none");
    $(".checkbox-group").css("display", "none");

    // radio and checkbox button to set default display to block
    $(".expressoDrinks").css("display", "block");
    $(".allPasta").css("display", "block");
    $(".riceBowls").css("display", "block");
    $(".size").css("display", "block");
    $(".nachos").css("display", "block");
    $("sandwichSmores").css("display", "block");
    
    // header of radio and checboxes button to set default to none
    $(".variation").css("display", "none");
    $(".extras").css("display", "none");
    // set check box and radio button to uncheck
    $(".radio-option").prop('checked', false);
    $(".checkbox-option").prop('checked', false);

    // container of all elements on popup options set visibility to visible, and subelements to hidden
    $(".popup-container").css("visibility", "visible");
    $(".espressoDrinks").css("visibility", "hidden");
    $(".allPasta").css("visibility", "hidden");
    $(".riceBowls").css("visibility", "hidden");
    $(".nachos").css("visibility", "hidden");
    $(".sandwichSmores").css("visibility", "hidden");
    $(".size").css("visibility", "hidden");
    $(".scrollable").animate({scrollTop: 0},10);
    $("body").css("overflow", "hidden");
    quantity = 1;
    $(".quantity-number").text(quantity);
}

// Close button to popup card
$("i.fa-xmark").on("click", function(){
    // close/hide the popup container
    $(".radio-group").css("display", "none");
    $(".checkbox-group").css("display", "none");

    $(".variation").css("display", "none");
    $(".extras").css("display", "none");

    $('.popup-container').css('visibility', 'hidden');
    
    $(".espressoDrinks").css("visibility", "hidden");
    $(".allPasta").css("visibility", "hidden");
    $(".riceBowls").css("visibility", "hidden");
    $(".nachos").css("visibility", "hidden");
    $(".sandwichSmores").css("visibility", "hidden");
    $(".size").css("visibility", "hidden");
    $('.scrollable').css("overflow", "hidden");
    $('body').css("overflow", "visible");
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
var check = true;

var selectedExtras = [];
// Function to remove item from array
function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1); // Remove the item
    }
}

// Function to update the selected option
function updateSelectedOption(newOption) {
    if (selectedVariation !== null) {
        // Remove the previous selected option from the array
        selectedVariation = null;
    }

    // Add the new selected option to the array
    selectedVariation = newOption;
}
// Radio button and checkbox button change checked value listener
$(".radio-option").on("change",function(){
    const newOption = $(this).val();
    updateSelectedOption(newOption);
});

$(".checkbox-option").on("change", function(){
    const item = $(this).val();

    if ($(this).prop('checked')) {
        selectedExtras.push(item); // Add item if checked
    } else {
        removeItem(selectedExtras, item); // Remove item if unchecked
    }
});

// Add To cart button function
$(".addtocart").on("click", function(){
    if(check === true && quantity !== 0){
        var totalPriceOfProduct = priceOfProduct * quantity;
            // next create element for add to cart page
            if(selectedVariation === undefined || selectedExtras === undefined){
                selectedVariation = "";
                selectedExtras = ""
            }
            alert(imageSource + "\nName:" + nameOfProduct + "\nPrice: " + totalPriceOfProduct + "\nDescription: " + descriptionOfProduct + "\nSelected Variation: " + selectedVariation + "\nSelected Extras: " + selectedExtras);
    }
    else{
        alert("Please select a size of drinks first!");
    }
})

// Login function
var usernames = ["user@gmail.com"];
var passwords = ["lucky123"];
var newUsername;
var newPassword;
$(".login").on("click", function(){
    let usernameInput = $("#username").text;
    let passwordInput = $("#password").text;

    for(var i = 0; i < usernames.length; i++){
        if(usernameInput === usernames[i] && passwordInput === passwords[i]){
            
        }
    }
});
// Signup function
// Slick version 1.5.8s


const dialog = document.getElementById("myDialog"); 

function showDialog() { 
  dialog.show(); 
} 

function closeDialog() { 
  dialog.close(); 
} 