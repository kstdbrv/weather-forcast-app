import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDate } from '../../store/actions/getDate';


const SelectDate = () => {

/*   useEffect(() => {
    let dateControl = document.querySelector('input[type="date"]');
    dateControl.valueAsDate = new Date();
  }, []) */

  const dispatch = useDispatch();

  const handleChange = e => { 
    let date = e.target.value;

    dispatch(getDate(date));
  }

  return (
    <input
      className="card-forcast__select"
      type="date"
      onChange={handleChange}
    />
  )
}

export default SelectDate;