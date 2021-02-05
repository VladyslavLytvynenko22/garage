import { GarageColumn } from '../shared/garage-column.model';
import { Garage } from '../shared/garage.model';
import Results from './../containers/results';
import * as actions from './actions';

class MyState {
  constructor(
    public garage: Garage,
    public garages: Garage[],
    public columns: GarageColumn[],
    public showAddCar: boolean
  ) {}
}

const initialState = new MyState(
  new Garage(-1, '', '', '', '', ''),
  [new Garage(1, 'NO_DATA1', 'NO_DATA2', 'NO_DATA3', 'NO_DATA4', 'NO_DATA5')],
  [new GarageColumn('NO_DATA1', 'NO_DATA1', 'NO_DATA1')],
  false
);

const reducer = (
  state = initialState,
  action: {
    type: string;
    garage: Garage;
    garages: Garage[];
    columns: GarageColumn[];
    showAddCar: boolean;
  }
) => {
  switch (action.type) {
    case actions.GARAGE_CHANGE:
      return {
        ...state,
        garage: action.garage,
      };
    case actions.GARAGE_SAVE:
      const garages = state.garages.slice();
      const keyArr = garages.map((garage) => garage.key);
      const nextId = Math.max(...keyArr) + 1;
      state.garage.key = nextId;

      Results.put('/state.json', {
        garages: garages,
        columns: state.columns,
      }).then((res) => {});
      return {
        ...state,
        garages: state.garages.concat(state.garage),
      };
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

export default reducer;
