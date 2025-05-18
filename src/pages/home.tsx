import { Contact } from '@/sections/contact';
import { Hero } from '@/sections/hero';
import { LatestPosts } from '@/sections/latest-posts';
import { TechUsed } from '@/sections/tech-used';

export function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <LatestPosts />
      <Contact />
      <TechUsed />
    </div>
  );
}
