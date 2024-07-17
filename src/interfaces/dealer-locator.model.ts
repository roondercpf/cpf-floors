export interface DealerLocatorResponse {
    message: string;
    dealers: Dealerlocator[];
}

export interface Dealerlocator {
    _id: string;
    title: string;
    description: string;
    street: string;
    city: string;
    state: string;
    postal_code: number;
    country: string;
    lat: number;
    lng: number;
    phone: string;
    fax: string;
    email: string;
    website: string;
    description_2: string;
    marker_id: number;
    is_disabled: number;
    open_hours: string;
    logo_name: string;
    categories: string;
    order: number;
  }