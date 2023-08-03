export interface ProductState {
  profuctInfo: {
    aboutMe?: string;
    sizeAndFit?: string | null;
    careInfo?: string;
  };
  currentProductId: string | null;
  poductInfoIsLoaded: boolean;
}
