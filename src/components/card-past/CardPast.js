import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import SelectCityPast from '../select-city-past/selectCityPast';
import SelectDate from '../select-date/SelectDate';
import UnitPast from '../unit-past/UnitPast';
import Placeholder from '../placeholder/Placeholder'

const CardPast = () => {

  const loading = useSelector(state => state.app.loadingPast);
  const data = useSelector(state => state.pastData);
  const { cityLocation } = useSelector(state => state.pastCardInfo);
  const { unixDate } = useSelector(state => state.pastCardInfo);

  return (
    <article className="card-forcast card-forcast--past">
      <h3 className="card-forcast__title card-forcast__title--left">
        Forecast for a Date in the Past
      </h3>
      <form className="card-forcast__select select-past">
        <SelectCityPast data={ cityLocation } />
        <SelectDate data={ unixDate } />
      </form>
      {
        loading ? <Loader /> :
        Object.keys(data).length ?
        <UnitPast /> : <Placeholder />
      }
    </article>
  )
}

export default CardPast;