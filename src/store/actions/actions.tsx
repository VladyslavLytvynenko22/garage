import { GarageColumn } from './../../shared/garage-column.model';
import { Garage } from './../../shared/garage.model';

export const GARAGE_SAVE = '[GARAGE]_SAVE';
export const GARAGE_CHANGE = '[GARAGE]_CHANGE';
export const GARAGES_CHANGE = '[GARAGES]_CHANGE';
export const COLUMNS_CHANGE = '[COLUMNS]_CHANGE';
export const SHOW_ADD_CAR_CHANGE = '[SHOW_ADD_CAR]_CHANGE';

export const garageChange = (garage: Garage) => {
  return { type: GARAGE_CHANGE, garage: garage };
};
export const garageSave = (garage: Garage) => {
  return { type: GARAGE_SAVE, garage: garage };
};
export const garagesChange = (garages: Garage[]) => {
  return { type: GARAGES_CHANGE, garages: garages };
};
export const columnsChange = (columns: GarageColumn[]) => {
  return { type: COLUMNS_CHANGE, columns: columns };
};
export const showAddCarChange = (showAddCar: boolean) => {
  return { type: SHOW_ADD_CAR_CHANGE, showAddCar: showAddCar };
};
