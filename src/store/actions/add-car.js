import * as Actions from './action-types';

export const garageChange = (garage) => {
  return { type: Actions.GARAGE_CHANGE, garage: garage };
};
export const garageSave = (garage) => {
  return { type: Actions.GARAGE_SAVE, garage: garage };
};
export const garageStore = (garage) => {
  return (dispatch, getState) => {
    console.log(getState().addCarRducer);
    setTimeout(() => {
      dispatch(garageSave(garage));
    }, 2000);
  };
};
