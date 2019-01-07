import * as React from 'react';
import ShadowDOM from 'react-shadow';

const styles = require('../styles/index.css');

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
    <ShadowDOM>
      <div>
        <style type="text/css">{styles}</style>
        <nav className={"navbar-main bg-grey-darkest"}>
          {links.map(link =>
            <a className={"nav-item main-nav-link p-2 text-white"} href={link.target} role="menuitem">
              {link.label}
            </a>
          )}
        </nav>
      </div>
    </ShadowDOM>
  )
}

export default NavBar;

