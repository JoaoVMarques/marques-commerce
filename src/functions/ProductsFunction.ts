import { IProducts } from '../interfaces/IProductsContext';

const mergeWithPic = async (products : IProducts[], pictures : string[]) => 
  products.map((product, index) => ({...product, picture: pictures[index]}));

export default {
  mergeWithPic,
};