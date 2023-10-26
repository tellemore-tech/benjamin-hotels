export const PreviewData = [
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-01.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    image: 'Dwell-Aparthotels-01.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-belvedere-hotel',
    title: 'The Belvedere Hotel',
    image: 'The-Belvedere-Hotel-02.jpg',
    alt: 'The Belvedere Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'unity-farm-inn-and-spa',
    title: 'Unity Farm, Inn & Spa',
    image: 'Unity-Farm-Inn-Spa-01.jpg',
    alt: 'Unity Farm, Inn and Spa Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-02.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    image: 'Dwell-Aparthotels-02.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-03.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'unity-farm-inn-and-spa',
    title: 'Unity Farm, Inn & Spa',
    image: 'Unity-Farm-Inn-Spa-04.jpg',
    alt: 'Unity Farm, Inn and Spa Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    image: 'Dwell-Aparthotels-03.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-04.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    image: 'Dwell-Aparthotels-04.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-05.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'unity-farm-inn-and-spa',
    title: 'Unity Farm, Inn & Spa',
    image: 'Unity-Farm-Inn-Spa-02.jpg',
    alt: 'Unity Farm, Inn and Spa Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-06.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-belvedere-hotel',
    title: 'The Belvedere Hotel',
    image: 'The-Belvedere-Hotel-01.jpg',
    alt: 'The Belvedere Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-07.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'dwell-aparthotels',
    title: 'Dwell Aparthotels',
    image: 'Dwell-Aparthotels-05.jpg',
    alt: 'Dwell Aparthotels Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'the-smith-hotel',
    title: 'The Smith Hotel',
    image: 'The-Smith-Hotel-08.jpg',
    alt: 'The Smith Hotel Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
  {
    slug: 'unity-farm-inn-and-spa',
    title: 'Unity Farm, Inn & Spa',
    image: 'Unity-Farm-Inn-Spa-03.jpg',
    alt: 'Unity Farm, Inn and Spa Kingston Ontario',
    settings: {
      focalPoint: ['100%', '40%'],
    },
  },
];

export function useGetPageData(i: string) {
  const property = PreviewData.find(function (obj) {
    return obj.slug === i;
  });
  if (property) {
    return { property };
  }
}
