import { StaticImageData } from 'next/image';

export interface FeedData {
  id: number;
  name: string;
  location: string;
  img: StaticImageData;
  like: number;
  rating: string;
  desc: string;
}

export interface FeedDataArray {
  card: FeedData;
}
