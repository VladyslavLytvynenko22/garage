import { Garage } from './../../shared/garage.model';
import * as actions from './../actions/action-types';

const initialState = {
  garage: new Garage(-1, '', '', '', '', ''),
  showAddCar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GARAGE_CHANGE:
      return {
        ...state,
        garage: action.garage,
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
