export const API_CONFIG = {
  baseUrl:
    process.env.NEXT_PUBLIC_HOTELMATE_API_BASE_URL ??
    "https://api.thehotelmate.co/api/thm",
  propertyId: Number(process.env.NEXT_PUBLIC_HOTELMATE_PROPERTY_ID ?? 3624),
} as const;

export function buildAvailabilityUrl(
  fromDate: string,
  toDate: string,
  noOfRooms = 1,
  noOfPersons = 1
): string {
  const { baseUrl, propertyId } = API_CONFIG;
  return `${baseUrl}/checkAvailability/${propertyId}?fromDate=${fromDate}&toDate=${toDate}&noOfRooms=${noOfRooms}&noOfPersons=${noOfPersons}`;
}