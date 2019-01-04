import * as React from 'react';
import '../styles/index.css';

export interface Link {
  target: string;
  label: string;
}
interface NavBarProps {
  links: Link[];
}

const NavBar: React.StatelessComponent<NavBarProps> = (props: NavBarProps) => {
  const { links } = props;
  return (
    <nav className={"navbar-main bg-grey-darkest"}>
      {links.map(link =>
        <a className={"nav-item main-nav-link"} href={link.target} role="menuitem">
          {link.label}
        </a>
      )}
    </nav>
  )
}

export default NavBar;

