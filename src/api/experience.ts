import { Experience, ExperienceApiResponse } from '@/lib/definitions';

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch('http://localhost:3000/api/experience');

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: ExperienceApiResponse = await res.json();
  return data.docs;
}
