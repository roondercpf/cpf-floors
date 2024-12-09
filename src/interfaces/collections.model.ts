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
  cover: string;
  collection_url: string
}

export interface Color {
  name: string;
  sku: string;
  plankSize: string;
  installationMethod: string;
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
  room_scenes: string;
  features?: string;
}

export enum Category {
  vinyl = "vinyl",
  laminate = "laminate",
}
