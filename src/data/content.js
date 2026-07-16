const CDN = 'https://www.aman.com'

export const hero = {
  subtitle: 'Tokyo, Japan',
  title: 'Aman Tokyo',
  description:
    'From the heights of the Otemachi Tower, Aman Tokyo tempers urban dynamism with a profound atmosphere of serenity. Inspired by Japanese design tradition, with ikebana displays, washi paper doors and engawa platforms, the vast hotel lobby, ryokan-style rooms and Aman Spa are all among Tokyo\'s largest.',
  image: `${CDN}/sites/default/files/styles/full_size_extra_large/public/2021-02/Aman-Tokyo_Homepage_1.jpg`,
  alt: 'Aman Tokyo interior with washi paper screens in warm evening light.',
  // Vimeo film — domain-restricted, only plays on whitelisted domains (e.g. aman.com), not localhost
  videoUrl: 'https://vimeo.com/1187768967',
}

export const navLinks = [
  { label: 'Gallery', href: 'https://www.aman.com/hotels/aman-tokyo/gallery' },
  {
    label: 'Accommodation',
    href: 'https://www.aman.com/hotels/aman-tokyo/accommodation/rooms-suites',
    children: [
      { label: 'Overview', href: 'https://www.aman.com/hotels/aman-tokyo/accommodation/rooms-suites' },
      { label: 'Suites', href: 'https://www.aman.com/hotels/aman-tokyo/suites-aman-tokyo' },
      { label: 'Signature Suites', href: 'https://www.aman.com/hotels/aman-tokyo/signature-suites-aman-tokyo' },
    ],
  },
  {
    label: 'Dining',
    href: 'https://www.aman.com/hotels/aman-tokyo/dining',
    children: [
      { label: 'Overview', href: 'https://www.aman.com/hotels/aman-tokyo/dining' },
      { label: 'Seasonal Exclusives', href: 'https://www.aman.com/hotels/aman-tokyo/dining/seasonal-exclusives' },
      { label: 'La Pâtisserie', href: 'https://www.aman.com/hotels/aman-tokyo/dining/la-patisserie-aman-tokyo' },
      { label: 'Arva', href: 'https://www.aman.com/hotels/aman-tokyo/dining/arva' },
      { label: 'Musashi', href: 'https://www.aman.com/hotels/aman-tokyo/dining/musashi-aman' },
      { label: 'The Lounge', href: 'https://www.aman.com/hotels/aman-tokyo/dining/lounge-aman' },
      { label: 'The Café', href: 'https://www.aman.com/hotels/aman-tokyo/dining/cafe-aman' },
    ],
  },
  {
    label: 'Experiences',
    href: 'https://www.aman.com/hotels/aman-tokyo/experiences',
    children: [
      { label: 'Overview', href: 'https://www.aman.com/hotels/aman-tokyo/experiences' },
      { label: 'Shop', href: 'https://www.aman.com/hotels/aman-tokyo/experiences/shop' },
      { label: "What's on", href: 'https://www.aman.com/hotels/aman-tokyo/experiences/whats-on' },
    ],
  },
  { label: 'Wellness', href: 'https://www.aman.com/hotels/aman-tokyo/wellness' },
  { label: 'Celebrations', href: 'https://www.aman.com/hotels/aman-tokyo/celebrations-events' },
  { label: 'Exclusive Offers', href: 'https://www.aman.com/hotels/aman-tokyo/exclusives' },
]

// Property sub-nav tabs (the row beneath the header)
export const propNavLinks = [
  { label: 'Gallery', href: 'https://www.aman.com/hotels/aman-tokyo/gallery' },
  { label: 'Accommodation', href: 'https://www.aman.com/hotels/aman-tokyo/accommodation/rooms-suites' },
  { label: 'Dining', href: 'https://www.aman.com/hotels/aman-tokyo/dining' },
  { label: 'Experiences', href: 'https://www.aman.com/hotels/aman-tokyo/experiences' },
  { label: 'Wellness', href: 'https://www.aman.com/hotels/aman-tokyo/wellness' },
  { label: 'Celebrations', href: 'https://www.aman.com/hotels/aman-tokyo/celebrations-events' },
  { label: 'Exclusive Offers', href: 'https://www.aman.com/hotels/aman-tokyo/exclusives' },
  { label: 'Online Shop', href: 'https://www.aman.com/hotels/aman-tokyo/experiences/shop' },
  { label: 'Residences', href: 'https://www.aman.com/residences' },
  { label: 'Getting Here', href: 'https://www.aman.com/hotels/aman-tokyo/contact' },
  { label: 'Contact Us', href: 'https://www.aman.com/hotels/aman-tokyo/contact' },
]

