interface IProductsContext {
  setProductsAPI: (category: string) => Promise<void>;
}

export default IProductsContext;