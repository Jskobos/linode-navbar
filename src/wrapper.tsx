import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavBar, { Link } from './components/NavBar';

export const showNavBar = (element: any, links: Link[]) => {
  ReactDOM.render(<NavBar links={links} />, element);
};