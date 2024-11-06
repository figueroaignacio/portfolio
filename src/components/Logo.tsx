// Components
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="bg-primary-foreground py-2 px-4 rounded-md font-bold text-xl"
    >
      n.
    </Link>
  )
}