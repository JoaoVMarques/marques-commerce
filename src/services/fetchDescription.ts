async function get<T>(ITEM_ID : string): Promise<T> {
  const URL = `https://api.mercadolibre.com/items/${ITEM_ID}/description`;
  const request = await fetch(URL);
  const response = await request.json();
  return response.plain_text;
} 

export default { get };
