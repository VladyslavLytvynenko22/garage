import { Modal } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Garage } from './../../shared/garage.model';
import NewData from './new-data/new-data';

interface IAddCarProps {
  showAddCar: boolean;
  garage: Garage;
  onChangeGarage: (garage: Garage) => void;
  onChangeShowAddCar: (showAddCar: boolean) => void;
  saveGarage: () => void;
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
          this.props.saveGarage();
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

const mapStateToProps = (state: { garage: Garage; showAddCar: boolean }) => {
  return {
    garage: state.garage,
    showAddCar: state.showAddCar,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    garage?: Garage;
    showAddCar?: boolean;
  }) => any
) => {
  return {
    onChangeGarage: (garage: Garage) =>
      dispatch({ type: '[GARAGE]_CHANGE', garage: garage }),
    saveGarage: () => dispatch({ type: '[GARAGE]_SAVE' }),
    onChangeShowAddCar: (showAddCar: boolean) =>
      dispatch({
        type: '[SHOW_ADD_CAR]_CHANGE',
        showAddCar: showAddCar,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
