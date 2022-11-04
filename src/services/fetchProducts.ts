async function getAll<T>(category: string): Promise<T> {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
  const request = await fetch(URL);
  const response = await request.json();
  console.log(response.results);
  return response.results;
} 

export default { getAll };
