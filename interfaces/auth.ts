export interface BtnProps {
  event: () => void;
  props: string;
  disabled: boolean;
}

export interface InputProps {
  item: InputInfo;
}

export interface InputInfo {
  id: number;
  placeholder: string;
  type: string;
  value: string;
  setValue: (str: string) => void;
}

export interface ErrorMsgType {
  errorMsg: string;
}

export interface UserInfo {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
}

export interface photoUpload {
  imageURL: string;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
}

export interface profileProps {
  nickname: string;
  email: string;
  photoURL: string | null;
}
