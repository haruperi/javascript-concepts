const PREPARATION_MINUTES_PER_LAYER = 2;

// 1. Define the expected oven time in minutes
export const EXPECTED_MINUTES_IN_OVEN = 40

//2. Calculate the remaining oven time in minutes
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

//3. Calculate the preparation time in minutes
export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers
}

// 4. Calculate the total working time in minutes
 export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}
