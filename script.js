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
    hidePreviewProductElements();
});

function hidePreviewProductElements(){
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
}
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
        selectedExtras.push(" " + item); // Add item if checked
    } else {
        removeItem(selectedExtras, item); // Remove item if unchecked
    }
});
// Cart icon click
$(".cart-link").on("click", function(){
    $(".cartpage").css("display", "flex");
    $("body").css("overflow", "hidden");
});
// Back button inside cart page
$(".back").on("click", function(){
    $(".cartpage").css("display", "none");
    $('body').css("overflow", "visible");
});
// Add To cart button function
var totalPriceOfProduct = 0;
var quantityInCart = 0;
$(".addtocart").on("click", function(){
    if(check === true && quantity !== 0){
            totalPriceOfProduct = priceOfProduct * quantity;
            // next create element for add to cart page
            if(selectedVariation === undefined || selectedExtras === undefined){
                selectedVariation = "";
                selectedExtras = ""
            }

            quantityInCart += quantity;
            $(".quantity").text(quantityInCart.toString());
            addItemToCart(quantity);
            alert("Successfully added to the cart!");

            // Hide all elements in preview product
            hidePreviewProductElements();
            
    }
    else{
        alert("Please select a variation first!");
    }
});

//adding item from popup preview product
function addItemToCart(quantityValue){
    if(selectedVariation !== "8oz" && selectedVariation !== "solo" && selectedVariation !== ""){
        totalPriceOfProduct += 30;
    }
    if(selectedExtras !== ""){
        totalPriceOfProduct += 45;
    }
    // cart-items-container
    const newDiv1 = document.createElement("div");
    newDiv1.classList.add("cart-items-container");
    $(".items").last().append(newDiv1);

    // cart-items-container
    const newDiv2 = document.createElement("div");
    newDiv2.classList.add("cart-img-container" );
    $(".cart-items-container").last().append(newDiv2);
    // Image
    const newImage1 = document.createElement("img");
    newImage1.classList.add("cart-img");
    newImage1.setAttribute("src", imageSource);
    $(".cart-img-container").last().append(newImage1);

    // text-container
    const newDiv3 = document.createElement("div");
    newDiv3.classList.add("text-container");
    $(".cart-items-container").last().append(newDiv3);
    // i tag (trash icon)
    const newItag1 = document.createElement("i");
    newItag1.classList.add("fa-solid");
    newItag1.classList.add("fa-trash");
    $(".text-container").last().append(newItag1);
    // Product name (h5)
    const newHeader5 = document.createElement("h5");
    newHeader5.classList.add("cart-items-title");
    newHeader5.innerText = nameOfProduct;
    $(".text-container").last().append(newHeader5);
    // Price
    const newParagraph1 = document.createElement("p");
    newParagraph1.classList.add("cart-items-price");
    newParagraph1.innerText = "Price: " + totalPriceOfProduct.toString();
    $(".text-container").last().append(newParagraph1);
    // Size
    const newParagraph2 = document.createElement("p");
    newParagraph2.classList.add("cart-items-size");
    newParagraph2.innerText = "Variation: " + selectedVariation;
    $(".text-container").last().append(newParagraph2);
    // Extras
    const newParagraph3 = document.createElement("p");
    newParagraph3.classList.add("cart-items-extras");
    newParagraph3.innerText = "Extras: " + selectedExtras;
    $(".text-container").last().append(newParagraph3);

    // Cart quantity
    const newDiv4 = document.createElement("div");
    newDiv4.classList.add("cart-quantity");
    $(".cart-items-container").last().append(newDiv4);
    // Minus button
    const newButton1 = document.createElement("button");
    newButton1.classList.add("cart-minus");
    $(newButton1).text("-");
    $(".cart-quantity").last().append(newButton1);
    // Span quantity
    const newSpan1 = document.createElement("span");
    newSpan1.classList.add("cart-quantity-number");
    newSpan1.setAttribute("data-quantity", quantityValue.toString());
    $(newSpan1).text(quantityValue.toString());
    $(".cart-quantity").last().append(newSpan1);
    
    // Add button
    const newButton2 = document.createElement("button");
    newButton2.classList.add("cart-plus");
    $(newButton2).text("+");
    $(".cart-quantity").last().append(newButton2);

}
// Delete an order
$(document).on("click", ".fa-trash", function() {
    let quantityElement = $(this).closest(".cart-items-container").find(".cart-quantity-number");
    let deletedQuantity = parseInt(quantityElement.attr("data-quantity"));
    quantityInCart -= deletedQuantity;
    $(".quantity").text(quantityInCart.toString());
    $(this).closest(".cart-items-container").remove();
    
});
// Quantity buttons
$(document).on("click", ".cart-minus", function() {
    let quantityElement = $(this).siblings(".cart-quantity-number");
    let currentQuantity = parseInt(quantityElement.text());

    if (currentQuantity > 1) {
        currentQuantity--;
        quantityElement.text(currentQuantity);

        let priceElement = $(this).closest(".cart-items-container").find(".cart-items-price");
        let unitPrice = totalPriceOfProduct;

        let newTotalPrice = unitPrice * currentQuantity;
        priceElement.text("Price: " + newTotalPrice.toFixed(2));
    }
});

$(document).on("click", ".cart-plus", function() {
    let quantityElement = $(this).siblings(".cart-quantity-number");
    let currentQuantity = parseInt(quantityElement.text());

    currentQuantity++;
    quantityElement.text(currentQuantity);

    let priceElement = $(this).closest(".cart-items-container").find(".cart-items-price");
    let unitPrice = totalPriceOfProduct;

    let newTotalPrice = unitPrice * currentQuantity;
    priceElement.text("Price: " + newTotalPrice.toFixed(2));
});

// Customer Information (Name, Address, Contact Number, Special Instruction)
const dialog = document.getElementById("myDialog"); 
    // show fill up customer info dialog
function showDialog() { 
  dialog.show(); 
} 

function closeDialog() { 
  dialog.close(); 
} 

    // save customer info 
$(".save").on("click", function(){
    saveCustomerInfo();
});
function saveCustomerInfo(){
    let customerName = $(".fullname").text;
    let contactNumber = $(".contact-number").text;
    let customerAddress1 = $(".dialog-address-1").text + ", ";
    let customerAddress2 = $(".dialog-address-2").text + ", "; 
    let customerAddress3 = $(".dialog-address-3").text + ", ";
    let customerAddress4 = $(".dialog-address-4").text;
    let completeAddress = customerAddress1 + customerAddress2 + customerAddress3 + customerAddress4;

    console.log(customerName + "\n" + contactNumber + "\n" + completeAddress);
    // $(".name").text("Name: " + customerName);
    // $(".phone-number").text("Phone Number: " + contactNumber);
    // $(".complete-address").text("Address: " + customerAddress);
}
// Login function
// var usernames = ["user@gmail.com"];
// var passwords = ["lucky123"];
// var newUsername;
// var newPassword;
// $(".login").on("click", function(){
//     let usernameInput = $("#username").text;
//     let passwordInput = $("#password").text;

//     for(var i = 0; i < usernames.length; i++){
//         if(usernameInput === usernames[i] && passwordInput === passwords[i]){
            
//         }
//     }
// });
// Signup function
// Slick version 1.5.8s


