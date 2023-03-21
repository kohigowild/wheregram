export interface LocationType {
  lat: number;
  lng: number;
}

export interface Position {
  position: LocationType;
  setPosition: React.Dispatch<React.SetStateAction<LocationType | null>>;
}
