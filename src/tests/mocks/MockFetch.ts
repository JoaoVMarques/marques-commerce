import CARDS from './Cards';
import CATEGORIES from './Categories';


const mockFetch = (url : string): any => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories') {
    return Promise.resolve({
      json: () => Promise.resolve(CATEGORIES)
    });
  } 
  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?category=')) {
    return Promise.resolve({
      json: () => Promise.resolve(CARDS)
    });
  } else {
    return Promise.resolve({
      json: () => Promise.resolve({})
    });
  }
};

export default mockFetch; 