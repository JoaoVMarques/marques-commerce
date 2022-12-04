import { IPictures } from '../interfaces/IPictures';
import { IProducts } from '../interfaces/IProductsContext';
import fetchPictures from '../services/fetchPictures';

const get = async (products : IProducts[]) => {
  const thumbsId = products.map((product) => product.thumbnail_id).join(',');
  const pictures: IPictures[] = await fetchPictures.getAll(thumbsId);
  return pictures;
};

export default {
  get,
};