import React from 'react';
import image from '../../assets/images/placeholder.svg';

const Placeholder: React.FC = () => {
  return (
    <React.Fragment>
      <img
       className="card-forcast__placeholder"
       src={image}
       alt="картинка вместо погоды"
      />
      <p className="card-forcast__text">
        Fill in all the fields and
        the weather will be displayed
      </p>    
    </React.Fragment>
  )
}

export default Placeholder;