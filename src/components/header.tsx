// Hooks
// import useMediaQuery from '@/hooks/use-media-query';
import { useLocation } from 'react-router';

// Components
import { HomeIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router';
import { LanguageSwitcher } from './language-switcher';
import { ToggleTheme } from './toggle-theme';

// Constants
import { navigation } from '@/lib/navigation';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  // const { isMobile } = useMediaQuery();

  // if (isMobile) {
  //   return (
  //     <header className="border-border bg-background border-b py-4">
  //       <div className="container flex items-center justify-between">
  //         <Link to="/">
  //           <HomeIcon className="size-4" />
  //         </Link>
  //         <div>
  //           <nav className="mt-8">
  //             <ul className="space-y-8 p-4">
  //               {navigation.map((item, index) => (
  //                 <li key={index}>
  //                   <Link to={item.href} className="block">
  //                     <item.icon />
  //                   </Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </nav>
  //           <div className="mt-8 flex flex-col space-y-4 px-4">
  //             <ToggleTheme />
  //             <LanguageSwitcher />
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // }

  return (
    <header className="border-border bg-background border-b py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className={`btn-icon ${currentPath === '/' ? 'bg-secondary' : ''}`}>
          <HomeIcon className="size-4" />
        </Link>
        <nav>
          <ul className="flex gap-x-5">
            {navigation.map((item, index) => {
              const isActive = currentPath === item.href;
              console.log('currentPath:', currentPath, 'item:', item.href);

              return (
                <li key={index} className={`btn-icon ${isActive ? 'bg-secondary' : ''}`}>
                  <Link to={item.href} className="h-full w-full">
                    <item.icon className="size-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-x-5">
          <ToggleTheme />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
