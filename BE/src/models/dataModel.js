const mongoose = require('mongoose');
// required: true;
const organizerSchema = new mongoose.Schema({
    // id for existing organizer, remove later
    id: { type: Number, },
    title: { type: String, },
    street1: { type: String, },
    street2: { type: String },
    zip_code: { type: String,},
    city: { type: String, },
    municipality_id: { type: Number,},
    organization_id: { type: Number,  },
    booking_link: { type: String },
    website_link: { type: String },
    email: { type: String },
    phone_numbers: [{ type: String }]
});

const contactSchema = new mongoose.Schema({
  contact_name: { type: String },
  contact_email: { type: String },
  contact_address: { type: String },
  contact_number: { type: String },
});

const priceSchema = new mongoose.Schema({
    price_type: { type: String, },
    price: { type: String, },
    seats_available: { type: String, },
    description: { type: String }
});

const imageSchema = new mongoose.Schema({
    large: { type: String },
    medium: { type: String },
    small: { type: String },
    alt_text: { type: String },
    copyright: { type: String },
    description: { type: String },
    photographer: { type: String },
    year: { type: Number }
});

const fileSchema = new mongoose.Schema({
    link: { type: String },
    title: { type: String },
    size: { type: String }
});

const categorySchema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    slug: { type: String }
});

const placeSchema = new mongoose.Schema({
    id: { type: Number},
    title: { type: String},
    presentation: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    accessibility: [{ title: { type: String }, more_information: { type: String } }]
});

const occasionSchema = new mongoose.Schema({
    date_start: { type: Date },
    date_end: { type: Date },
    time_start: { type: String },
    time_end: { type: String }
});

const dataSchema = new mongoose.Schema({
    id: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    title: { type: String },
    description: { type: String },
    sales_text: { type: String },
    presentation: { type: String },
    open_hours: { type: String },
    ticket_information: { type: String },
    ticket_info: { type: String },
    open_times: { type: String },
    meta_title: { type: String },
    meta_keywords: { type: String },
    meta_description: { type: String },
    booking_link: { type: String },
    website_link: { type: String },
    organizers: [organizerSchema],
    websites: [{ type: String }],
    prices: [priceSchema],
    contact: [contactSchema],
    phone_numbers: [{ type: String }],
    images: [imageSchema],
    files: [fileSchema],
    categories: [categorySchema],
    places: [placeSchema],
    distance: { type: String },
    slugs: {
        sv: {
            slug: { type: String },
            full_slug: { type: String }
        },
        en: {
            slug: { type: String },
            full_slug: { type: String }
        }
    },
    is_trail: { type: Number },
    trail_code_snippet: { type: String },
    trail_total_length: { type: Number },
    number_of_trails: { type: Number },
    trail_level: { type: String },
    trail_terrain: { type: String },
    trail_time: { type: String },
    slug: { type: String },
    primary_image: {
        large: { type: String },
        medium: { type: String },
        small: { type: String }
    },
    occasions: [occasionSchema],
    past_occasions: [occasionSchema],
    related_products: [{
        id: { type: Number },
        title: { type: String }
    }],
    related_events: [{
        id: { type: Number },
        title: { type: String }
    }]
});

module.exports = mongoose.model('Data', dataSchema);