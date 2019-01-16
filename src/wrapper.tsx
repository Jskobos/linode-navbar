import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ShadowNav from './components/ShadowNav';
import { Link } from './components/NavBar'

export const showNavBar = (element: any, links: Link[]) => {
  ReactDOM.render(<ShadowNav links={links} />, element);
};