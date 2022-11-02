const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
async function getAll<T>(): Promise<T> {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
} 

export default { getAll };
