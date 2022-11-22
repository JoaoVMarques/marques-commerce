async function get<T>(itemID: string): Promise<T> {
  const URL = `https://api.mercadolibre.com/items?ids=${itemID}`;
  const request = await fetch(URL);
  const response = await request.json();
  console.log(response[0].body);
  return response[0].body;
} 

export default { get };
