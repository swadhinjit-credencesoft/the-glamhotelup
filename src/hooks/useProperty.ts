"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchProperty } from "@/lib/api/fetcher";
import { encodeImageUrl } from "@/lib/data/roomMapper";
import type { ApiProperty, UsePropertyResult } from "@/lib/api/types";

function getDefaultDates() {
  const now = new Date();
  const from = now.toISOString().split("T")[0];
  const next = new Date(now);
  next.setDate(next.getDate() + 1);
  const to = next.toISOString().split("T")[0];
  return { from, to };
}

export function useProperty(): UsePropertyResult {
  const [property, setProperty] = useState<ApiProperty | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { from, to } = getDefaultDates();
      const data = await fetchProperty(from, to);
      setProperty(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch property data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const propertyImages = useMemo(
    () => property?.imageList?.map((img) => encodeImageUrl(img.url)) ?? [],
    [property]
  );

  const roomImages = useMemo(
    () =>
      property?.roomList?.flatMap(
        (room) => room.imageList?.map((img) => encodeImageUrl(img.url)) ?? []
      ) ?? [],
    [property]
  );

  return {
    property,
    rooms: property?.roomList ?? [],
    propertyImages,
    roomImages,
    loading,
    error,
    refetch: load,
  };
}
