import * as React from 'react';
import ShadowDOM from 'react-shadow';

const styles = require('../styles/index.css');
const navStyles = require('../../repos/linode-hugo-theme/srcCSS/components/2_molecules/mobile-nav.css');

export interface Link {
  target: string;
  label: string;
  active: boolean;
}

interface NavBarProps {
  links: Link[];
}

interface State {
  open: boolean;
}

export class NavBar extends React.Component<NavBarProps, State> {
  state = {
    open: false
  }

  render() {
    const { links } = this.props;
    const { open } = this.state;

    const toggleMenu = () => {
      this.setState({
        open: !this.state.open
      })
    }

    const pathName = document.location.pathname;

    return (
      <ShadowDOM>
        <div>
          <style type="text/css">{styles}</style>
          <style type="text/css" media="screen">{navStyles}</style>
          <div className="header-wrapper bg-light-black">
            <header className="header max-w-3xl mx-auto py-2 px-4 md:px-8 flex flex-wrap items-center justify-between">
              <div className="logo">
                <a href="https://developers.linode.com/" className="flex items-center">
                  <svg width="125" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 230 90" version="1.1" viewBox="0 0 230 90">
                    <title>Linode</title>
                    <g display="none">
                      <rect x="-178.6" y="-75.1" width="606.3" height="248.3" display="inline" fill="#7D1416"/>
                    </g>
                    <g fill="#fff">
                      <path d="m93.8 27.8l5.8-1.4v28c0 3.1 0.9 4.9 2.7 5.5-0.9 1.7-2.4 2.6-4.6 2.6-2.6 0-4-1.8-4-5.5v-29.2z"/>
                      <path d="m108.4 62v-20.2h-3.2v-4.8h9.1v25h-5.9zm3-34.6c0.9 0 1.7 0.3 2.4 1s1 1.5 1 2.4-0.3 1.7-1 2.4-1.5 1-2.4 1-1.7-0.3-2.4-1-1-1.5-1-2.4 0.3-1.7 1-2.4 1.5-1 2.4-1z"/>
                      <path d="m137.1 62v-14.4c0-2.1-0.4-3.7-1.2-4.6-0.8-1-2.1-1.5-4-1.5-0.9 0-1.8 0.2-2.7 0.7-1 0.5-1.7 1.1-2.3 1.8v18h-5.8v-24.9h4.2l1.1 2.3c1.6-1.9 3.9-2.8 7-2.8 3 0 5.3 0.9 7 2.7s2.6 4.3 2.6 7.4v15.3h-5.9z"/>
                      <path d="m147.5 49.5c0-3.8 1.1-6.9 3.3-9.3s5.1-3.6 8.7-3.6c3.8 0 6.7 1.1 8.8 3.4s3.1 5.4 3.1 9.4-1.1 7.1-3.2 9.5c-2.1 2.3-5 3.5-8.8 3.5s-6.7-1.2-8.8-3.5c-2-2.4-3.1-5.5-3.1-9.4zm6.1 0c0 5.5 2 8.2 5.9 8.2 1.8 0 3.2-0.7 4.3-2.1s1.6-3.5 1.6-6.1c0-5.4-2-8.1-5.9-8.1-1.8 0-3.3 0.7-4.3 2.1-1.1 1.4-1.6 3.4-1.6 6z"/>
                      <path d="m192.1 62v-1.5c-0.5 0.5-1.3 1-2.4 1.4s-2.3 0.6-3.6 0.6c-3.5 0-6.2-1.1-8.2-3.3s-3-5.3-3-9.2 1.1-7.1 3.4-9.6 5.1-3.7 8.6-3.7c1.9 0 3.6 0.4 5.2 1.2v-10l5.8-1.4v35.5h-5.8zm0-19c-1.2-1-2.5-1.5-3.9-1.5-2.3 0-4.1 0.7-5.4 2.1s-1.9 3.5-1.9 6.1c0 5.2 2.5 7.8 7.5 7.8 0.6 0 1.2-0.2 2.1-0.5 0.8-0.3 1.3-0.7 1.6-1v-13z"/>
                      <path d="m226 51.3h-17.8c0.1 2 0.8 3.5 2 4.6 1.3 1.1 2.9 1.7 5.1 1.7 2.6 0 4.7-0.7 6-2.1l2.3 4.4c-2 1.7-5.1 2.5-9.2 2.5-3.8 0-6.8-1.1-9-3.3s-3.3-5.3-3.3-9.3c0-3.9 1.2-7.1 3.6-9.5s5.3-3.6 8.7-3.6c3.6 0 6.5 1.1 8.7 3.2 2.2 2.2 3.3 4.9 3.3 8.2 0.1 0.7-0.1 1.7-0.4 3.2zm-17.6-4.4h12.2c-0.4-3.6-2.4-5.5-6-5.5-3.3 0.1-5.4 1.9-6.2 5.5z"/>
                    </g>
                    <path d="m65.9 47.4l-1 11.5-3.3-2.3 0.4-5.8v-0.1-0.1l-0.1-0.1-0.1-0.1-7.1-4.7 0.1-5.1 11.1 6.8zm-17.4 12.5l-5.1-3.9v0.9c0 0.2-0.1 0.4-0.2 0.5l-3.8 2.6 4.2 3.4 0.1 0.1v0.1 0.1l0.2 4 4.7 3.9-0.1-11.7zm-32.1 5l2.4 11.5 9.9 10.5-1.7-11.6-10.6-10.4zm9.3 1.7l-2.4-16.1-12-10 3.2 15.6 11.2 10.5zm-3.8-26l-3.3-22.8-13.8-8.6 4.5 21.5 12.6 9.9z" fill="#004712"/>
                    <path d="m75.7 41.2l-1.5 10.9-8.2 6.6 1-11.2 8.7-6.3zm-26.1 18.7l0.1 11.8 10.5-8.4 0.7-11.5-11.3 8.1zm-6.8 4.8l-14.8 10.6 1.8 12.2 13.4-10.7-0.4-12.1zm-0.4-8l-0.7-16-17.3 9.9 2.4 16.6 15.6-10.5zm-1.1-25.3l-0.9-21.6-20.8 8 3.4 23.2 18.3-9.6z" fill="#00B259"/>
                    <path d="m76.9 40v0-0.2s0-0.1-0.1-0.1c0 0-0.1 0-0.1-0.1l-12-6.7c-0.2-0.1-0.4-0.1-0.5 0l-10.2 6.2h-0.1v0.1 0.1 0.1 0.1 0.1 0.1l-0.1 5.4-4.1-2.7c-0.2-0.1-0.4-0.1-0.6 0l-6.1 3.4-0.3-6v-0.1-0.1-0.1-0.1-0.1h-0.1l-6.2-4.1 5.8-3c0.2-0.1 0.3-0.3 0.3-0.5l-1.1-22.7v-0.1s0-0.1-0.1-0.1c0 0 0-0.1-0.1-0.1l-15.7-7.6c-0.1-0.1-0.2-0.1-0.3-0.1l-21.3 6.6s-0.1 0-0.1 0.1c0 0-0.1 0-0.1 0.1v0.1 0.1 0.1 0.1 0.1 0.1l4.7 22.9c0 0.1 0.1 0.2 0.2 0.3l6.4 5-4.7 2.2s-0.1 0-0.1 0.1c0 0 0 0.1-0.1 0.1v0.1 0.1l3.6 17.2c0 0.1 0.1 0.2 0.2 0.3l4.5 4.2-3 1.8-0.1 0.1s0 0.1-0.1 0.1v0.1 0.2l2.8 13.3c0 0.1 0.1 0.2 0.1 0.3l10.9 12h0.1s0.1 0 0.1 0.1h0.2 0.2 0.1l14.4-11.5c0.1-0.1 0.2-0.3 0.2-0.4l-0.3-7.9 4.8 4s0.1 0 0.1 0.1h0.2 0.2 0.1l11.6-9.2c0.1-0.1 0.2-0.2 0.2-0.4l0.4-5.8 3.5 2.4h0.1 0.1 0.2s0.1 0 0.1-0.1l9.4-7.5c0.1-0.1 0.2-0.2 0.2-0.3l1.7-12.3v0zm-10.9 18.7l1-11.2 8.8-6.3-1.5 10.9-8.3 6.6zm-4.4-2.1l0.4-5.8v-0.1-0.1l-0.1-0.1-0.1-0.1-7.1-4.7 0.1-5.1 11.1 6.9-1 11.5-3.3-2.4zm-1.5 6.7l-10.5 8.4-0.1-11.8 11.3-8.1-0.7 11.5zm-16.8 13.5l-13.5 10.7-1.8-12.2 14.7-10.5 0.6 12zm-24.6-0.4l-2.4-11.5 10.7 10.4 1.7 11.6-10-10.5zm-0.2-58.6l3.3 22.8-12.5-9.9-4.5-21.5 13.7 8.6zm21.9-8l0.9 21.6-18.3 9.6-3.4-23.2 20.8-8zm2 46.9l-15.6 10.4-2.4-16.6 17.3-9.9 0.7 16.1zm-19.1-6.1l2.4 16.1-11.2-10.6-3.2-15.6 12 10.1zm20.5 13.1v-0.1-0.1l-0.1-0.1-4.2-3.4 3.8-2.6c0.2-0.1 0.2-0.3 0.2-0.5v-0.9l5.1 3.9 0.1 11.8-4.7-3.9-0.2-4.1z"/>
                  </svg>
                </a>
              </div>
              <a aria-label="mobile menu button" id="menu-icon" className={`menu-icon ${open ? 'open' : ''}`} href="javascript:;" onClick={toggleMenu}>
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
              </a>
              <nav className={`main-nav ${open ? 'open' : ''}`} role="menu">
                {links.map(link =>
                  <a className={`${'main-nav-link text-BaseNavGrey hover:text-white relative no-underline'} ${pathName === link.target && 'active'}`} href={link.target} role="menuitem">
                    {link.label}
                  </a>
                )}
              </nav>
            </header>
          </div>
        </div>
      </ShadowDOM>
    )
  }
}

export default NavBar;

