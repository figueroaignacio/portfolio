// Hooks
import { useLocation } from 'react-router';

// Components
import { Link } from 'react-router';

// Constants
import { navigation } from '@/lib/navigation';

export function HeaderLinks() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className="flex gap-x-7">
      {navigation.map((item, index) => {
        const isActive = currentPath === item.href;
        return (
          <li key={index}>
            <Link
              to={item.href}
              className={`btn-icon ${isActive ? 'border-border text-foreground' : 'text-muted-foreground'}`}
            >
              <item.icon className="hover:text-foreground size-5 transition-colors duration-100" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
