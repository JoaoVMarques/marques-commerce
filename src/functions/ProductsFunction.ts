import { IPictures } from '../interfaces/IPictures';
import { IProducts } from '../interfaces/IProductsContext';

const mergeWithPic = async (products : IProducts[], pictures : IPictures[]) => 
  products.map((product) => {
    const pictureFinded = pictures.find((picture) => picture.id === product.thumbnail_id);
    const picture = pictureFinded?.variations[0].url;
    return ({...product, picture });
  });

export default {
  mergeWithPic,
};