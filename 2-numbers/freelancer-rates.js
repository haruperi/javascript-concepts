//1. Calculate the day rate given an hourly rate
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

//2. Calculate the number of workdays given a fixed budget
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}

//3. Calculate the discounted rate for large projects
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if (numDays<22)
    return numDays * dayRate(ratePerHour)

  return Math.ceil((numDays % 22) * dayRate(ratePerHour) + ((numDays - (numDays % 22)) * dayRate(ratePerHour)) * (1 - discount))
}
