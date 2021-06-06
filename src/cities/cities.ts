interface ICities {
  name: string,
  lat?: string,
  disabled?: boolean,
  hidden?:boolean
};

export const CITIES: ICities[] = [
  { name: 'Select city', disabled: true, hidden: true },
  { name: 'Самара', lat: '53.195873' },
  { name: 'Тольятти', lat: '53.507836' },
  { name: 'Саратов', lat: '51.533557' },
  { name: 'Казань', lat: '55.796127' },
  { name: 'Краснодар', lat: '45.035470' },
];