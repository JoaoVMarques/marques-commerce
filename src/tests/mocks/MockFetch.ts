import CARDS from './Cards';
import CATEGORIES from './Categories';


const mockFetch = (url: RequestInfo | URL): Promise<Response> => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories') {
    return Promise.resolve({
      json: () => Promise.resolve(CATEGORIES)
    } as Response);
  } 
  if (url === 'https://api.mercadolibre.com/sites/MLB/search?category=MLB271599') {
    return Promise.resolve({
      json: () => Promise.resolve(CARDS)
    } as Response);
  }
  throw new Error('URL não existente no mock');
};

export default mockFetch; 