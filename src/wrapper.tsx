import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavBar from './components/NavBar';

export const showNavBar = (element: any, name: string) => {
  ReactDOM.render(<NavBar name={name} />, element);
};