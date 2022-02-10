//1. Determine the total number of birds that you counted so far
function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((sum,birds) => sum+birds)
}

//2. Calculate the number of visiting birds in a specific week
function birdsInWeek(birdsPerDay, week) {
  let sum = 0
  let start = (week*7)-7
  const end = start+7
  for (let index = start; index < end; index++) {
    sum += birdsPerDay[index]
  }
  return sum
}

//3. Fix a counting mistake
function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if (index%2 === 0)
      birdsPerDay[index] += 1
  }
  return birdsPerDay
}

export {totalBirdCount, birdsInWeek, fixBirdCountLog}