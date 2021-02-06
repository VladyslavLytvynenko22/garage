import { GarageColumn } from './../../shared/garage-column.model';
import { Garage } from './../../shared/garage.model';
import Results from './../../containers/results';
import * as actions from './../actions/actions';
import * as ActionTypes from './../actions/action-types';

class AppState {
  constructor(
    public garages: Garage[],
    public columns: GarageColumn[],
    public showAddCar: boolean
  ) {}
}

const initialState = new AppState(
  [new Garage(1, 'NO_DATA1', 'NO_DATA2', 'NO_DATA3', 'NO_DATA4', 'NO_DATA5')],
  [new GarageColumn('NO_DATA1', 'NO_DATA1', 'NO_DATA1')],
  false
);

const reducer = (state = initialState, action: ActionTypes.ActionType) => {
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

const garageSave = (state: AppState, garage: Garage) => {
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
