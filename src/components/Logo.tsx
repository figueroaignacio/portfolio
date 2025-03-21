// Components
import { Link } from "react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="bg-primary-foreground py-2 px-4 rounded-2xl font-bold text-xl"
    >
      n.
    </Link>
  );
}
