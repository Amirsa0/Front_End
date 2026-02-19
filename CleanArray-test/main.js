const dirtyArray = [
  "Quera",
  2024,
  undefined,
  { course: "alpha", duration: "7" },
  NaN,
  "1403/02/15",
  null,
  912000111222,
  NaN,
  "Array",
  true,
  null,
  "undefined",
];


function makeArrayClean(dirtyArray) {
  for (let i = dirtyArray.length - 1 ; i >= 0 ; i-- ) {
    const item = dirtyArray[i];

    if (

      typeof item !== "string" &&
      !(typeof item === "number" && !Number.isNaN(item)) &&
      !(typeof item === "object" && item !== null) 
    ){
      dirtyArray.splice(i,1);
    }
  }
  return dirtyArray


}

console.log(makeArrayClean(dirtyArray))

module.exports = makeArrayClean;
