export async function getAllCharacterData() {
  let profileData = []
  let next = 'https://swapi.dev/api/people';
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    profileData = profileData.concat(data.results)
    next = data.next
  }

  return profileData;
}

export async function getCharacterData(id) {
  let query = `https://swapi.dev/api/people/${id}`;
  const res = await fetch(query);
  const data = await res.json();

  return data;
}

export async function getAllSpeciesData() {
  let speciesData = []
  let next = 'https://swapi.dev/api/species';
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    speciesData = speciesData.concat(data.results)
    next = data.next
  }
  return speciesData;
}

export async function getAllFilmData() {
  let filmData = []
  let next = 'https://swapi.dev/api/films';
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    filmData = filmData.concat(data.results)
    next = data.next
  }
  return filmData;
}
export async function getAllVehicleData() {
  let vehicleData = []
  let next = 'https://swapi.dev/api/vehicles';
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    vehicleData = vehicleData.concat(data.results)
    next = data.next
  }
  return vehicleData;
}

export async function getAllStarshipData() {
  let starshipData = []
  let next = 'https://swapi.dev/api/starships';
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    starshipData = starshipData.concat(data.results)
    next = data.next
  }
  return starshipData;
}
