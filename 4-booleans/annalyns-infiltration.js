//1. Check if the 'Fast Attack' action is possible
 function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

//2. Check if the 'Spy' action is possible
 function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

//3. Check if the 'Signal Prisoner' action is possible
 function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake
}

//4. Check if the 'Free Prisoner' action is possible
 function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake )
}

export {canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner}