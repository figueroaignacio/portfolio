// Components
import { ToggleTheme } from '@/components/toggle-theme';
import { SocialMedias } from './social-medias';

export function Hero() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Hi, I'm Ignacio</h1>
        <ToggleTheme />
      </div>
      <p className="text-sm">
        Software Developer based in Argentina, currently open to new opportunities. Feel free to
        contact me below. At the moment, building i7a/ui and Commit Emocional.
      </p>
      <SocialMedias />
    </section>
  );
}
