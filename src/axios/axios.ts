import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})

const cancelToken = axios.CancelToken;
export const source = cancelToken.source();

export const isCancel = axios.isCancel;



/* const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel; */