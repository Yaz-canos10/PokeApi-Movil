export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchCharacters(page = 1, limit = 20) {
  try {
    const offset = (page - 1) * limit;
    const url = `${BASE_URL}?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data; // data.results, data.count
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw error;
  }
}

export async function fetchCharacterDetail(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener detalle:', error);
    throw error;
  }
}
