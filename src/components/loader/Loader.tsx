import React from 'react';
import './loader.scss';

const Loader:React.FC = () => (
  
  <React.Fragment>
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
  </React.Fragment>
)

export default Loader;