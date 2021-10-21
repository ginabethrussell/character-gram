const baseApi = 'https://swapi.dev/api/';

export async function getCharacterData(id) {
  let query = `https://swapi.dev/api/people/${id}`;
  const res = await fetch(query);
  const data = await res.json();

  return data;
}

async function getAllDataOfType(type) {
  let apiData = []
  let next = `${baseApi}${type}`;
  while (next) {
    const res = await fetch(next);
    const data = await res.json();
    apiData = apiData.concat(data.results)
    next = data.next
  }
  return apiData;
}

export async function getAllCharacterData() {
  return await getAllDataOfType('people');
}

export async function getAllSpeciesData() {
  return await getAllDataOfType('species');
}

export async function getAllFilmData() {
  return await getAllDataOfType('films');
}

export async function getAllVehicleData() {
  return await getAllDataOfType('vehicles');
}

export async function getAllStarshipData() {
  return await getAllDataOfType('starships');
}
