async function get<T>(itemID: string): Promise<T> {
  const URL = `https://api.mercadolibre.com/items?ids=${itemID}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response[0].body;
} 

export default { get };
