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
  } return numArray
}



