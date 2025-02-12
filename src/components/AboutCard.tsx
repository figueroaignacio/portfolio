interface AboutCardProps {
  title: string;
  description: string;
}

export function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-card border border-border p-6 rounded-md mt-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src="https://github.com/figueroaignacio.png"
          alt="Ignacio Figueroa"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">Ignacio Figueroa</h3>
          <p className="text-xs text-gray-500">
            <a
              href="https://github.com/figueroaignacio"
              target="_blank"
              rel="noreferrer"
            >
              figueroaignacio
            </a>
          </p>
        </div>
      </div>
      <div className="py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <div className="flex space-x-6">
          <button className="text-gray-500 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs font-medium">Like</span>
          </button>
          <button className="text-gray-500 hover:text-blue-500 transition-colors duration-200 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs font-medium">Comment</span>
          </button>
          <button className="text-gray-500 hover:text-green-500 transition-colors duration-200 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="text-xs font-medium">Share</span>
          </button>
        </div>
        <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold">
          <a
            href="https://www.linkedin.com/in/figueroa-ignacio/"
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
        </button>
      </div>
    </div>
  );
}
