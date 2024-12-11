import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "2rus8ssl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08",
});

export default client;
