import { Garage } from './../../shared/garage.model';
import * as actions from './../actions/action-types';
import {updateObject} from './../utility';

const initialState = {
  garage: new Garage(-1, '', '', '', '', ''),
  showAddCar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GARAGE_CHANGE:
      return updateObject(state, {garage: action.garage});
    case actions.SHOW_ADD_CAR_CHANGE:
      return updateObject(state, {showAddCar: action.showAddCar});
    default:
      return state;
  }
};

export default reducer;
