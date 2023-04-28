function combineAndRemoveZ(arr) {
  const combinedString = arr.join("");
  const newString = combinedString.replace(/Z/g, "");
  return newString;
}