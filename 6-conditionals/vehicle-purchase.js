//1. Determine if you will need a drivers licence
function needsLicense(kind) {
  return kind === 'car' || kind === 'truck' ? true : false
}

//2. Choose between two potential vehicles to buy
function chooseVehicle(option1, option2) {
  if (option1 < option2)
    return `${option1} is clearly the better choice.`
  return `${option2} is clearly the better choice.`
}

//3. Calculate an estimation for the price of a used vehicle
function calculateResellPrice(originalPrice, age) {
  if (age<3)
    return originalPrice * 0.8
  if (age<=10)
    return originalPrice * 0.7
  return originalPrice * 0.5
}

export {needsLicense, chooseVehicle, calculateResellPrice}