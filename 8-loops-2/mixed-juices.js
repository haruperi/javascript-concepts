//1. Determine how long it takes to mix a juice
function timeToMixJuice(name) {
  if (name === 'Pure Strawberry Joy')
    return 0.5

  if (name === 'Energizer' || name === 'Green Garden')
    return 1.5

  if (name === 'Tropical Island')
    return 3

  if (name === 'All or Nothing')
    return 5

  return 2.5
}


//2. Replenish the lime wedge supply
function limesToCut(wedgesNeeded, limes) {
  let limesToCut = 0
  let index = 0
  while(wedgesNeeded>0 && index <limes.length){
    if (limes[index] === 'small')
      wedgesNeeded -= 6
    if (limes[index] === 'medium')
      wedgesNeeded -= 8
    if (limes[index] === 'large')
      wedgesNeeded -= 10
    limesToCut++
    index++
  }
  return limesToCut
}


//3. Finish up the shift
function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders.shift());
  } while (timeLeft > 0 && orders.length > 0);

  return orders
}

export {timeToMixJuice, limesToCut, remainingOrders}