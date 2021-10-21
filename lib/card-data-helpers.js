export const getCharacterSpecies = (character, species) => {
  if (character.species.length > 0) {
    const speciesArr = character.species.reduce((speciesArr, speciesURL) => {
      const speciesObj = species.find(speciesType => speciesType.url === speciesURL)
      if (speciesObj) {
        speciesArr.push(speciesObj.name)
      }
      return speciesArr;
    }, [])
    return speciesArr.join(' ')
  }
  return "No data available"
}
export const getCharacterFilms = (character, films) => {
  if (character.films.length > 0) {
    const filmsList = character.films.reduce((filmsArr, filmURL) => {
      const filmObj = films.find(filmItem => filmItem.url === filmURL)
      if (filmObj) {
        filmsArr.push(filmObj.title)
      }
      return filmsArr;
    }, [])
    return filmsList.join(",\n")
  }
  return "No films found"
}

export const getCharacterStarships = (character, starships) => {
  if (character.starships.length > 0) {
    const starshipsList = character.starships.reduce((starshipsArr, starshipURL) => {
      const starshipObj = starships.find(starshipItem => starshipItem.url === starshipURL)
      if (starshipObj) {
        starshipsArr.push(starshipObj.name)
      }
      return starshipsArr;
    }, [])
    return starshipsList.join(",\n")
  }
  return "No starships found"
}

export const getCharacterVehicles = (character, vehicles) => {
  if (character.vehicles.length > 0) {
    const vehiclesList = character.vehicles.reduce((vehiclesArr, vehicleURL) => {
      const vehicleObj = vehicles.find(vehicleItem => vehicleItem.url === vehicleURL)
      if (vehicleObj) {
        vehiclesArr.push(vehicleObj.name)
      }
      return vehiclesArr;
    }, [])
    return vehiclesList.join(",\n")
  }
  return "No vehicles found"
}
