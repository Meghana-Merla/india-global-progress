export interface MapRegion {
  id: string;
  name: string;
  coordinates: [number, number];
  metricValue: number;
  category: string;
}

export interface MapMarker {
  id: string;
  title: string;
  lat: number;
  lng: number;
  description?: string;
}
