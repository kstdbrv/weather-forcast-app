import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './select-date.scss';
import { useDispatch } from 'react-redux';
import { getDate } from '../../store/actions/getDate';
import { fetchPastForecast } from '../../store/actions/getWeather';
import { ICardInfo } from '../../interfaces'


const SelectDate:React.FC = () => {

  const data = useSelector((state:ICardInfo) => state.pastCardInfo.unixDate);

  useEffect(() => {

    const input = document.querySelector('.select-past__date');
    const wrapper = document.querySelector('.select-past__wrapper');

    const addClass = () => {
      wrapper!.classList.add('select-past__hide-placeholder');
    }

    const removeClass = () => {
      wrapper!.classList.remove('select-past__hide-placeholder');
    }

    input!.addEventListener('focus', addClass);

    if (!data) {
      input!.addEventListener('blur', removeClass);
    }
    
    return () => {
      input!.removeEventListener('focus', addClass);
      input!.removeEventListener('blur', removeClass);
    }

  }, [data]);

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
    <div className="select-past__wrapper">
      <input
        className={ cls.join(' ') }
        type="date"
        onChange={ handleChange }
      />
      <p className="select-past__placeholder">
        Select date
      </p>
    </div>
  )
}

export default SelectDate;