import { GarageColumn } from './../../shared/garage-column.model';
import { Garage } from './../../shared/garage.model';
import Results from './../../containers/results';
import * as actions from './../actions/action-types';

const initialState = {
  garages: [
    new Garage(1, 'NO_DATA1', 'NO_DATA2', 'NO_DATA3', 'NO_DATA4', 'NO_DATA5'),
  ],
  columns: [new GarageColumn('NO_DATA1', 'NO_DATA1', 'NO_DATA1')],
  showAddCar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GARAGE_SAVE:
      return garageSave(state, action.garage);
    case actions.GARAGES_CHANGE:
      return {
        ...state,
        garages: action.garages,
      };
    case actions.COLUMNS_CHANGE:
      return {
        ...state,
        columns: action.columns,
      };
    case actions.SHOW_ADD_CAR_CHANGE:
      return {
        ...state,
        showAddCar: action.showAddCar,
      };
    default:
      return state;
  }
};

const garageSave = (state, garage) => {
  const garages = state.garages.slice();
  const keyArr = garages.map((garage) => garage.key);
  const nextId = Math.max(...keyArr) + 1;
  garage.key = nextId;

  garages.push(garage);

  Results.put('/state.json', {
    garages: garages,
    columns: state.columns,
  }).then((res) => {});

  return {
    ...state,
    garages: garages,
  };
};

export default reducer;
