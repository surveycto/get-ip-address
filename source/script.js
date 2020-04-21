// Define global variables
var hash_parameter = getPluginParameter("hash");
var ip_address ="";

// This is a basic hash function to convert a string to 32bit integer.
function stringToHash(string) {
  var hash = 0;
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
  }
  return hash;
}

// If the field label or hint contain any HTML that isn't in the form definition, then the < and > characters will have been replaced by their HTML character entities, and the HTML won't render. We need to turn those HTML entities back to actual < anmd > characters so that the HTML renders properly. This will allow you to render HTML from field references in your field label or hint.
function unEntity(str){
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// Define what happens when the user attempts to clear the response.
function clearAnswer() {
  setAnswer();
}

if (fieldProperties.LABEL) {
  document.querySelector(".label").innerHTML = unEntity(fieldProperties.LABEL);
}
if (fieldProperties.HINT) {
  document.querySelector(".hint").innerHTML = unEntity(fieldProperties.HINT);
}

// Define what happens once the IP address has been obtained.
function finishedJsonLoad() {
  // Check whether the IP address should be hashed (based on the parameter).
  if(hash_parameter=="yes") {
    var hashed_ip = stringToHash(ip_address); // Hash the collected IP address.
    setAnswer(hashed_ip); // Store the hashed IP address as the field's response.
  }
  else {
    setAnswer(ip_address); // Store the IP address as the field's response.
  }
  goToNextField(); // Go to next field once ip_address is set.
}

// Use JQuery to get IP address from ipify.org
$.get("https://api.ipify.org", function(e) {
  ip_address = e; // Assign returned value to ip_address.
  finishedJsonLoad(); // Once we have obtined the IP address, process the result.
});