export const propertyData = [
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    url: 'http://www.thesmithhotel.ca',
    description:
      '<p>A modern boutique hotel</br>in a 19th century gothic church.</p>',
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
    description: '<p>Apartment hotels for short</br>or extended stays.</p>',
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
      '<p>A 200-year old art deco mansion</br>turned eclectic-style hotel.</p><p><em>Coming Soon</em></p>',
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
      '<p>A 35-acre luxury</br> rural retreat.</p><p><em>Coming Soon</em></p>',
    image: 'Unity-Farm-Inn-Spa-02.jpg',
    alt: 'Unity Farm, Inn, & Spa Kingston Ontario',
    settings: {
      focalPoint: ['bottom 10%', 'center'],
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
