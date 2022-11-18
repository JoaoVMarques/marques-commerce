async function getAll<T>(thumbsId: string): Promise<T> {
  const URL = `https://api.mercadolibre.com/pictures?ids=${thumbsId}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
} 

export default { getAll };
