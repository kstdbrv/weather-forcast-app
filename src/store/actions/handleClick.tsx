import { HANDLE_PREV, HANDLE_NEXT } from './actionTypes';


export function handleNext() {

  return (dispatch, getState) => {

    const { forecastData } = getState();
    const { cardsToShow } = getState();

    if (!forecastData.daily) return;

    const nextCards = cardsToShow.map(card => {
      return card + 1
    });
    
    const result: any = nextCards.map(card => {
      return forecastData.daily[card]
    })
    console.log(result)


    dispatch({
      type: HANDLE_NEXT,
      cards: result,
    });
  }
}

export function handlePrev() {
  return {
    type: HANDLE_PREV
  }
}


/* const prevCards = cardsToShow.map(card => {
  return card - 1
}); */

