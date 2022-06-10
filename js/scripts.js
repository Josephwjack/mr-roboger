function robotNumbers(integer) {
  const threeArray = [3];
  const twoArray = [2];
  const oneArray = [1];
  let string = "29";
  const stringArray = string.split("");
  let xArray = [];
    for(i= 0; i <= stringArray; i++) {
    if (threeArray.includes(integer)) {
      xArray.push("won't you be my neighbor");
    } else if(twoArray.includes(integer)) {
      xArray.push("*boop*");
    } else if(oneArray.includes(integer)) {
      xArray.push("*beep*");
    } else {
      xArray.push(i)
    }
    const finalString = xArray.join("");
    return finalString 
  }
}
