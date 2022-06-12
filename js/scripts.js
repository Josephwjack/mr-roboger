function robotNumbers(numberIn) {
  let numArray = [];
  for(let index=0; index <= numberIn; index++) {
    if (index.toString().includes(3)) {
      numArray.push("wont you be my neighbor")

    }else if(index.toString().includes(2)) {
      numArray.push("boop")

    }else if(index.toString().includes(1)) {
      numArray.push("beep")

    }else {
      numArray.push(index);
    }
  } return numArray

}
function wrongType(input) {
  if (input === !Number){
    return alert("Please enter a real number")
  };
};

$(document).ready(function() {
  $("#numbers").ready(function(event) {
    event.preventDefault();
    let numberIn =


  } 
}
