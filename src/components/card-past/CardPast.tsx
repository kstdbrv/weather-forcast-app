import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import SelectCityPast from '../select-city-past/selectCityPast';
import SelectDate from '../select-date/SelectDate';
import UnitPast from '../unit-past/UnitPast';
import Placeholder from '../placeholder/Placeholder'
import { IStateLoading } from '../../types/app';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPastData } from '../../types/pastData';


interface ILoading {
  app:IStateLoading
};

interface IPastState {
  pastData: IPastData
};

const CardPast: React.FC = () => {

  const { loadingPastForecast } = useTypedSelector((state:ILoading) => state.app);
  const pastDataForecast = useSelector((state:IPastState) => state.pastData);

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
        loadingPastForecast ? <Loader /> :
        pastDataForecast.hourly ?
        <UnitPast /> : <Placeholder />
      }
    </article>
  )
}

export default CardPast;