export const galleryImages = [
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-01/Aman%20Tokyo%20-%20Japan%20-%20Lobby.webp`, alt: "Aman Tokyo's lobby with minimalist interior, warm wood ceiling panels and dark walls." },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2026-05/Aman-Tokyo--Japan---F-B---The-Cafe-by-Aman---Exterior-2.webp`, alt: 'The Café by Aman exterior nestled amongst tall trees at dusk, Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2025-10/Aman%20Tokyo%2C%20Japan%20-%20Interior%2C%20Arva%20%281%29.webp`, alt: 'Arva interior at Aman Tokyo with floor-to-ceiling windows overlooking sunset.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-08/aman-tokyo-lounge%20%282%29_0.webp`, alt: 'Aman Tokyo lounge with soaring stone walls and illuminated shelving display.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2026-05/Aman-Tokyo--Japan---Aman-Spa-swimming-pool--2-.webp`, alt: 'Aman Tokyo spa swimming pool with teal water and suspended lighting.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-02/Aman-Tokyo_Gallery_10.webp`, alt: 'Modern workspace at Aman Tokyo with floor-to-ceiling windows overlooking the city skyline.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-08/Aman_Tokyo_Suite.webp`, alt: 'Aman Tokyo suite with floor-to-ceiling window framing Tokyo\'s skyline and a sleek black soaking tub.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-08/aman_tokyo_tokyo_suite_lounge.webp`, alt: 'Tokyo Suite lounge at Aman Tokyo with wooden desk and floor-to-ceiling windows.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-08/aman_tokyo_tokyo_suite_bedroom_0.webp`, alt: 'Principal bedroom in Tokyo Suite at Aman Tokyo with city views.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-02/Aman-Tokyo_Gallery_11.webp`, alt: 'Reading nook with wooden slat screen overlooking Tokyo skyline at Aman Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-11/Aman%20Tokyo%20-%20Arva%20pg.webp`, alt: 'Arva dining venue at Aman Tokyo, with soaring concrete columns and warm lighting.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-04/aman-tokyo-spa-shelf.webp`, alt: 'Spa shelving display at Aman Tokyo with dark timber wall and ambient lighting.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-04/amna-tokyo-spa-renee.webp`, alt: 'Tall marble columns line the edge of an indoor plunge pool at Aman Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-11/aman_tokyo_japan_-_wellness_-_skincare.webp`, alt: 'Aman Tokyo skincare bottles arranged on a dark surface with natural light.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-09/Aman%20Tokyo%2C%20Japan%20-%20La%20Patisserie%202.webp`, alt: 'La Patisserie at Aman Tokyo, with natural wood counter seating.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-08/aman-tokyo-patisserie-bread-p.webp`, alt: "Assorted freshly baked pastries from Aman Tokyo's patisserie." },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-11/aman_tokyo_japan_-_fb_master_chef_hiroyuki_musashi_7_1.webp`, alt: "Master Chef Hiroyuki Musashi prepares a dish at Aman Tokyo's dining venue." },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2024-07/aman_tokyo_japan_-_room_view.webp`, alt: 'Spacious room at Aman Tokyo with expansive windows overlooking the Tokyo skyline.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-02/Aman-Tokyo_Gallery_19.webp`, alt: 'A circular black mirror with wooden frame reflects green foliage at Aman Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-08/aman_tokyo_japan_-_arva.webp`, alt: 'Hand presenting freshly prepared sushi at Aman Tokyo, Japan.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-03/aman-tokyo-arva-s.webp`, alt: 'Dining venue at Aman Tokyo with soaring ceilings and floor-to-ceiling windows.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-03/Aman_Tokyo_Spring_Cafe.webp`, alt: "Modern pavilion nestled amongst tall trees at Aman Tokyo's spring café." },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-06/BR_Aman_Tokyo_Spring_013.webp`, alt: 'Spring garden view at Aman Tokyo with dining table beneath flowering trees.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-06/BR_Aman_Tokyo_Spring_010-3.webp`, alt: 'Dining venue at Aman Tokyo with floor-to-ceiling windows overlooking spring foliage.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2022-07/Ben_Richards_Aman_Tokyo_Autumn_026%20%281%29.webp`, alt: "Autumn light filters through wooden screens in Aman Tokyo's serene lounge." },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-11/aman_tokyo_-_activity_bonsai_1.webp`, alt: 'Hands pruning a bonsai tree at Aman Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-02/Aman-Tokyo_Gallery_34.webp`, alt: 'Hand holding brush, painting brushstrokes on paper at Aman Tokyo.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-11/aman_tokyo_japan_-_interior_-_swimming_pool_1.webp`, alt: 'Interior swimming pool at Aman Tokyo with floor-to-ceiling windows.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2021-02/Aman-Tokyo_Gallery_26.webp`, alt: 'Gallery corridor at Aman Tokyo with floor-to-ceiling windows overlooking the city.' },
  { src: `${CDN}/sites/default/files/styles/central_carousel_small/public/2023-07/ben_richards_aman_tokyo_autumn_007.webp`, alt: 'Autumn view of Tokyo cityscape through floor-to-ceiling windows at Aman Tokyo.' },
]

