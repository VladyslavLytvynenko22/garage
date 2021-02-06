import { Garage } from './../../shared/garage.model';
import * as actions from './../actions/actions';
import * as ActionTypes from './../actions/action-types';

class AddCarState {
  constructor(public garage: Garage, public showAddCar: boolean) {}
}

const initialState = new AddCarState(new Garage(-1, '', '', '', '', ''), false);

const reducer = (state = initialState, action: ActionTypes.ActionType) => {
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
