function robotNumbers(number) {
  let numArray = [];
  for(let index=0; index <= number; index++) {
    if (index.toString().includes(3)) {
      numArray.push("wont you be my neighbor")

    }else if(index.toString().includes(2)) {
      numArray.push("boop")

    }else if(index.toString().includes(1)) {
      numArray.push("beep")

    }else {
      numArray.push(index);
    }
  } return numArray;
}

function wrongType(element) {
  if (element === !Number){
    return alert("Please enter a real number")
  }
};
// UI logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    $("#results").toggle();
    $("form#userInput").toggle();
  })
});
