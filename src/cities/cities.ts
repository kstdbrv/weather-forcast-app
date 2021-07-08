interface ICities {
  name: 'Select city' | 'Samara' | 'Tolyatti'
        | 'Saratov' | 'Kazan'
        | 'Krasnodar' | 'Сurrent location'
  lat?: '53.195873' | '53.507836' | '51.533557'
      | '55.796127' | '45.035470' | 'current'
  disabled?: boolean,
  hidden?:boolean
};

export const CITIES: ICities[] = [
  { name: 'Select city', disabled: true, hidden: true },
  { name: 'Samara', lat: '53.195873' },
  { name: 'Tolyatti', lat: '53.507836' },
  { name: 'Saratov', lat: '51.533557' },
  { name: 'Kazan', lat: '55.796127' },
  { name: 'Krasnodar', lat: '45.035470' },
  { name: 'Сurrent location', lat: 'current' },
];