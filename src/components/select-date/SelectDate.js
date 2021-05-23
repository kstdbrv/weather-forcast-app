import React, { useEffect } from 'react';
import './select-date.scss';
import { useDispatch } from 'react-redux';
import { getDate } from '../../store/actions/getDate';
import { fetchPastForecast } from '../../store/actions/getWeather';


const SelectDate = ({ data }) => {

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

  const cls = [
    'select-past__date',
    data === null ? null : 'select-past__date--active',
  ];

  return (
    <input
      className={ cls.join(' ') }
      type="text"
      placeholder="Select date"
      onChange={ handleChange }
    />
  )
}

export default SelectDate;