
export function getDate(unixTimestamp:number):string {

  const date = new Date(unixTimestamp * 1000);

  let dd: number | string = date.getDate();
  
  if (dd < 10) { dd = '0' + dd };

  const yyyy: number = date.getFullYear();
  
  type Date = 'jan' | 'feb' | 'mar' |
              'apr' | 'may' | 'jun' |
              'jul' | 'aug' | 'sep' |
              'oct' | 'nov' | 'dec' | undefined;

  function toStrMonth():Date {
    const mm:number = date.getMonth() + 1;
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

  const mm:Date = toStrMonth();
  const currentDate:string = dd + ' ' + mm + ' ' + yyyy;

  return currentDate
}