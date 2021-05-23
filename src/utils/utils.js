export function getDate(unixTimestamp) {

  const date = new Date(unixTimestamp * 1000);

  let dd = date.getDate();
  const yyyy = date.getFullYear();

  function toStrMonth() {
    let mm = date.getMonth() + 1;
    switch (mm) {
      case 1: return 'jan';
      case 2: return 'feb';
      case 3: return 'mar';
      case 4: return 'apr';
      case 5: return 'may';
      case 6: return 'jun';
      case 7: return 'jul';
      case 8: return 'aug';
      case 9: return 'sep';
      case 10: return 'oct';
      case 11: return 'nov';
      case 12: return 'dec';
      default: return;
   }
  }

  const mm = toStrMonth();
  const currentDate = dd + ' ' + mm + ' ' + yyyy;

  return currentDate
}

export function getTemp(currentTemp) {

  let temp = Math.round(currentTemp);

  function isAddPlus() {
    if ( currentTemp >= 0 ) {
      return '+' + temp.toString()
    }
  }

  temp = isAddPlus();

  return temp
}





/* 
    const result = data.daily.map(day => {
    return {
      unixTimestamp: day.dt,
      currentTemp: day.temp.eve,
      weather: day.weather,
    }
  });
  const qqq = Object.assign({}, result);

console.log(qqq) */