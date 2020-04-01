// Detect platform
var isWebCollect = (document.body.className.indexOf("web-collect") >= 0);
var isAndroid = (document.body.className.indexOf("android-collect") >= 0);
var isIOS = (document.body.className.indexOf("ios-collect") >= 0);
var ip_address ="";

//Once ip field is captured, set the answer
var finishedJsonLoad = function() {
  //set answer to collected ip Address
  setAnswer(ip_address);
  //go to next field once ip address is set
  goToNextField();
};


// Find the input element
var input = document.getElementById('text-field');

// If the field label or hint contain any HTML that isn't in the form definition, then the < and > characters will have been replaced by their HTML character entities, and the HTML won't render. We need to turn those HTML entities back to actual < anmd > characters so that the HTML renders properly. This will allow you to render HTML from field references in your field label or hint.
function unEntity(str){
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
if (fieldProperties.LABEL) {
    document.querySelector(".label").innerHTML = unEntity(fieldProperties.LABEL);
}
if (fieldProperties.HINT) {
    document.querySelector(".hint").innerHTML = unEntity(fieldProperties.HINT);
}

//use JQuery to get IP address ipify.org
$.get("https://api.ipify.org", function(e) {
  ip_address = e;//assign returned value to ip_address
  $('#ip_value').text(ip_address);//display collected value to screen
  finishedJsonLoad();// callback to access ip_address globally
});

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.value = '';
}

// If the field is not marked readonly, then focus on the field and show the on-screen keyboard (for mobile devices)
/*function setFocus() {
    if(!fieldProperties.READONLY){
        input.focus();
        if (window.showSoftKeyboard) {
            window.showSoftKeyboard();
        }
    }
}*/

//console.log("The IP Address is: " +);

// Save the user's response (update the current answer)
//input.oninput = function() {
//    setAnswer(input.value);
//}
