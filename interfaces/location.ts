export interface LocationType {
  lat: number;
  lng: number;
}

export interface AddressType {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  formState: boolean;
  setFormState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Position {
  position: LocationType;
  setPosition: React.Dispatch<React.SetStateAction<LocationType | null>>;
}
