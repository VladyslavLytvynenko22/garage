import { Modal } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Garage } from './../../shared/garage.model';
import NewData from './new-data/new-data';
import * as actions from './../../store/actions/actions';
import * as ActionTypes from './../../store/actions/action-types';

interface IAddCarProps {
  showAddCar: boolean;
  garage: Garage;
  onChangeGarage: (garage: Garage) => void;
  onChangeShowAddCar: (showAddCar: boolean) => void;
  saveGarage: (garage: Garage) => void;
}

class AddCar extends Component<IAddCarProps> {
  getGarage = () => {
    return { ...this.props.garage };
  };

  modalOkHandler = () => {
    this.props.saveGarage(this.props.garage);
    this.props.onChangeShowAddCar(false);
  };

  modalCancelHandler = () => {
    this.props.onChangeShowAddCar(false);
  };

  render() {
    return (
      <Modal
        title="New Car"
        visible={this.props.showAddCar}
        onOk={this.modalOkHandler}
        onCancel={this.modalCancelHandler}
      >
        <NewData
          garage={this.getGarage()}
          onChangeGarage={this.props.onChangeGarage.bind(this)}
        />
      </Modal>
    );
  }
}

const mapStateToProps = (state: {
  addCarRducer: { garage: Garage; showAddCar: boolean };
}) => {
  return {
    garage: state.addCarRducer.garage,
    showAddCar: state.addCarRducer.showAddCar,
  };
};

const mapDispatchToProps = (dispatch: ActionTypes.DispatchActionType) => {
  return {
    onChangeGarage: (garage: Garage) => dispatch(actions.garageChange(garage)),
    saveGarage: (garage: Garage) => dispatch(actions.garageSave(garage)),
    onChangeShowAddCar: (showAddCar: boolean) =>
      dispatch(actions.showAddCarChange(showAddCar)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
