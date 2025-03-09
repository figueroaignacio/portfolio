export function OpengraphImage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-card">
      <div className="w-[1200px] h-[630px] overflow-hidden relative">
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-16 text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg">
            <img
              src="https://github.com/figueroaignacio.png"
              className="rounded-full"
            />
          </div>

          <h1 className="text-white text-8xl font-bold mb-6">
            Ignacio Figueroa
          </h1>

          <div className="h-1 w-40 bg-white opacity-30 mb-6"></div>

          <h2 className="text-white text-4xl font-light mb-12">
            Fullstack Developer
          </h2>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
    </div>
  );
}
