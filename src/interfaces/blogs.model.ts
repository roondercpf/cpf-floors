export interface BlogsResponse {
    message: string;
    blogs:   Blog[];
}

export interface Blog {
    _id:              string;
    title:            string;
    subtitle:         string;
    pictures:         string[];
    paragraphs:       string[];
    featured_image:   string;
    reference_images: any[];
}
