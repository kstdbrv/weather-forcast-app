import React, { useEffect } from 'react';
import './select-date.scss';
import { useDispatch } from 'react-redux';
import { getDate } from '../../store/actions/getDate';
import { fetchPastForecast } from '../../store/actions/getWeather';


const SelectDate = () => {

  useEffect(() => {
    let dateControl = document.querySelector('.select-past__date');
    dateControl.setAttribute("onfocus", "(this.type='date')");
    /* onblur="(this.type='text')" */
  }, []);

  const dispatch = useDispatch();

  const handleChange = e => { 
    const date = e.target.value;
    const unixDate = new Date(`${date}`).getTime() / 1000;
    dispatch(getDate(unixDate));
    dispatch(fetchPastForecast());
  }

  return (
    <input
      className="select-past__date"
      type="text"
      placeholder="Select date"
      onChange={handleChange}
    />
  )
}

export default SelectDate;