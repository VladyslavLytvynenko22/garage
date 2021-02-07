export const GARAGE_SAVE = '[GARAGE]_SAVE';
export const GARAGE_CHANGE = '[GARAGE]_CHANGE';
export const GARAGES_CHANGE = '[GARAGES]_CHANGE';
export const COLUMNS_CHANGE = '[COLUMNS]_CHANGE';
export const SHOW_ADD_CAR_CHANGE = '[SHOW_ADD_CAR]_CHANGE';

export const garageChange = (garage) => {
  return { type: GARAGE_CHANGE, garage: garage };
};
export const garageSave = (garage) => {
  return { type: GARAGE_SAVE, garage: garage };
};
export const garagesChange = (garages) => {
  return { type: GARAGES_CHANGE, garages: garages };
};
export const columnsChange = (columns) => {
  return { type: COLUMNS_CHANGE, columns: columns };
};
export const showAddCarChange = (showAddCar) => {
  return { type: SHOW_ADD_CAR_CHANGE, showAddCar: showAddCar };
};
