import { buildAvailabilityUrl } from "./config";
import type { ApiProperty } from "./types";

export async function fetchProperty(
  fromDate: string,
  toDate: string,
  noOfRooms = 1,
  noOfPersons = 1
): Promise<ApiProperty> {
  const url = buildAvailabilityUrl(fromDate, toDate, noOfRooms, noOfPersons);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
