export interface IProducts {
  id: string,
  title: string,
  picture: string,
  price: number,
  thumbnail_id: string,
}

export interface IProductsContext {
  products: IProducts[] | null;
  setProductsAPI: (category: string) => Promise<void>;
}