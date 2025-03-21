import { LinkProps, Link as RouterLink } from "react-router";

export function TransitionLink({ to, children, ...rest }: LinkProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (document.startViewTransition) {
      event.preventDefault();
      document.startViewTransition(() => {
        window.history.pushState({}, "", to.toString());

        const navigationEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navigationEvent);
      });
    }
  };

  return (
    <RouterLink to={to} onClick={handleClick} {...rest}>
      {children}
    </RouterLink>
  );
}
