const getCharacterData = (character, data, type, key) => {
  if (character[type].length > 0) {
    const dataList = character[type].reduce((dataArr, dataURL) => {
      const dataObj = data.find(dataItem => dataItem.url === dataURL)
      if (dataObj) {
        dataArr.push(dataObj[key])
      }
      return dataArr;
    }, [])
    return dataList.join(",\n")
  }
  return `No ${type} found`
}

export const getCharacterFilms = (character, films) => {
  return getCharacterData(character, films, 'films', 'title')
}

export const getCharacterSpecies = (character, species) => {
  return getCharacterData(character, species, 'species', 'name')
}

export const getCharacterVehicles = (character, vehicles) => {
  return getCharacterData(character, vehicles, 'vehicles', 'name')
}

export const getCharacterStarships = (character, starships) => {
  return getCharacterData(character, starships, 'starships', 'name')
}
