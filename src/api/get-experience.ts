// Definitions
import { Experience, ExperienceApiResponse } from '@/lib/definitions';

// Endpoint
import { API_ENPOINT } from './endpoint';

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch(`${API_ENPOINT}/experience`);

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: ExperienceApiResponse = await res.json();
  return data.docs;
}
