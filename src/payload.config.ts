import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [],
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
});
