import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='navbar-brand mx-3'>Employee Management System</div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
