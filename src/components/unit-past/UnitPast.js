import React from 'react';
import { useSelector } from 'react-redux';
import './unit-past.scss';


const UnitPast = () => {
  
  const data = useSelector(state => state.pastData);
  console.log(data)

  let day = data.current.dt;
  let date = new Date();
  date.setTime(day);
  let currentDay = date.getDay() + ' ' + date.getMonth() + ' ' + date.getFullYear();

  function unixtime2YYMMDD(unixtime) {
    var milliseconds = unixtime * 1000,
        dateObject = new Date(milliseconds),
      temp = [];
    
    temp.push(dateObject.getUTCDay());
    temp.push(dateObject.getUTCMonth());
    temp.push(dateObject.getUTCFullYear().toString().slice(2));

    return temp.join("-");
  }
  let www = unixtime2YYMMDD(data.current.dt);

  return (
    <div className="unit-past">
      <p className="unit-past__date">
        { www }
      </p>
      <img src="" className="unit-past__image" />
      <p className="unit-past__tmp">
        { data.current.temp }
      </p>
    </div>
  )
}

export default UnitPast;