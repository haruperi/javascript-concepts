// 1. Calculate the sum for the numbers on the slot machine
function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''))
}

// 2. Determine if a number is a palindrome
function luckyNumber(value) {
  const str = String(value)
  let start = 0
  let end = str.length-1

  while(end>=start){
    if (str.charAt(start) !== str.charAt(end))
      return false
    start++
    end--
  }
  return true
}

// 3. Generate an error message for invalid user input
  function errorMessage(input) {
    if (!input)
      return 'Required field'
    if (!Number(input))
      return 'Must be a number besides 0'
    return ''
  }

  export {twoSum, luckyNumber, errorMessage}