export const accommodationCards = [
  {
    subtitle: 'Accommodation',
    title: 'Suites',
    description:
      "With expansive floor-to-ceiling windows, elegant shoji sliding doors, and traditional stone furo baths, Aman Tokyo's Suites embody the pinnacle of Japanese design, with king-bed and sunken living areas offering panoramic views of the city.",
    image: `${CDN}/sites/default/files/styles/listing_teaser_large/public/2023-11/aman_tokyo_tokyo_suite_bathroom.webp`,
    alt: 'Aman Tokyo suite bathroom with floor-to-ceiling window overlooking the city skyline.',
    href: 'https://www.aman.com/hotels/aman-tokyo/suites-aman-tokyo',
  },
  {
    subtitle: 'Accommodation',
    title: 'Signature Suites',
    description:
      "Aman Tokyo's Signature Suites are the hotel's largest, with separate spaces for living, dining and sleeping all benefitting from exceptional views. Starting at 121 square metres in size, City Suites offer unrivalled open plan living, while the exceptional 157 square metre Aman Suite offers an abundance of space overlooking the Tokyo skyline.",
    image: `${CDN}/sites/default/files/styles/listing_teaser_large/public/2023-11/aman_tokyo_aman_suite_dining_2.webp`,
    alt: 'Aman Suite dining area at Aman Tokyo with wooden table and city views.',
    href: 'https://www.aman.com/hotels/aman-tokyo/signature-suites-aman-tokyo',
  },
]

export const featureCards = [
  {
    subtitle: 'Exclusive Offers',
    title: 'Discover Aman Tokyo',
    description:
      'From the heights of the Otemachi Tower, Aman Tokyo is ideally placed for exploring the capital city\'s many attractions, with several exclusive offers designed to suit each and every guest.',
    image: `${CDN}/sites/default/files/styles/listing_teaser_slim_large/public/2026-04/Aman-Tokyo--Japan---Spa---Wellness--Pool--1-.webp`,
    alt: 'Sunrise reflected in a still pool at Aman Tokyo, viewed through geometric window panes.',
    href: 'https://www.aman.com/hotels/aman-tokyo/exclusives',
    linkLabel: 'Discover more',
  },
  {
    subtitle: 'Dining',
    title: 'Musashi by Aman',
    description:
      'In an intimate space centring on a hinoki cypress counter, master chef Musashi prepares and serves exquisite omakase sushi in the Edomae tradition.',
    image: `${CDN}/sites/default/files/styles/listing_teaser_slim_large/public/2026-05/Aman-Tokyo--Japan---F-B--Musashi-by-Aman--8-.webp`,
    alt: 'Dining venue at Aman Tokyo with traditional Japanese design and warm wooden finishes.',
    href: 'https://www.aman.com/hotels/aman-tokyo/dining/musashi-aman',
    linkLabel: 'Discover more',
  },
  {
    subtitle: 'Wellness',
    title: 'Aman Spa',
    description:
      'Drawing on the Japanese understanding of nature and balance, the Aman Spa features onsen-style hot baths and steam rooms, a 30-metre pool with panoramic city views and dedicated yoga and Pilates studios.',
    image: `${CDN}/sites/default/files/styles/listing_teaser_slim_large/public/2026-04/Aman-Tokyo--Japan---Spa---Wellness--Massage.webp`,
    alt: 'Therapist performing shoulder massage on guest at Aman Tokyo spa and wellness centre.',
    href: 'https://www.aman.com/hotels/aman-tokyo/wellness',
    linkLabel: 'Discover more',
  },
]

// "Journey through Japan" promo (multi-destination)
export const journey = {
  subtitle: 'Multi-destination journey',
  title: 'Journey through Japan',
  description:
    'Take full advantage of the unique settings, insider knowledge and on-hand wellness and cultural experts of Aman Tokyo, Amanemu and Aman Kyoto with this exclusive multi-destination Aman Journey.',
  image: `${CDN}/sites/default/files/styles/mobile_xl_766_1/public/2026-04/Aman-Tokyo--Japan---Views--1-.webp`,
  alt: 'Aman Tokyo framed by silhouetted columns, overlooking the city at dusk.',
  href: 'https://www.aman.com/hotels/aman-tokyo/exclusives/aman-japan-journey',
  linkLabel: 'Discover more',
}

