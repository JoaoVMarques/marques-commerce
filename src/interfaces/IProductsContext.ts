export interface IProducts {
  id: string,
  title: string,
  price: number,
  thumbnail_id: string,
  picture?: string,
}

export interface IProductsContext {
  products: IProducts[] | null;
  setProductsAPI: (category: string) => Promise<void>;
}