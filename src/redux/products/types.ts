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
