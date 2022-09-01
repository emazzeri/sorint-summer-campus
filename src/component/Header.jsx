import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="app-header">
      <div className='app-header__container'>
        {title}
      </div>
    </header>
  );
};

export default Header;