// "The Peace of Aman in the Heart of Tokyo" editorial block
export const intro = {
  title: 'The Peace of Aman in the Heart of Tokyo',
  paragraphs: [
    "Occupying the top floors of the Otemachi Tower, Aman Tokyo rises high above the Otemachi district offering a serene urban sanctuary. Capturing the city's heritage and enigmatic energy, the Tokyo hotel completes a circuit of three Aman properties across the country. Together they provide an immersive journey into the nation's rich culture.",
    'Hotel interiors reflect a classic Japanese aesthetic with use of natural materials – wood, stone and washi paper – creating a calming retreat just moments from the Imperial Palace Gardens. Each spacious suite offers sweeping views of the Tokyo skyline, while a collection of global dining venues, a tranquil spa and a 30-metre swimming pool together deliver Aman\'s promise of privacy, peace and local immersion. Whether visiting for business or leisure, Aman Tokyo offers an unrivalled base for exploring the many facets of Japan\'s vibrant capital.',
  ],
  image: `${CDN}/sites/default/files/styles/mobile_xl_766_1/public/2024-03/aman_tokyo_japan_-_wellness_spa_city_view_pool.webp`,
  alt: 'The 30-metre swimming pool at Aman Tokyo with panoramic city views.',
  ctaLabel: 'Check availability',
  ctaHref: 'https://www.aman.com/aman/reservation?locale=en&chain=16840&hotel=62649&currency=JPY',
}

// "Nearby resorts" carousel cards
export const nearbyResorts = [
  {
    subtitle: 'Ise-shima, Japan',
    title: 'Amanemu',
    image: `${CDN}/sites/default/files/styles/property_nearby_large/public/2022-09/Amanemu%2C%20Japan%20-%20Resort%2C%20drone%20shot%204-5.webp`,
    alt: 'Aerial drone shot of Amanemu resort set among the hills of Ise-shima, Japan.',
    href: 'https://www.aman.com/resorts/amanemu',
  },
  {
    subtitle: 'Kyoto, Japan',
    title: 'Aman Kyoto',
    image: `${CDN}/sites/default/files/styles/property_nearby_large/public/2021-11/Aman_Kyoto_Washigamine_Suite_Square.webp`,
    alt: 'Washigamine Suite at Aman Kyoto surrounded by forest.',
    href: 'https://www.aman.com/resorts/aman-kyoto',
  },
  {
    subtitle: 'Palawan, The Philippines',
    title: 'Amanpulo',
    image: `${CDN}/sites/default/files/styles/property_nearby_large/public/2021-02/210204_AmanHero_Square5_0.webp`,
    alt: 'Aerial view of Amanpulo island and turquoise waters, Palawan.',
    href: 'https://www.aman.com/resorts/amanpulo',
  },
]

export const contact = {
  address: 'The Otemachi Tower, 1-5-6 Otemachi, Chiyoda-ku, 100-0004 Tokyo, Japan',
  addressLines: ['Otemachi Tower', '1-5-6 Otemachi Chiyoda-ku', 'Tokyo', '100-0004', 'Japan'],
  nearestAirport: 'Haneda Airport',
  airportDrive: 'A 40-minute drive',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Aman+Tokyo,+Otemachi+Tower,+Chiyoda+City,+Tokyo',
  phone: '(81) 03 5224 3333',
  reservationPhone: '(81) 03 5224 3345',
  email: 'amantokyo@aman.com',
  reservationUrl: 'https://www.aman.com/aman/reservation?locale=en&chain=16840&hotel=62649&currency=JPY',
  directions: [
    'The Otemachi Tower is connected to five-line Otemachi subway station. Close to Tokyo Station, offering access to the nationwide bullet train network.',
    'Haneda Airport (40-min drive) handles domestic and international flights. Narita Airport (60-min drive) handles international flights.',
  ],
}

export const footerLinks = [
  { label: 'Accommodation', href: 'https://www.aman.com/hotels/aman-tokyo/accommodation/rooms-suites' },
  { label: 'Dining', href: 'https://www.aman.com/hotels/aman-tokyo/dining' },
  { label: 'Wellness', href: 'https://www.aman.com/hotels/aman-tokyo/wellness' },
  { label: 'Experiences', href: 'https://www.aman.com/hotels/aman-tokyo/experiences' },
  { label: 'Exclusive Offers', href: 'https://www.aman.com/hotels/aman-tokyo/exclusives' },
  { label: 'Gallery', href: 'https://www.aman.com/hotels/aman-tokyo/gallery' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/aman' },
  { label: 'Facebook', href: 'https://www.facebook.com/amandestinations' },
  { label: 'Twitter / X', href: 'https://twitter.com/Amanresorts' },
]
