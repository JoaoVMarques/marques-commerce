import { IVariations } from './IPictures';

interface IProductsDetails {
  title: string,
  pictures: IVariations[],
  price: number,
}

export default IProductsDetails;