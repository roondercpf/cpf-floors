export interface CollectionResponse {
  message: string;
  collections: Collections[];
}

export interface Collections {
  _id: string;
  name: string;
  brand: string;
  category: string;
  colors: Color[];
  serieName: string
  productType: string;
  wearLayer: string;
  overallThickness: string;
  core: string;
  underlayment: string;
  trafficClass: string;
  description: string;
  cover: string
}

export interface Color {
  name: string;
  sku: string;
  plank_sizes: string;
  installation_method: string;
  sound_transmission?: string;
  warranty: string;
  sqftPerBox: number;
  sqftPerPallet: number;
  planksPerBox: number;
  boxPerPallet: number;
  weightBoxPounds: number;
  weightPallet: number;
  palletSize: string;
  picture: string;
  installation: string;
  roomScene: string;
  features?: string;
}

export enum Category {
  vinyl = "vinyl",
  laminate = "laminate",
}
