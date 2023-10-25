import { ReactNode } from 'react';

export type WrapperProps = {
  children?: ReactNode;
  isDesktop?: boolean;
};

export type SimpleCardProps = {
  isDesktop?: boolean;
  slug: string;
  title: string;
  description?: string;
  url?: string;
  image?: string;
  alt?: string;
  settings?: {
    width?: string;
    height?: string;
    focalPoint?: string[];
  };
};
