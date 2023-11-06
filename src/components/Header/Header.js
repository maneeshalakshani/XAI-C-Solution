import React from 'react';
import '../../pages/Main.css';

function Header() {
  return (
    <div className='Main-Container' id='home'>
      <div className='image-container'>
        <img 
          className='image'
          src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg' 
          alt='image'
        />
      </div>
      <div className='black-container'>
        <div className='header-text'>
          Counterfatual XAI Solution
        </div>
      </div>
    </div> 
  );
}

export default Header;