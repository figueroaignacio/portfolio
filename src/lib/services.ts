import client from "@/lib/client";
import { QUERY } from "@/lib/queries";
import { Note, Project } from "./definitions";

export async function getNotes(locale: string): Promise<Note[]> {
  const query = QUERY.NOTE(locale);

  try {
    const notes = await client.fetch<Note[]>(query);
    return notes;
  } catch (error) {
    throw new Error(
      `Failed to fetch notes: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getNoteDetails(
  slug: string,
  locale: string
): Promise<Note | null> {
  const query = QUERY.NOTE_DETAILS(slug, locale);

  try {
    const note = await client.fetch<Note | null>(query);
    return note;
  } catch (error) {
    throw new Error(
      `Failed to fetch note details: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getProjects(locale: string): Promise<Project[]> {
  const query = QUERY.PROJECT(locale);

  try {
    const projects = await client.fetch<Project[]>(query);
    return projects;
  } catch (error) {
    throw new Error(
      `Failed to fetch notes: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getProjectDetails(
  slug: string,
  locale: string
): Promise<Project | null> {
  const query = QUERY.PROJECT_DETAILS(slug, locale);

  try {
    const projects = await client.fetch<Project | null>(query);
    return projects;
  } catch (error) {
    throw new Error(
      `Failed to fetch note details: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
