const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

document.addEventListener('DOMContentLoaded', function() {
    if (toggleBtn === null){
        return false;
    }
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
    
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'  ;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var backtotop = document.getElementById("backtotop");
    if (backtotop === null){
        return false;
    }
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
  
// Navigation to home page or landing page
$("#home, .dropdown_menu > .nav-linkk").on("click", function(){
    let homeButton = $("#home");
    let dropDownHomeButton = $(".dropdown_menu > .nav-linkk");
    if(localStorage.getItem("isLoggedIn") === "false"){
        homeButton.attr("href", "./index.html");
        dropDownHomeButton.attr("href", "./index.html");
    }
    else{
        homeButton.attr("href", "./home.html");
        dropDownHomeButton.attr("href", "./home.html");
    }
});

// View all menu or Order now button
$(".all-menu-btn, .order-btn, .home-order").on("click", function(){
    window.location.href = "./menu.html";
});

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
            divElement.scrollTop = 10;
            break;
        case "non-coffeee":
            divElement.scrollTop = 955;
            break;
        case "tea":
            divElement.scrollTop = 1915;
            break;
        case "pastries":
            divElement.scrollTop = 2415;
            break;
        case "apetizers":
            divElement.scrollTop = 2955;
            break;
        case "sandwiches":
            divElement.scrollTop = 3490;
            break;
        case "pasta":
            divElement.scrollTop = 4415;
            break;
        case "ricebowl":
            divElement.scrollTop = 4960;
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
var applyVoucherCode = ["ABC123", "STO4CAFE", "F0CAFE1"];

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

    while (selectedExtras.length > 0){
        selectedExtras.pop();
    }
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

    $(".size").css("display", "none");

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
    $(".quantity-number, .quantity-home").text(quantity);
});
$(".minus").on("click", function(){

    if (quantity > 1) {
        quantity--;
    $(".quantity-number, .quantity-home").text(quantity);
    }
    
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
var customerInfoExist = false;
$(".cart-link, .cart-link-home").on("click", function(){
    $(".cartpage").css("display", "flex");
    $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
    $("#check-out-price").text("P" + (totalPriceOfProductInCartPage));
    let checkOutPrice = $("#check-out-price").text();
    if(checkOutPrice === "P49"){
        $("#check-out-price").text("P0");
    }else{
        $("#check-out-price").text("P" + (totalPriceOfProductInCartPage));
    }
    $("body").css("overflow", "hidden");
});
// Back button inside cart page
$(".backbutton").on("click", function(){
    $(".cartpage").css("display", "none");
    $('body').css("overflow", "visible");
});
// Add To cart button function
var totalPriceOfProduct = 0;
var totalPriceOfProductInCartPage = 49;
var quantityInCart = 0;
$(".addtocart").on("click", function(){
    if(localStorage.getItem("isLoggedIn") === "false"){
        // If there is no login yet, the form will appear to be logged in
        alert("Please login first!");
        window.location.replace("./login.html");
        return;
    }
    if(check === true && quantity !== 0){
        totalPriceOfProduct = priceOfProduct * quantity;
        totalPriceOfProductInCartPage += totalPriceOfProduct;
        // next create element for add to cart page
        if(selectedVariation === undefined || selectedExtras === undefined){
            selectedVariation = "";
            selectedExtras = ""
        }

        quantityInCart += quantity;
        $(".quantity, .quantity-home").text(quantityInCart.toString());
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
function resetPaymentRadioButton(){
    let radioOption1 = $("#radio1");
    let radioOption2 = $("#radio2");
    let radioOption3 = $("#radio3");

    radioOption1.checked = false;
    radioOption2.checked = false;
    radioOption3.checked = false;
}
function addItemToCart(quantityValue){
    if(selectedVariation !== "8oz" && selectedVariation !== "solo" && selectedVariation !== ""){
        totalPriceOfProduct += 30;
        totalPriceOfProductInCartPage += 30;
    }
    if(selectedExtras.length > 0){
        totalPriceOfProduct += 45;
        totalPriceOfProductInCartPage += 45;
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

    resetPaymentRadioButton();
}

// Remove items in cart
function removeItemToCart(){
    // cart-items-container
    $(".cart-items-container").remove();

    // cart-items-container
    $(".cart-img-container" ).remove();
    // Image
    $(".cart-img").remove();

    // text-container
    $(".text-container").remove();
    // i tag (trash icon)
    $(".fa-trash");
    // Product name (h5)
    $(".cart-items-title").remove();
    // Price
    $(".cart-items-price").remove();
    // Size
    $(".cart-items-size").remove();
    // Extras
    $(".cart-items-extras").remove();

    // Cart quantity
    $(".cart-quantity").remove();
    // Minus button
    $(".cart-minus").remove();
    // Span quantity
    $(".cart-quantity-number").remove();
    // Add button
    $(".cart-plus").remove();

    totalPriceOfProductInCartPage = 49;
    quantityInCart = 0;

    $(".quantity, .quantity-home").text(quantityInCart.toString());
    $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
    $("#check-out-price").text("P" + (totalPriceOfProductInCartPage - 49));
    $("#textbox-voucher").text("");
}
// Delete an order
$(document).on("click", ".fa-trash", function() {
    let quantityElement = $(this).closest(".cart-items-container").find(".cart-quantity-number");
    // let deletedQuantity = parseInt(quantityElement.attr("data-quantity"));
    let deletedQuantity = parseInt(quantityElement.text());
    let priceElement = $(this).closest(".cart-items-container").find(".cart-items-price");
    let deletedPriceString = priceElement.text();
    
    let stringPrice = deletedPriceString.slice(7);
    let deletedPrice = parseInt(stringPrice);
    
    totalPriceOfProductInCartPage -= deletedPrice;
    $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
    $("#check-out-price").text("P" + (totalPriceOfProductInCartPage - 49));
    quantityInCart -= deletedQuantity;
    $(".quantity, .quantity-home").text(quantityInCart.toString());
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
        totalPriceOfProductInCartPage -= unitPrice;

        quantityInCart--;
        $(".quantity, .quantity-home").text(quantityInCart.toString());
        $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
        $("#check-out-price").text("P" + (totalPriceOfProductInCartPage));
        priceElement.text("Price: " + newTotalPrice);
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
    totalPriceOfProductInCartPage += unitPrice;

    quantityInCart++;
    $(".quantity, .quantity-home").text(quantityInCart.toString());
    $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
    $("#check-out-price").text("P" + (totalPriceOfProductInCartPage));
    priceElement.text("Price: " + newTotalPrice);
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

$(document).ready(function() {
    $('.contact-number').on('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
});

function saveCustomerInfo(){
    let customerName = $(".fullname").val();
    let contactNumber = $(".contact-number").val();
    let customerAddress1 = $(".dialog-address-1").val() + ", ";
    let customerAddress2 = $(".dialog-address-2").val() + ", "; 
    let customerAddress3 = $(".dialog-address-3").val() + ", ";
    let customerAddress4 = $(".dialog-address-4").val();
    let completeAddress = customerAddress1 + customerAddress2 + customerAddress3 + customerAddress4;

    if(customerName === "" || contactNumber === "" || customerAddress1 === "" || customerAddress2 === "" || customerAddress3 === "" || customerAddress4 === ""){
        alert("Missing information is not allowed, Please fill up the form");
        dialog.show();
        return customerInfoExist = false;
    }
    $(".name").text("Name: " + customerName);
    $(".phone-number").text("Phone Number: " + contactNumber);
    if(completeAddress.length > 30){
        let tempAddress;
        for(var i = 0; i < 30; i++){
            tempAddress += ceompleteAddress[i];
        }
        $(".complete-address").text("Address: " + tempAddress);
    }
    else{
        $(".complete-address").text("Address: " + completeAddress);
    }
    
    alert("successfully save the customer address!");
    return customerInfoExist = true;
}

// Payment Method and Place Order
var selectedPaymentMethod = "Payment Method: ";  
$(".payment").click(function(){
    const paymentMethod = $(this).attr("id");
    console.log(paymentMethod);
    storePaymentMethod(paymentMethod);
});

function storePaymentMethod(selectedPayment){
    if(selectedPayment === "radio1"){
        selectedPaymentMethod = "Cash";
    }
    else if(selectedPayment === "radio2"){
        selectedPaymentMethod = "Card";
    }
    else if(selectedPayment === "radio3"){
        selectedPaymentMethod = "G-Cash";
    }
    
    $(".payment-method-2").text("Payment Method: " + selectedPaymentMethod);
}

$(".apply").on("click", function(){
    let inputVoucherCode = $("#textbox-voucher").val();
    for(var i = 0; i < applyVoucherCode.length; i++){
        if(inputVoucherCode === applyVoucherCode[i]){
            alert("Successfully applied the voucher discount");
            totalPriceOfProductInCartPage -= 50;
            $(".subtotal").text("Subtotal: P" + (totalPriceOfProductInCartPage - 49));
            $("#check-out-price").text("P" + (totalPriceOfProductInCartPage));
            applyVoucherCode.pop(inputVoucherCode);

        }
    }
});
$(".checkout").on("click", function(){
    let checkOutPriceInt = totalPriceOfProductInCartPage;
    if(localStorage.getItem("isLoggedIn") === "false"){
        // If there is no login yet, the form will appear to be logged in
        alert("Please login first!");
        window.location.replace("./login.html");
        return;
    }
    if(checkOutPriceInt === 49){
        alert("Please add a product first!");
    }
    else if(selectedPaymentMethod === "Payment Method: "){
        alert("Please select a payment method first!");
    }
    else if(customerInfoExist === false){
        alert("Please fill up the delivery address first!");
    }
    else{
        alert("Your order will be sent to your address in just 30-45 minutes!\nPlease prepare the exact amount!");
        removeItemToCart();
    }
});

$("#login-form-button").on("click", function(){
    window.location.href = "./login.html" ;
});
//======== Login function ========//
// Login credentials storages
var usernames = ["user@gmail.com", "juandelacruz@gmail.com", "angeloprincipio18@gmail.com"];
var passwords = ["lucky123", "juan23", "pogiko123"];
var firstNames = ["Romano", "Juan", "Angelo"];
var lastNames = ["Ramos", "Dela Cruz", "Principio"];
$(document).ready(function() {
    $("#loginButton").on("click", function(){
        loginValidation();
    });
    $(".login-container").on("keydown", function(event) {
        if (event.key === "Enter") {
            loginValidation();
        }
    });
    
});
function checkButtonVisibility() {
    // checks if the user is logged in the website
    if(localStorage.getItem("isLoggedIn") === "true"){
        localStorage.setItem("buttonHidden", "true");
    }
    else{
        localStorage.setItem("buttonHidden", "false");
    }

    if (localStorage.getItem("buttonHidden") === "true") {
        $("#login-form-button").hide(); // Hide the button
        $(".dropdown").show();
        $(".cart-link").attr("class", "cart-link-home");
        $(".quantity").attr("class", "quantity-home");
    } 
    else {
        $("#login-form-button").show(); // Ensure the button is shown
        $(".dropdown").hide();
        $(".cart-link-home").attr("class", "cart-link");
        $(".quantity-home").attr("class", "quantity");
    }
}

// Check user name information

function checkCurrentUsername(){
    if(localStorage.getItem("isLoggedIn") === "true"){
        $(".user-fullname").text(localStorage.getItem("loginName"));
        $(".user-email").text(localStorage.getItem("loginEmail"));
    }
}

function loginValidation(){
    let gmailInput = $("#login-email").val();
    let passwordInput = $("#login-password").val();
    let indexOfGmail = 0;
    var currentName;
    if(gmailInput === "" || passwordInput === ""){
        alert("Please input your gmail & password!");
    }
    else if(!(gmailInput.includes("@gmail.com"))){
        alert("The gmail should have '@gmail.com' to be considered as your gmail!");
    }
    else{
        for(var i = 0; i < usernames.length; i++){
            if(gmailInput === usernames[i] && passwordInput === passwords[i]){
                localStorage.setItem("isLoggedIn", "true");
                indexOfGmail = i;
                break;
            }
            else{
                localStorage.setItem("isLoggedIn", "false");
            }
        }
        if(localStorage.getItem("isLoggedIn") === "true"){
            currentName = firstNames[indexOfGmail] + " " + lastNames[indexOfGmail];
            localStorage.setItem("buttonHidden", "true");
            localStorage.setItem("isLoggedIn", "true"); // Sets the login flag to true
            localStorage.setItem("loginEmail", gmailInput);
            localStorage.setItem("loginName", currentName);
            $("#login-email").text("");
            $("#login-password").text("");
            window.location.href = "./home.html"; // Change location
        }
        else{
            localStorage.setItem("buttonHidden", "false");
            alert("Invalid email or password!");
            $("#login-email").text("");
            $("#login-password").text("");
        }
    }
}

$(document).ready(function(){
    checkButtonVisibility();
    checkCurrentUsername();
});
//======= Forgot Password =======//
$("#login-forgot-password").on("click", function(){
    const loginForm = $(".login-container");
    $(loginForm).css("display", "none");
    const forgotPasswordForm = $(".forgotpass-container");
    $(forgotPasswordForm).css("display", "flex");
});

//========== Send code email ==========//
$(".send-btn").on("click", function(event){
    const userEmail = $("#userEmail").val();
    localStorage.setItem('currentEmail', userEmail);
    if(userEmail === "" || !(userEmail.includes("@gmail.com"))){
        alert("Please input a your stout cafe gmail account first!");
        return;
    }
    let randomValue = Math.floor(Math.random() * (999999 - 111111)) + 111111;
    localStorage.setItem('emailCode', randomValue);
    $("#emailCode").val(randomValue);
    alert("Please check your email for confirmation!");
    userEmail.innerText = "";
    const confirmationContainer = $(".confirmation-container");
    confirmationContainer.css("display", "flex");
    const forgotPasswordForm = $(".forgotpass-container");
    $(forgotPasswordForm).css("display", "none");
    
});

$(".forgotpass-container").on("submit", function(event){
    event.preventDefault(); // Prevent the default form submission
    var formData = $(this).serialize(); // Serialize the form data
    $.ajax({
        url: 'https://formsubmit.co/angeloprincipio18@gmail.com',
        method: 'POST',
        data: formData,
        success: function(response) {
            // Handle the success response here
            alert('Code submitted successfully.');
            console.log(localStorage.getItem('emailCode'));
        },
        error: function(error) {
            // Handle the error response here
            alert('An error occurred. Please try again.');
        }
    });           
});
// return to login from forgot password
$(".return-to-login-forgotpassform").on("click", function(){
    const loginForm = $(".login-container");
    $(loginForm).css("display", "flex");
    const forgotPasswordForm = $(".forgotpass-container");
    $(forgotPasswordForm).css("display", "none");
});

//========= sign up form =========//
$("#sign-up-form").on("click", function(){
    const loginForm = $(".login-container");
    $(loginForm).css("display", "none");
    const signUpForm = $(".signin-container");
    $(signUpForm).css("display", "flex");
});

// return to login from signup form
$(".return-to-login-signupform").on("click", function(){
    const loginForm = $(".login-container");
    $(loginForm).css("display", "flex");
    const signUpForm = $(".signin-container");
    $(signUpForm).css("display", "none");
});

// return to forgot password from code
$(".return-to-forgotpasswordform").on("click", function(){
    const forgotPasswordForm = $(".forgotpass-container");
    $(forgotPasswordForm).css("display", "flex");
    const confirmationContainer = $(".confirmation-container");
    confirmationContainer.css("display", "none");
});

// ========= Confirm email via submit code button ========= //
$(".submit-btn").on("click", function(){
    const code1 = $("#emailcode-1").val();
    const code2 = $("#emailcode-2").val();
    const code3 = $("#emailcode-3").val();
    const code4 = $("#emailcode-4").val();
    const code5 = $("#emailcode-5").val();
    const code6 = $("#emailcode-6").val();
    let allcodes = code1 + code2 + code3 + code4 + code5 + code6;
    if(localStorage.getItem('emailCode') === allcodes){
        $(".reset-container").css("display", "flex");
        $(".confirmation-container").css("display", "none");
    }
    else{
        alert("The code you've submitted did not match to the code we sent to your email!");
        console.log(allcodes);
        $("#emailcode-1").text("");
        $("#emailcode-2").text("");
        $("#emailcode-3").text("");
        $("#emailcode-4").text("");
        $("#emailcode-5").text("");
        $("#emailcode-6").text("");
        return;
    }
});

// =========== Save new password =========== //
$(".save-btn").on("click", function(){
    let currentGmail = localStorage.getItem('currentEmail');
    let differentPassword = $("#differentPassword").val();
    let confirmPassword  = $("#confirmPassword").val();
    let passwordChanged = false;
    if(differentPassword === "" || confirmPassword === ""){
        alert("Please fill up new password & confirm password!");
    }
    else if(differentPassword !== confirmPassword){
        alert("New password and Confirm password must be the same!");
    }
    else{
        for(var l = 0; l < usernames.length; l++){
            if(currentGmail === usernames[l]){
                passwords[l] = confirmPassword;
                passwordChanged = true;
                break;
            }
        }
        if(passwordChanged){
            alert("Your password has been updated!");
            $(".reset-container").css("display", "none");
            $(".login-container").css("display", "flex");
        }
    }
});

// Sign up
$(".register-btn").on("click", function(){
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let newEmail = $("#new-email").val();
    let newPassword = $("#new-password").val();
    let newConfirmPassword = $("#new-confirm-password").val();

    if(firstName === "" || lastName === "" || newEmail === "" || newPassword === "" || newConfirmPassword === ""){
        alert("Please fill up the form!");
    }
    else{
        if(newPassword !== newConfirmPassword){
            alert("New password and Confirm password did not matched!");
        }
        else if(!(newEmail.includes("@gmail.com"))){
            alert("'@gmail.com' is require for your email account!");
        }
        else{
            firstNames.push(firstName);
            lastNames.push(lastName);
            usernames.push(newEmail);
            passwords.push(newConfirmPassword);
            $("#first-name").text("");
            $("#last-name").text("");
            $("#new-email").text("");
            $("#new-password").text("");
            $("#new-confirm-password").text("");
            alert("You successfully added an account!");
            const loginForm = $(".login-container");
            $(loginForm).css("display", "flex");
            const signUpForm = $(".signin-container");
            $(signUpForm).css("display", "none");
        }
    }
    
});

// Sign out
$("#signOut").on("click", function(){
    window.location.href = "./index.html";
    localStorage.setItem("isLoggedIn", "false");
    checkButtonVisibility(); 
});

//========== Send Get It Touch ==========//
$("#send").on("click", function(event){
    const userEmail = $("#email").val();
    const name = $("#name").val();
    const subject = $("#subject").val();
    const message = $("#message").val();
    localStorage.setItem('currentEmail', userEmail);
    if(userEmail === "" || name === "" || subject === "" || message === ""){
        alert("Please fill up the form first!");
        return;
    }
    else if(!(userEmail.includes("@gmail.com"))){
        alert("Please input a your stout cafe gmail account first!");
        return;
    }
    else{
        alert("Your message will be sent shortly, please wait for a few seconds!");
    }
});

$(".contact-form").on("submit", function(event){
    event.preventDefault(); // Prevent the default form submission
    var formData = $(this).serialize(); // Serialize the form data
    const userEmail = $("#email").val();
    const name = $("#name").val();
    const subject = $("#subject").val();
    const message = $("#message").val();
    $.ajax({
        url: 'https://formsubmit.co/angeloprincipio18@gmail.com',
        method: 'POST',
        data: formData,
        success: function(response) {
            // Handle the success response here
            alert('Your message is successfully sent!');
            userEmail.text("");
            name.text("");
            subject.text("");
            message.text("");
        },
        error: function(error) {
            // Handle the error response here
            alert('An error occurred. Please try again.');
            console.log(error);
        }
    });           
});
// Slick version 1.5.8s