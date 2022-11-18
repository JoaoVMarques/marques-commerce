import { IPictures } from '../interfaces/IPictures';
import { IProducts } from '../interfaces/IProductsContext';
import fetchPictures from '../services/fetchPictures';

const getProductPicture = async (products : IProducts[]) => {
  const thumbsId = products.map((product) => product.thumbnail_id).join(',');
  const pictures: IPictures[] = await fetchPictures.getAll(thumbsId);
  const refatoredPictures = refatoringPicture(pictures);
  return refatoredPictures;
};

const refatoringPicture = (pictures: IPictures[]) => {
  return pictures.map((picture) => picture.variations[0].url);
};

export default {
  getProductPicture,
};