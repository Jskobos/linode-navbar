import * as React from 'react';

interface Link {

}
interface NavBarProps {
  links: Link[];
}

const NavBar: React.StatelessComponent<NavBarProps> = (props: NavBarProps) => {
  const { links } = props;
  return (
    <div>


    </div>
  )
}

export default NavBar;

