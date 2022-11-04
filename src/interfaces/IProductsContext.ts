interface IProducts {
  id: string,
  title: string,
}

interface IProductsContext {
  products: IProducts[] | null;
  setProductsAPI: (category: string) => Promise<void>;
}

export default IProductsContext;