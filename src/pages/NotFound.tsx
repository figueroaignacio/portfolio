// Components
import { Seo } from "@/components/Seo";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Seo
        description="The page you are looking for does not exists. Or it does?, God knows"
        title="404 - Page Not Found"
      />
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-4 mb-8">
          The page you are looking for does not exists. Or it does?, God knows
        </p>
        <Link to="/" className="px-6 py-3 border border-border rounded-2xl">
          Go Back
        </Link>
      </div>
    </div>
  );
}
