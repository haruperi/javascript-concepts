//1. Get the first letter of a sentence
 function frontDoorResponse(line) {
  return line.charAt(0)
}

//2. Capitalize a word
 function frontDoorPassword(word) {
  word = word.toLowerCase()
  word = word.charAt(0).toUpperCase() + word.slice(1,word.length)
  return word
}

//3. Get the last letter of a sentence
 function backDoorResponse(line) {
  line = line.trim()
  return line.charAt(line.length-1)
}


//4. Be polite
 function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'
}

export {frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword}