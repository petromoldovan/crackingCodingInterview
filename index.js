//Chap 1
//Arrays and strings

//1.1 Implement an algorithm to determine if a string has all unique characters.
function allUniqueChars(string) {
  let res = {};
  for (let i = 0; i < string.length; i++) {

    if (res[string[i]]) return false

    if (!res[string[i]]) res[string[i]] = 1
    else res[string[i]]++
  }

  return true;
}

allUniqueChars("bajvbbpsc")
//Time complexity is O(n), where n is the length of the string, and space complexity is O(n)

//What if you can not use additional data structures?
//1.1.A Double loop. Unique char must occur only one
function allUniqueCharsDoubleLoop(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++
    }

    if (count > 1) return false
  }

  return true
}

allUniqueCharsDoubleLoop("double")


//1.1.B Sort the string and then check for repetitions
function allUniqueCharsDestruct(str) {
  let str2 = str.split("").sort().join("")

  for (let i = 0; i < str2.length; i++) {
    if (str2[i + 1] && str2[i] === str2[i+1]) return false
  }

  return true
}

allUniqueCharsDestruct("triple")
