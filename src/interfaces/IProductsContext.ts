export interface IProducts {
  id: string,
  title: string,
  thumbnail: string,
}

export interface IProductsContext {
  products: IProducts[] | null;
  setProductsAPI: (category: string) => Promise<void>;
}