// Definitions
import { Education, EducationApiResponse } from '@/lib/definitions';

// Endpoint
import { API_ENPOINT } from './endpoint';

export async function getEducation(): Promise<Education[]> {
  const res = await fetch(`${API_ENPOINT}/education`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: EducationApiResponse = await res.json();
  return data.docs;
}
