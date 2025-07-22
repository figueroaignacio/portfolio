import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

// Collections
import Experience from './payload/collections/experience';
import Posts from './payload/collections/posts';
import Projects from './payload/collections/projects';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts, Experience, Projects],
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
});
