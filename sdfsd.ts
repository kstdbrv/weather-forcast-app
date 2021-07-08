import React, { useEffect, useState } from 'react';
import './App.scss';
import ForecastCard from './components/view/ForecastCard';
import ICity from './models/ICity';
import IDayForecast from './models/IDayForecast';
import DateHelper from './services/DateHelper';
import WeatherApiService from './services/WeatherApiService';
import cities from './constants';

function App(): JSX.Element {
  const [pastDayForcastSelectedCity, setPastDayForcastSelectedCity] = useState<ICity | null>(null);
  const [pastDayForcastSelectedDate, setPastDayForcastSelectedDate] = useState<number | null>(null);
  const [pastDayForecastData, setPastDayForecastData] = useState<IDayForecast | null>(null);
  const [isPastDayForecastData, setIsPastDayForecastDataLoading] = useState<boolean>(false);
  const [isOffline, setIsOffline] = useState<boolean>(true);
  const [citiesWithLocation, setCitiesWithLocation] = useState<ICity[]>(cities);

  const [sevenDaysForcastSelectedCity,
    setSevenDaysForcastSelectedCity] = useState<ICity | null>(null);
  const [sevenDaysForecastData,
    setSevenDaysForecastData] = useState<Array<IDayForecast> | null>(null);
  const [isSevenDaysForecastDataLoading,
    setIsSevenDaysForecastDataLoading] = useState<boolean>(false);

  function handleNetworkConnectionChange(): void {
    if (navigator.onLine) {
      setIsOffline(false);
    } else {
      setIsOffline(true);
    }
  }

  function checkAndUpdateUserLocation(): void {
    if ('geolocation' in navigator) {
      const appendLocation: PositionCallback = (location: GeolocationPosition) => {
        setCitiesWithLocation([...cities, {
          id: 5,
          name: 'Текущее местоположение',
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }]);
      };

      navigator.geolocation.getCurrentPosition(appendLocation);
      navigator.geolocation.watchPosition(appendLocation);
    } else {
      setCitiesWithLocation(cities);
    }
  }

  function setGeoHandler(): void {
    if (navigator.registerProtocolHandler) {
      navigator.registerProtocolHandler('geo', '/mercury-weather-forecast/?geo=%s', 'Geo handler');
    }
  }

  function parseIncomingParams(): void {
    window.addEventListener('load', () => {
      const parsedUrl = new URL(window.location.toString());
      const { searchParams } = parsedUrl;
      const geoQueue = searchParams.get('geo')?.toString();
      try {
        if (geoQueue) {
          const latitudeAndLongitudeString = geoQueue.split(':')[1]?.split(',');
          const latitude = parseFloat(latitudeAndLongitudeString[0]);
          const longitude = parseFloat(latitudeAndLongitudeString[1]);
          setSevenDaysForcastSelectedCity({
            id: -1,
            name: 'Incoming params',
            latitude,
            longitude,
          });
        }
      } catch {
        throw new Error('Error parse incoming parameters');
      }
    });
  }

  useEffect(() => {
    handleNetworkConnectionChange();
    window.addEventListener('offline', handleNetworkConnectionChange);
    window.addEventListener('online', handleNetworkConnectionChange);
    checkAndUpdateUserLocation();
    setGeoHandler();
    parseIncomingParams();
  }, []);

  useEffect(() => {
    if (!!pastDayForcastSelectedCity && !!pastDayForcastSelectedDate) {
      setIsPastDayForecastDataLoading(true);
      WeatherApiService.getPastDayForecast(pastDayForcastSelectedCity,
        pastDayForcastSelectedDate, (data: IDayForecast | null) => {
          setPastDayForecastData(data);
          setIsPastDayForecastDataLoading(false);
        });
    }
  }, [pastDayForcastSelectedCity, pastDayForcastSelectedDate]);

  useEffect(() => {
    if (sevenDaysForcastSelectedCity) {
      setIsSevenDaysForecastDataLoading(true);
      WeatherApiService.getSevenDaysForecast(sevenDaysForcastSelectedCity,
        (data: IDayForecast[] | null) => {
          setSevenDaysForecastData(data);
          setIsSevenDaysForecastDataLoading(false);
        });
    }
  }, [sevenDaysForcastSelectedCity]);

  const changeSelectedCity = (city: ICity, isSingleDateForecast?: boolean) => {
    if (isSingleDateForecast) {
      setPastDayForcastSelectedCity(city);
    } else {
      setSevenDaysForcastSelectedCity(city);
    }
  };

  const changeSelectedDate = (selectedDate: Date) => {
    const selectedDateTimeUTC = DateHelper.convertDateTimeToUTCTime(selectedDate.getTime()
       + Math.round(DateHelper.oneDayOffset / 2));
    setPastDayForcastSelectedDate(selectedDateTimeUTC);
  };

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__title">
          <span>Weather</span>
          <span>forecast</span>
        </p>
      </header>

      <main className="app__main">
        <div className="app__forecast-column">
          <ForecastCard
            isSingleDateForecast={false}
            cities={citiesWithLocation}
            forecastData={sevenDaysForecastData}
            isLoading={isSevenDaysForecastDataLoading}
            changeSelectedCity={changeSelectedCity}
            changeSelectedDate={changeSelectedDate}
          />
        </div>
        <div className="app__forecast-column">
          <ForecastCard
            isSingleDateForecast
            cities={citiesWithLocation}
            forecastData={pastDayForecastData}
            isLoading={isPastDayForecastData}
            changeSelectedCity={changeSelectedCity}
            changeSelectedDate={changeSelectedDate}
          />
        </div>
      </main>

      {isOffline && <div className="app__offline-status-icon" title="No internet connection">offline</div>}

      <footer className="app__footer">
        C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT
      </footer>
    </div>
  );
}

export default App;
