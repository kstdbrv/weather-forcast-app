import React from 'react';
import './loader.scss';

const Loader: React.FC = () => (
  
    <div className='loader-centre'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
)

export default Loader;