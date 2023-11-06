import React from 'react';
import '../../pages/Main.css';
import CustomTabPanel from './Tabs';

function Domain() {
  return (
    <div id='domain' className='section-container domain-container'>
      <div className='large-header'>
        Our Domain
      </div>
      <CustomTabPanel />
    </div>
  );
}

export default Domain;