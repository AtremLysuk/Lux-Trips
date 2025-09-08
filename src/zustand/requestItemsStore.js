import { create } from 'zustand';

export const useRequestItemsStore = create((set, get) => ({
  booksItems: [
    {
      id: 1,
      imgUrl: '/images/book-cards/cars.png',
      title: 'Supercars',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 2,
      imgUrl: '/images/book-cards/hotels.png',
      title: 'Hotels',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 3,
      imgUrl: '/images/book-cards/villas.png',
      title: 'Villas',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 4,
      imgUrl: '/images/book-cards/yahts.png',
      title: 'Yachts',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 5,
      imgUrl: '/images/book-cards/helicopter.png',
      title: 'Private Helicopter',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
    {
      id: 6,
      imgUrl: '/images/book-cards/jet.png',
      title: 'Private Jet',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/request',
    },
  ]
}));
