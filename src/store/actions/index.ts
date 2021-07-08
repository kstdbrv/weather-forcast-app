import * as app from './app';
import * as getDate from './getDate';
import * as getLocation from './getLocation';
import * as getWeater from './getWeather';


export default {
  ...app,
  ...getDate,
  ...getLocation,
  ...getWeater
}