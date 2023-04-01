function scuberGreetingForFeet(someValue){
  // Write your code here!
  let returnValue = "";

  if (someValue === 400) {
    // If I use <= it is not working but somehow it is working with ===
    returnValue = "Free sample";
  } else if (someValue >= 400 && someValue <= 2000) {
    returnValue = "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue < 2500) {
    returnValue = "I will gladly take your thirty bucks."
  } else if (someValue > 2500) {
    returnValue = "No can do.";
  } else {
    returnValue = "This one is on me!";
  }
  return returnValue;
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tipType){
  // Write your code here!
  let returnValue = "";

  switch (tipType) {
    case "generous":
      returnValue = "Thank you so much.";
      break;
    case "not as generous":
      returnValue = "Thank you.";
      break;
    default:
      returnValue = "Bye.";
      break;
  }

  return returnValue;
}