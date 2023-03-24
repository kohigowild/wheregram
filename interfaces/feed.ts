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

export interface RatingType {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export interface FeedListType {
  address: string;
  addressDetail: string;
  createAt: string;
  desc: string;
  feedImageURL: string;
  like: number;
  nickname: string;
  profileURL: string;
  rating: number;
  uid: string;
}

export interface FeedListCard {
  card: FeedListType;
}
