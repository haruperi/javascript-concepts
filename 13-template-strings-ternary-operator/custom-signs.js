// 1. Build an occasion sign
function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

// 2. Build a birthday sign
function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age < 50 ? 'young' : 'mature'} fellow you are.`
}

// 3. Build a graduation sign
function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}

// 4. Compute the cost of a sign
function costOf(sign, currency) {
  return `Your sign costs ${(sign.length*2 + 20).toFixed(2)} ${currency}.`
}

export {buildSign, buildBirthdaySign, graduationFor, costOf}