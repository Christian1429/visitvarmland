# Turid Backend
https://www.mongodb.com/try/download/community go for network setup

cd fe && npm run start:all

## API Endpoints

- **POST /data**: http://localhost:2000/api/data/
- **GET /data**: http://localhost:2000/api/data/
- **GET /data/:id**: http://localhost:2000/api/data/:_id
- **PUT /data/:id**: http://localhost:2000/api/data/:_id
- **DELETE /data/:id**: http://localhost:2000/api/data/:_id

# Dummy data POSTMAN
{
    "id": 2,
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z",
    "title": "Exempel Evenemang",
    "description": "Detta är ett exempel på ett evenemang.",
    "sales_text": "Köp biljetter nu!",
    "presentation": "Evenemangspresentation",
    "open_hours": "9 AM - 5 PM",
    "ticket_information": "Biljetter tillgängliga online",
    "ticket_info": "Allmän entré",
    "open_times": "Vardagar",
    "meta_title": "Exempel Evenemang Meta Titel",
    "meta_keywords": "exempel, evenemang",
    "meta_description": "Detta är en exempelbeskrivning av ett evenemang.",
    "booking_link": "http://example.com/bokning",
    "website_link": "http://example.com",
    "organizers": [
      {
        "id": 2,
        "title": "Arrangör 2",
        "street1": "123 Huvudgata",
        "street2": "",
        "zip_code": "12345",
        "city": "Exempelstad",
        "municipality_id": 1,
        "organization_id": 1,
        "booking_link": "http://example.com/arrangor1",
        "website_link": "http://example.com/arrangor1",
        "email": "arrangor1@example.com",
        "phone_numbers": ["123-456-7890"]
      }
    ],
    "websites": [],
    "prices": [
      {
        "price_type": "Allmän",
        "price": "10.00",
        "seats_available": "100",
        "description": "Pris för allmän entré"
      }
    ],
    "phone_numbers": ["123-456-7890"],
    "images": [
      {
        "large": "http://example.com/bild_stor.jpg",
        "medium": "http://example.com/bild_medium.jpg",
        "small": "http://example.com/bild_liten.jpg",
        "alt_text": "Exempelbild",
        "copyright": "Exempel Copyright",
        "description": "Exempelbildbeskrivning",
        "photographer": "Exempel Fotograf",
        "year": 2023
      }
    ],
    "files": [
      {
        "link": "http://example.com/fil.pdf",
        "title": "Exempelfil",
        "size": "1MB"
      }
    ],
    "categories": [
      {
        "id": 2,
        "title": "Kategori 1",
        "slug": "kategori-1"
      }
    ],
    "places": [
      {
        "id": 1,
        "title": "Plats 1",
        "presentation": "Plats presentation",
        "latitude": "40.7128",
        "longitude": "-74.0060",
        "accessibility": [
          {
            "title": "Rullstolsanpassad",
            "more_information": "Tillgänglig ingång finns"
          }
        ]
      }
    ],
    "distance": "5 miles",
    "slugs": {
      "sv": {
        "slug": "exempel-evenemang-sv",
        "full_slug": "exempel-evenemang-sv-full"
      },
      "en": {
        "slug": "exempel-evenemang-en",
        "full_slug": "exempel-evenemang-en-full"
      }
    },
    "is_trail": 0,
    "trail_code_snippet": "",
    "trail_total_length": 0,
    "number_of_trails": 0,
    "trail_level": "",
    "trail_terrain": "",
    "trail_time": "",
    "slug": "exempel-evenemang",
    "primary_image": {
      "large": "http://example.com/primar_bild_stor.jpg",
      "medium": "http://example.com/primar_bild_medium.jpg",
      "small": "http://example.com/primar_bild_liten.jpg"
    },
    "occasions": [
      {
        "date_start": "2023-01-01",
        "date_end": "2023-01-01",
        "time_start": "09:00",
        "time_end": "17:00"
      }
    ],
    "past_occasions": [
      {
        "date_start": "2022-01-01",
        "date_end": "2022-01-01",
        "time_start": "09:00",
        "time_end": "17:00"
      }
    ],
    "related_products": [
      {
        "id": 2,
        "title": "Relaterad Produkt 1"
      }
    ],
    "related_events": [
      {
        "id": 2,
        "title": "Relaterat Evenemang 1"
      }
    ]
  }

