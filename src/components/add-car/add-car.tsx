import { Modal } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Garage } from './../../shared/garage.model';
import NewData from './new-data/new-data';
import * as actions from './../../store/actions';
import { GarageColumn } from '../../shared/garage-column.model';

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

  render() {
    return (
      <Modal
        title="New Car"
        visible={this.props.showAddCar}
        onOk={() => {
          this.props.saveGarage(this.props.garage);
          this.props.onChangeShowAddCar(false);
        }}
        onCancel={() => this.props.onChangeShowAddCar(false)}
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

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    garage?: Garage;
    garages?: Garage[];
    columns?: GarageColumn[];
    showAddCar?: boolean;
  }) => any
) => {
  return {
    onChangeGarage: (garage: Garage) =>
      dispatch({ type: actions.GARAGE_CHANGE, garage: garage }),
    saveGarage: (garage: Garage) =>
      dispatch({ type: actions.GARAGE_SAVE, garage: garage }),
    onChangeShowAddCar: (showAddCar: boolean) =>
      dispatch({
        type: actions.SHOW_ADD_CAR_CHANGE,
        showAddCar: showAddCar,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
