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
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface photoUpload {
  imageURL: string;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
}
