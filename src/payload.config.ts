// Payload
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

// Collections
import Experience from './payload/collections/experience';
import Posts from './payload/collections/posts';
import Projects from './payload/collections/projects';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts, Experience, Projects],
  secret: process.env.PAYLOAD_SECRET || '',
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  cors: {
    origins: ['http://localhost:3000', 'https://ignaciofigueroa.vercel.app'],
    headers: ['x-custom-header'],
  },
});
