export interface IncidentData {
    id: number | string; // number or string
    title: string;
    incidentType: string;
    description: string;
    image: File  | string | null;
    location: {
      latitude: number;
      longitude: number;
    } | null;
    date: Date | string | null;
  }