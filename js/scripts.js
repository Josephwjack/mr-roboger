function robotNumbers(userInput) {
  let numArray = [];
  for(let index=0; index <= userInput; index++) {
    if (index.toString().includes(3)) {
      numArray.push(" wont you be my neighbor ")

    }else if(index.toString().includes(2)) {
      numArray.push(" boop ")

    }else if(index.toString().includes(1)) {
      numArray.push(" beep ")

    }else {
      numArray.push(index);
    }
  } return numArray.toString(" ");

}
// function wrongType(input) {
//   if (input === !Number){
//     return alert("Please enter a real number")
//   };
// };
$(document).ready(function() {
  $("#numbers").submit(function(event) {
  event.preventDefault();
  const userInput = $("#userInput").val();
  const result = robotNumbers(userInput);
  $("#output").html(result);
  $("output").show()

    })
  })


  
  
 

