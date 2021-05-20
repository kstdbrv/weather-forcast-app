import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDate } from '../../store/actions/getDate';
import { fetchPastForecast } from '../../store/actions/getWeather';


const SelectDate = () => {

/*   useEffect(() => {
    let dateControl = document.querySelector('input[type="date"]');
    dateControl.valueAsDate = new Date();
  }, []) */

  const dispatch = useDispatch();

  const handleChange = e => { 
    const date = e.target.value;
    const unixDate = new Date(`${date}`).getTime() / 1000;
    dispatch(getDate(unixDate));
    dispatch(fetchPastForecast());
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