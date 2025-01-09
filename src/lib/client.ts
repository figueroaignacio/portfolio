import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: import.meta.env.VITE_SANITY_CDN === "true",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
});

export default client;
