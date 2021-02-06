// complete the function
function palindrom(str) {
  // code goes here
  var something = str.split("").reverse().join("")
  if(something===str)
    return true;
  return false;
  
}

function solution(arg) {
  return palindrom(arg);
}
 
if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };