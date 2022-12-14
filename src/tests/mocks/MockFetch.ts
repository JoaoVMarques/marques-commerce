import CARDS from './Cards';
import CATEGORIES from './Categories';
import DESCRIPTION from './Description';
import ITEMDETAIL from './itemDetails';
import PICTURES from './Pictures';


const mockFetch = (link: RequestInfo | URL): Promise<Response> => {
  const url = link.toString();
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
  if (url.includes('https://api.mercadolibre.com/pictures?ids=')) {
    return Promise.resolve({
      json: () => Promise.resolve(PICTURES)
    } as Response);
  }
  if (url.includes('https://api.mercadolibre.com/items?ids=')) {
    return Promise.resolve({
      json: () => Promise.resolve(ITEMDETAIL)
    } as Response);
  }
  if (url.includes('/description')) {
    return Promise.resolve({
      json: () =>  Promise.resolve(DESCRIPTION)
    } as Response);
  }
  throw new Error('URL não existente no mock');
};

export default mockFetch; 