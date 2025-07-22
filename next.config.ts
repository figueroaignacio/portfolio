import { withPayload } from '@payloadcms/next/withPayload';
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const baseConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
};

const withNextIntl = createNextIntlPlugin();

const config = withPayload(withNextIntl(baseConfig));

export default config;
