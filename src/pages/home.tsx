import { Hero } from '@/sections/hero';
import { LatestPosts } from '@/sections/latest-post';

export function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <LatestPosts />
    </div>
  );
}
