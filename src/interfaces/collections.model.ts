export interface CollectionResponse {
    message: string;
    collections:   Collections[];
}

export interface Collections {
    _id:              string;
    name:            string;
    sbrand:         string;
    category:         string;
    colors:       string[];
    fproduct_type:   string;
    plank_sizes: string;
    wear_layer: string;
    overall_thickness: string;
    core: string;
    underlayment: string;
    installation_method: string;
    traffic_class: string;
    sqft_per_box: string;
    sqft_per_pallet: string;
    planks_per_box: number;
    box_per_pallet: number;
    features: string[]
}