import * as React from 'react';

interface NavBarProps {
  name: string;
}

const NavBar: React.StatelessComponent<NavBarProps> = (props: NavBarProps) => {
  const { name } = props;
  return <div>Hello there {name}!</div>
}

export default NavBar;

