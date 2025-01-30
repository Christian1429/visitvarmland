export interface Organizer {
  id: number;
  title: string;
  street1: string;
  street2: string;
  zip_code: string;
  city: string;
  municipality_id: number;
  organization_id: number;
  booking_link: string;
  website_link: string;
  email: string;
  phone_numbers: string[];
}

export interface Price {
  price_type: string;
  price: string;
  seats_available: string;
  description: string;
}

export interface Image {
  large: string;
  medium: string;
  small: string;
  alt_text: string;
  copyright: string;
  description: string;
  photographer: string;
  year: number;
}

export interface File {
  link: string;
  title: string;
  size: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
}

export interface Place {
  id: number;
  title: string;
  presentation: string;
  latitude: string;
  longitude: string;
  accessibility: {
    title: string;
    more_information: string;
  }[];
}

export interface Slug {
  sv: {
    slug: string;
    full_slug: string;
  };
  en: {
    slug: string;
    full_slug: string;
  };
}

export interface Occasion {
  date_start: string;
  date_end: string;
  time_start: string;
  time_end: string;
}

export interface RelatedProduct {
  id: number;
  title: string;
}

export interface RelatedEvent {
  id: number;
  title: string;
}

export interface EventData {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  sales_text: string;
  presentation: string;
  open_hours: string;
  ticket_information: string;
  ticket_info: string;
  open_times: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  booking_link: string;
  website_link: string;
  organizers: Organizer[];
  websites: string[];
  prices: Price[];
  phone_numbers: string[];
  images: Image[];
  files: File[];
  categories: Category[];
  places: Place[];
  distance: string;
  slugs: Slug;
  is_trail: number;
  trail_code_snippet: string;
  trail_total_length: number;
  number_of_trails: number;
  trail_level: string;
  trail_terrain: string;
  trail_time: string;
  slug: string;
  primary_image: {
    large: string;
    medium: string;
    small: string;
  };
  occasions: Occasion[];
  past_occasions: Occasion[];
  related_products: RelatedProduct[];
  related_events: RelatedEvent[];
}
