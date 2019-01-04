import * as React from 'react';

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
    <nav>
      {links.map(link =>
        <a className={"main-nav-link text-BaseNavGrey hover:text-white relative"} href={link.target} role="menuitem">
          {link.label}
        </a>
      )}
    </nav>
  )
}

export default NavBar;

