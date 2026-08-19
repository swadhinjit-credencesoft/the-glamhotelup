export const API_CONFIG = {
  baseUrl: "https://api.thehotelmate.co/api/thm",
  propertyId: 3624,
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
