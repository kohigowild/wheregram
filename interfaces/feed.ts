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
  docId: string;
  address: string;
  addressDetail: string;
  desc: string;
  feedImageURL: string;
  like: number;
  nickname: string;
  profileURL: string;
  rating: number;
  uid: string;
  keyword: string[];
}

export interface FeedListCard {
  card: FeedListType;
  comment: boolean;
}

export interface FeedListArray {
  feedList: FeedListType[];
}

export interface DocId {
  docId: string;
}

export interface CommentType {
  uid: string;
  nickname: string;
  comment: string;
  commentId: string;
}

export interface KeywordType {
  keyword: string[];
  setKeyword: React.Dispatch<React.SetStateAction<string[]>>;
}
