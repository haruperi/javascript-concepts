function cookingStatus(time) {
  if (time === 0)
    return 'Lasagna is done.'
  if (time > 0)
    return 'Not done, please wait.'
  return 'You forgot to set the timer.'
}

function preparationTime(layers, time = 2) {
  return layers.length*time
}

function quantities (array) {
  let noodles = 0
  let sauce = 0
  array.forEach(element => {
    if (element === 'noodles')
      noodles += 50

    if (element === 'sauce')
      sauce += 0.2
  })

  return {
    noodles : noodles,
    sauce : sauce
  }
}


function addSecretIngredient (friendsList, myList) {
  myList.push(friendsList[friendsList.length-1])
}

 function scaleRecipe (recipe, scale) {
  const newRecipe = {...recipe}
  for (const key in newRecipe) {
    newRecipe[key] = (newRecipe[key]/2)*scale
  }
  return newRecipe
}


export {cookingStatus, preparationTime, quantities, scaleRecipe, addSecretIngredient}
