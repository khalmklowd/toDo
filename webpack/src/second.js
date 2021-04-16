let initForm = () => {
    let form = document.createElement("FORM");
    form.id = "form";
    document.getElementById("ford").appendChild(form);
}

let addInput = () => {
    let userTxt = document.createElement("INPUT");
    let userSbmt = document.createElement("INPUT");
    userTxt.id = "todo";
    userTxt.placeholder = "What's to do?";
    userSbmt.type = "submit";
    userSbmt.nodeValue = "Submit"; 
    document.getElementById("form").appendChild(userTxt);
    document.getElementById("form").appendChild(userSbmt);
};

let list = () => {
    let remembered = document.createElement("CHECKBOX");
    remembered.id = "wishlist";
    remembered.type = "checkbox";
    document.getElementById("ford").appendChild(remembered);
};

let localSave = () => {
// Get form, item, and wishlist
var addToWishList = document.querySelector('#form');
var wishlistItem = document.querySelector('#todo');
var wishlist = document.querySelector('#wishlist');

addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (wishlistItem.value.length < 1) return;

	// Add item to wishlist
	wishlist.innerHTML += '<li>' + wishlistItem.value + '</li>';

	// Clear input
	wishlistItem.value = '';

}, false);
};

let saved = () => {
// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	wishlist.innerHTML = saved;
}
};

export {list, saved, localSave, initForm, addInput};