// Components
import { SocialMedias } from './social-medias';

export function Hero() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl">Hi, I'm Ignacio</h1>
      </div>
      <p className="text-sm">
        Software Developer based in Argentina, currently open to new opportunities. Feel free to
        reach out. At the moment, building i7a/ui and Commit Emocional.
      </p>
      <SocialMedias />
    </section>
  );
}
