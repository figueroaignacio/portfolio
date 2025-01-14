// Utils
import client from "@/lib/client";

// Queries
import {
  GET_ALL_PROJECTS,
  GET_NOTES,
  GET_NOTE_DETAILS,
  GET_PROJECT_DETAILS,
} from "@/lib/queries";

// Definitions
import { Note, Project } from "./definitions";

export async function getNotes(locale: string): Promise<Note[]> {
  const query = GET_NOTES(locale);

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
  const query = GET_NOTE_DETAILS(slug, locale);

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
  const query = GET_ALL_PROJECTS(locale);

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
  const query = GET_PROJECT_DETAILS(slug, locale);

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
