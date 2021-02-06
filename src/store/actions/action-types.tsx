import { GarageColumn } from './../../shared/garage-column.model';
import { Garage } from './../../shared/garage.model';

type DispatchAction = {
  type: string;
  garage?: Garage;
  garages?: Garage[];
  columns?: GarageColumn[];
  showAddCar?: boolean;
};
export type DispatchActionType = (arg0: DispatchAction) => any;

export type ActionType = {
  type: string;
  garage: Garage;
  garages: Garage[];
  columns: GarageColumn[];
  showAddCar: boolean;
};
