
// Function to create label element
function createLabel(forAttr, content,type) {
    var label = document.createElement("label");
    label.setAttribute("for", forAttr);
    label.innerHTML = content;
    if(type != "radio" &&type != "checkbox" )
    label.classList.add("col-lg-4", "col-form-label", "text-lg-right"); // Bootstrap classes added
    else
    label.classList.add("checkbox-inliness"); // Bootstrap classes added
    

    
    return label;
}

// Function to create input element
function createInput(typeAttr, id, name, placeholder) {
    var input = document.createElement("input");
    input.setAttribute("type", typeAttr);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
        input.setAttribute("placeholder", placeholder);
        if(typeAttr != "radio" && typeAttr != "checkbox" )
        input.classList.add("form-control"); // Bootstrap class added
        else
        input.classList.add("checkbox-inliness");

    return input;
}

// Function to create break element
function createBreak() {
    return document.createElement("br");
}

// Function to handle form submission
function handleSubmit() {
    // Your logic for form submission here
    console.log("Form submitted!");
}



// Create elements
var firstnameLabel = createLabel("fname", "Firstname");
var firstnameInput = createInput("text", "firstname", "firstname", "Enter your First Name");

var lastnameLabel = createLabel("lname", "Lastname");
var lastnameInput = createInput("text", "lastname", "lastname", "Enter your Last Name");

var addressLabel = createLabel("address", "Address");
var addressInput = createInput("text", "address", "address", "Enter your Address");

var pincodeLabel = createLabel("pincode", "Pincode");
var pincodeInput = createInput("text", "pincode", "pincode", "Enter your Pincode");

var genderLabel = createLabel("gender", "Gender","radio");
var maleLabel = createLabel("male", "Male","radio");

var maleInput = createInput("radio", "male", "gender", "male");
var femaleLabel = createLabel("female", "Female","radio");

var femaleInput = createInput("radio", "female", "gender", "female");
var otherLabel = createLabel("others", "Others","radio");

var otherInput = createInput("radio", "others", "gender", "others");


var foodLabel = createLabel("choice_of_food", "Choice of Food","checkbox");
var biriyaniLabel = createLabel("biriyani", "Biriyani","checkbox");

var biriyaniInput = createInput("checkbox", "biriyani", "choice_of_food", "briyani");
var curdRiceLabel = createLabel("curd_rice", "Curd Rice","checkbox");

var curdRiceInput = createInput("checkbox", "curdrice", "choice_of_food", "curdrice");
var friedRiceLabel = createLabel("fried_rice", "Fried Rice","checkbox");

var friedRiceInput = createInput("checkbox", "friedrice", "choice_of_food", "friedrice");

var stateLabel = createLabel("state", "State");
var stateDropdown = document.createElement("select");
stateDropdown.setAttribute("id", "state");
stateDropdown.setAttribute("name", "state");
stateDropdown.classList.add("form-control"); // Bootstrap classes added
var states = ["Tamil Nadu", "Kerala", "Telangana", "Goa", "Chhattisgarh"];
states.forEach(function(state) {
    var option = document.createElement("option");
    option.setAttribute("value", state);
    option.innerHTML = state;
    stateDropdown.appendChild(option);
});

var countryLabel = createLabel("country", "Country");
var countryDropdown = document.createElement("select");
countryDropdown.setAttribute("id", "country");
countryDropdown.setAttribute("name", "country");
countryDropdown.classList.add("form-control"); // Bootstrap classes added

var countries = ["India", "China", "Japan", "Egypt", "England"];
countries.forEach(function(country) {
    var option = document.createElement("option");
    option.setAttribute("value", country);
    option.innerHTML = country;
    countryDropdown.appendChild(option);
});

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("value", "Submit");
submitButton.setAttribute("onclick", "handleSubmit()");
submitButton.classList.add("btn-primary");


// Append elements to body
document.body.appendChild(firstnameLabel);
document.body.appendChild(createBreak());
document.body.appendChild(firstnameInput);
document.body.appendChild(createBreak());
document.body.appendChild(lastnameLabel);
document.body.appendChild(createBreak());
document.body.appendChild(lastnameInput);
document.body.appendChild(createBreak());
document.body.appendChild(addressLabel);
document.body.appendChild(createBreak());
document.body.appendChild(addressInput);
document.body.appendChild(createBreak());
document.body.appendChild(pincodeLabel);
document.body.appendChild(createBreak());
document.body.appendChild(pincodeInput);
document.body.appendChild(createBreak());
document.body.appendChild(genderLabel);
document.body.appendChild(createBreak());
document.body.appendChild(maleInput);
document.body.appendChild(maleLabel);
document.body.appendChild(createBreak());
document.body.appendChild(femaleInput);
document.body.appendChild(femaleLabel);
document.body.appendChild(createBreak());
document.body.appendChild(otherInput);
document.body.appendChild(otherLabel);
document.body.appendChild(createBreak());
document.body.appendChild(createBreak());
document.body.appendChild(foodLabel);
document.body.appendChild(createBreak());
document.body.appendChild(biriyaniInput);
document.body.appendChild(biriyaniLabel);
document.body.appendChild(createBreak());
document.body.appendChild(curdRiceInput);
document.body.appendChild(curdRiceLabel);
document.body.appendChild(createBreak());
document.body.appendChild(friedRiceInput);
document.body.appendChild(friedRiceLabel);
document.body.appendChild(createBreak());
document.body.appendChild(stateLabel);
document.body.appendChild(createBreak());
document.body.appendChild(stateDropdown);
document.body.appendChild(createBreak());
document.body.appendChild(countryLabel);
document.body.appendChild(createBreak());
document.body.appendChild(countryDropdown);
document.body.appendChild(createBreak());
document.body.appendChild(submitButton);

function handleSubmit(){

var fname = document.getElementById("firstname").value;
console.log(fname)

var lname = document.getElementById("lastname").value;
console.log(lname)

var address = document.getElementById("address").value;
console.log(address)

var pincode = document.getElementById("pincode").value;
console.log(pincode)

var gender = document.querySelector('input[name="gender"]:checked').id;
console.log(gender)

 
var choice_of_food = [];
var checkbox = document.getElementsByName('choice_of_food');
for(var i=0; i < checkbox.length; i++){
   if(checkbox[i].checked){
    choice_of_food.push(checkbox[i].id);
   }
}
if(choice_of_food.length < 2){
    alert("Please select atleast 2 food");
    return false;
    }
console.log(choice_of_food)

var state = document.querySelector('#state').value;
console.log(state)

var country = document.querySelector('#country').value;
console.log(country)


 }