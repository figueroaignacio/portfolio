interface AboutCardProps {
  title: string;
  description: string;
}

export function AboutCard() {
  return (
    <div className="border border-border p-6 rounded-md mt-4 bg-card">
      <div className="flex items-center space-x-2">
        <img
          src="https://github.com/figueroaignacio.png"
          alt="Gif"
          className="size-10 rounded-full"
        />
        <h3>Ignacio Figueroa</h3>
      </div>
      <div className="px-12 py-6">
        <h3 className="font-bold">About me</h3>
        <p className="text-muted-foreground">
          I'm Ignacio Figueroa, Web Developer specializing in Frontend
          Development. I craft digital experiences that forge meaningful
          connections between technology and users.
        </p>
      </div>
    </div>
  );
}
