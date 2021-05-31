import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import SelectCityPast from '../select-city-past/SelectCityPast';
import SelectDate from '../select-date/SelectDate';
import UnitPast from '../unit-past/UnitPast';
import Placeholder from '../placeholder/Placeholder'


const CardPast: React.FC = () => {

  interface IApp {
    app: { loadingPast: boolean }
  };

  const loading = useSelector((state:IApp) => state.app.loadingPast);
  const data = useSelector((state:any) => state.pastData);

  return (
    <article className="card-forcast card-forcast--past">
      <h3 className="card-forcast__title card-forcast__title--left">
        Forecast for a Date in the Past
      </h3>
      <form className="card-forcast__select select-past">
        <SelectCityPast />
        <SelectDate />
      </form>
      {
        loading ? <Loader /> :
        data.hourly ?
        <UnitPast /> : <Placeholder />
      }
    </article>
  )
}

export default CardPast;