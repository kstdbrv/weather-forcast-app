import React, { useEffect, useRef } from 'react';
import './select-date.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import fiveDaysAgo from '../../utils/to5DaysAgo';
import oneDayAgo from '../../utils/to1DayAgo';
import { useActions } from '../../hooks/useActions';


const SelectDate:React.FC = () => {

  const { unixDate } = useTypedSelector((state) => state.pastCardInfo);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const input:HTMLInputElement | null = inputRef.current;
    const wrapper:HTMLDivElement | null = wrapperRef.current;

    const addClass = () => {
      wrapper!.classList.add('select-past__hide-placeholder');
    }

    const removeClass = () => {
      wrapper!.classList.remove('select-past__hide-placeholder');
    }

    input!.addEventListener('focus', addClass);

    if (!unixDate) {
      input!.addEventListener('blur', removeClass);
    }
    
    return () => {
      input!.removeEventListener('focus', addClass);
      input!.removeEventListener('blur', removeClass);
    }

  }, [unixDate]);

  const { getDate, fetchPastForecast } = useActions();

  const setDate = (e:React.ChangeEvent<HTMLInputElement>) => {

    const date = e.target.value;
    const unixDate = new Date(`${date}`).getTime() / 1000;

    if (unixDate > Date.now() / 1000) return;

    getDate(unixDate);
    fetchPastForecast();
  };

  const cls = [
    'select-past__date',
    unixDate === null ? null : 'select-past__date--active',
  ];

  return (
    <div
      className="select-past__wrapper"
      ref={ wrapperRef }
    >
      <input
        className={ cls.join(' ').trim() }
        type="date"
        ref={ inputRef }
        onChange={setDate}
        min={fiveDaysAgo}
        max={oneDayAgo}
      />
      <p className="select-past__placeholder">
        Select date
      </p>
    </div>
  )
}

export default SelectDate;