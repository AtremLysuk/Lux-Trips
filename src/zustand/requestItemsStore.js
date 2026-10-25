import { create } from 'zustand';

export const useRequestItemsStore = create((set, get) => ({
  booksItems: [
    {
      id: 1,
      imgUrl: '/images/book-cards/cars.webp',
      title: 'Supercars',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 2,
      imgUrl: '/images/book-cards/hotels.webp',
      title: 'Hotels',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 3,
      imgUrl: '/images/book-cards/villas.webp',
      title: 'Villas',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 4,
      imgUrl: '/images/book-cards/yahts.webp',
      title: 'Yachts',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 5,
      imgUrl: '/images/book-cards/helicopter.webp',
      title: 'Private Helicopter',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 6,
      imgUrl: '/images/book-cards/jet.webp',
      title: 'Private Jet',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
  ]
}));
