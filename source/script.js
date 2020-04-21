// Define global variables
var hash_parameter = getPluginParameter("hash");
var ip_address ="";

//Basic hash function to convert to 32bit integer
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

// Define what happens when the user attempts to clear the response
function clearAnswer() {
  setAnswer();
}

////End global functions




if (fieldProperties.LABEL) {
  document.querySelector(".label").innerHTML = unEntity(fieldProperties.LABEL);
}
if (fieldProperties.HINT) {
  document.querySelector(".hint").innerHTML = unEntity(fieldProperties.HINT);
}

//Once ip field is captured, set the answer
var finishedJsonLoad = function() {
  //check whether the IP address should be hashed_ip
  if(hash_parameter=="yes") {
    //scramble the collected IP address
    var hashed_ip = stringToHash(ip_address);
    //set answer to hashed collected ip Address
    setAnswer(hashed_ip);
  }
  else {
    //set answer to collected ip Address
    setAnswer(ip_address);
  }
  //go to next field once ip address is set
  goToNextField();
};

//use JQuery to get IP address ipify.org
$.get("https://api.ipify.org", function(e) {
  ip_address = e;//assign returned value to ip_address
  $('#ip_value').text(ip_address);//display collected value to screen
  finishedJsonLoad();// callback to access ip_address globally
});
