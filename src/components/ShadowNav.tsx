import * as React from 'react';
import ShadowDOM from 'react-shadow';

import NavBar, { Link } from './NavBar';

export interface NavBarProps {
  links: Link[];
}

export interface State {
  open: boolean;
}

export class ShadowNav extends React.Component<NavBarProps, State> {
  state = {
    open: false
  }

  render() {
    const { links } = this.props;

    return (
      <ShadowDOM>
        <div>
          <NavBar links={links} />
        </div>
      </ShadowDOM>
    )
  }
}

export default ShadowNav;

