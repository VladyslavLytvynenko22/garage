import * as Actions from './action-types';

export const garagesChange = (garages) => {
  return { type: Actions.GARAGES_CHANGE, garages: garages };
};
export const columnsChange = (columns) => {
  return { type: Actions.COLUMNS_CHANGE, columns: columns };
};
export const showAddCarChange = (showAddCar) => {
  return { type: Actions.SHOW_ADD_CAR_CHANGE, showAddCar: showAddCar };
};
