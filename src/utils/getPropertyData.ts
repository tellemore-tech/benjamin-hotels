export const propertyData = [
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    url: 'http://www.thesmithhotel.ca',
    description:
      '<p>A modern boutique hotel in a 19th century gothic church.</p><p>10 Lofts featuring full kitchens, open-concept living spaces, and loft bedrooms.</p>',
    image: 'The-Smith-Hotel-08.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['center', 'center'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    url: 'http://www.dwellaparthotels.ca',
    description:
      '<p>Apartment hotels for short or extended stays.</p><p>15 fully-furnished apartments with hotel perks and all the comforts of home. </p>',
    image: 'Dwell-Aparthotels-02.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['center', 'center'],
    },
  },
  {
    slug: 'the-belvedere-hotel',
    title: 'The Belvedere Hotel',
    description:
      '<p>A 200-year old art deco mansion turned eclectic-style hotel.</p><p>25 rooms, a wine & snack bar, meeting space, and thermal spa.</p>',
    image: 'The-Belvedere-Hotel-02.jpg',
    alt: 'The Belvedere Hotel Kingston Ontario',
    settings: {
      focalPoint: ['center', 'center'],
    },
  },
  {
    slug: 'unity-farm-inn-and-spa',
    title: 'Unity Farm, Inn, & Spa',
    description:
      '<p>A 35-acre luxury rural retreat.</p><p>Hotel & cabin accommodations, restaurant, winery, spa, and more.</p>',
    image: 'Unity-Farm-Inn-Spa-02.jpg',
    alt: 'Unity Farm, Inn, & Spa Kingston Ontario',
    settings: {
      focalPoint: ['center', 'center'],
    },
  },
];

export function useGetPageData(i: string) {
  const property = propertyData.find(function (obj) {
    return obj.slug === i;
  });
  if (property) {
    return { property };
  }
}
