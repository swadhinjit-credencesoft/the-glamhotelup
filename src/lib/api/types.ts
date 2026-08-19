export interface ApiImage {
  id: number | null;
  name: string;
  url: string;
  description: string | null;
  mainImage: boolean;
}

export interface ApiRatePlan {
  code: string;
  name: string;
  effectiveDate: string;
  expiryDate: string;
  description: string | null;
  active: boolean;
  amount: number;
  roomId: number;
  currencyCode: string;
  minimumOccupancy: number;
  maximumOccupancy: number;
  extraChargePerPerson: number;
  minimumLengthOfStay: number;
  maximumLengthOfStay: number;
  status: string;
}

export interface ApiRateAvailability {
  id: number;
  price: number;
  totalNoRooms: number;
  noOfBooked: number;
  noOfAvailable: number;
  noOfOnHold: number;
  date: string;
  roomName: string;
  propertyName: string;
  roomId: number;
  propertyId: number;
  status: string;
  restriction: string;
  roomRatePlans: ApiRatePlan[];
}

export interface ApiRoom {
  id: number;
  name: string;
  description: string;
  propertyId: number;
  roomOnlyPrice: number;
  minimumOccupancy: number;
  maximumOccupancy: number;
  extraChargePerPerson: number | null;
  noOfRooms: number;
  size: string | null;
  smoking: string | null;
  imageList: ApiImage[];
  roomFacilities: unknown[];
  ratesAndAvailabilityDtos: ApiRateAvailability[];
  shared: boolean;
}

export interface ApiPropertyService {
  id: number | null;
  organisationId: number;
  name: string;
  description: string | null;
  logoUrl: string | null;
  imageUrl: string | null;
  businessType: string;
  serviceType: string;
}

export interface ApiAddress {
  country: string;
  postcode: string;
  streetNumber: string;
  streetName: string;
  suburb: string;
  city: string;
  state: string;
  locality: string;
  addressLine1: string | null;
  addressLine2: string | null;
}

export interface ApiProperty {
  id: number;
  name: string;
  shortName: string;
  email: string;
  mobile: string;
  whatsApp: string;
  address: ApiAddress;
  propertyStatus: string;
  localCurrency: string;
  latitude: string;
  longitude: string;
  businessType: string;
  businessDescription: string;
  roomList: ApiRoom[];
  imageList: ApiImage[];
  propertyServicesList: ApiPropertyService[];
  minimumRoooPrice: number;
  gstNumber: string;
  placeId: string;
}

export interface UsePropertyResult {
  property: ApiProperty | null;
  rooms: ApiRoom[];
  propertyImages: string[];
  roomImages: string[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}
