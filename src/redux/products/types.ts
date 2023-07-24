export interface ProductsState {
  categoryName: string;
  itemCount: number;
  products: Array<ProductType> | null;
  isLoading: boolean;
  currentCategoryId: string | null;
}

export interface ProductType {
  id: number;
  name: string;
  price: {
    current: {
      text: string;
    };
  };
  colour: string;
  brandName: string;
  productCode: number;
  imageUrl: string;
  additionalImageUrls: Array<string>;
}
