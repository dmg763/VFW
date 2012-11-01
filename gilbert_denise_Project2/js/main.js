/* Denise M. Gilbert
VFW Term 1211
Project 2
November 1, 2012
main.js Page*/

// Main Function That Ensures All DOM Content is Loaded and Ready

window.addEventListener("DOMContentLoaded", function () {

// Variable Defaults

    var selectColor = ["-- Select a Color --", "Blue", "Green", "Red", "Orange", "Yellow", "Black", "Brown"],
	    purchasedValue,
	    whateverValue;

// Generic getElementById Function

    function $(x) {
	    var theElement = document.getElementById(x);
	    return theElement;
    }

// Create Select Color Element and Populate with Different Color Options

    function makeCats() {
	    var formTag = document.getElementsByTagName("form"),
		    selectLi = $("select"),
		    makeSelect = document.createElement("select");
		makeSelect.setAttribute("id", "groups");
	    for (var i = 0, j = selectColor.length; i < j; i += 1) {
		    var makeOption = document.createElement("option"),
		    optText = selectColor[i];
		    makeOption.setAttribute("value", optText);
		    makeOption.innerHTML = optText;
		    makeSelect.appendChild(makeOption);
	    }
	    selectLi.appendChild(makeSelect);
    }

    makeCats();
    
    // Find Values of Selected Radio Buttons
    
    function getSelectedRadio() {
	    var radio = document.getElementById("form").purchased;
	    for (var i = 0; i < radio.length; i += 1) {
		    if (radio[i].checked) { 
			    purchasedValue = radio[i].value;
		    }
	    }
    }
    
    // Find Values of Selected Check Boxes
    
    /*function getCheckboxValues() {
	    if ($("whatever").checked) {
		    whateverValue = $("whatever").value;
	    } else {
		    whateverValue = "None";
	    }
    }*/
    
    // Save Recipient to Local Storage Function
    
    function saveRecipientToLocalStorage() {
	    var id = Math.floor(Math.random() * 1000000001);
	// Gather All Form Field Values and Store in an Object
	// Object Properties Will Contain an Array with the Form Lable and Input Value
	    getSelectedRadio();
	    //getCheckboxValues();
	    var item = {};
	    item.fname = ["First Name:", $("fname").value];
	    item.lname = ["Last Name:", $("lname").value];
	    item.bday = ["Birthday:", $("bday").value];
	    item.topsize = ["Top Size:", $("topsize").value];
	    item.bottomsize = ["Bottom Size:", $("bottomsize").value];
	    item.shoesize = ["Shoe Size:", $("shoesize").value];
	    item.ringsize = ["Ring Size:", $("ringsize").value];
	    item.group = ["Group", $("groups").value];
	    item.flowers = ["Flowers:", $("flowers").value];
	    item.foods = ["Foods:", $("foods").value];
	    item.restaurants = ["Restaurants:", $("restaurants").value];
	    item.purchased = ["Purchased:", purchasedValue];
	    //item.whatever = ["Whatever:", whateverValue];
	    item.rating = ["Rating:", $("rating").value];
	    item.giftwanted = ["Gift Wanted:", $("giftwanted").value];
	    item.price = ["Price:", $("price").value];
	    item.wheretobuy = ["Where to Buy:", $("wheretobuy").value];
	// Save Data Into Local Storage
	// Use Stringify to Convert the Item Object to a String
	    localStorage.setItem(id, JSON.stringify(item));
	    alert("Recipient Information is Saved!");
    }
    
    // Display Local Storage Data Function
    // Write Data from Local Storage to the Browser
    
    function displayLocalStorageData() {
	    var makeDiv = document.createElement("div");
	    makeDiv.setAttribute("id", "items");
	    var makeList = document.createElement("ul");
	    makeDiv.appendChild(makeList);
	    document.body.appendChild(makeDiv);
	    for (var i = 0, j = localStorage.length; i < j; i += 1) {
		    var makeLi = document.createElement("li");
		    makeList.appendChild(makeLi);
		    var key = localStorage.key(i);
		    var value = localStorage.getItem(key);
		// Convert String Value from Local Storage Back to an Object
		    var object = JSON.parse(value);
		    var makeSubList = document.createElement("ul");
		    makeLi.appendChild(makeSubList);
		    for (var n in object) {
			    var makeSubLi = document.createElement("li");
			    makeSubList.appendChild(makeSubLi);
			    var optSubText = object[n][0] + " " + object[n][1];
			    makeSubLi.innerHTML = optSubText;
		    }
	    }
    }
    
// Set Links and Submit Click Events

    var displayDataLink = $("displayData");
    displayDataLink.addEventListener("click", displayLocalStorageData);
    var addRecipient = $("saveRecipient");
    addRecipient.addEventListener("click", saveRecipientToLocalStorage);
        //var clearStoredData = $("clearStoredData");
    //clearStoredData.addEventListener("click", clearLocalStorageData);
    
    
    
    
    
    
    
    
    
    
    
    
    
});