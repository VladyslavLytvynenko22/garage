import { Modal } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewData from './new-data/new-data';
import * as actions from './../../store/actions/actions';

class AddCar extends Component {
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

const mapStateToProps = (state) => {
  return {
    garage: state.addCarRducer.garage,
    showAddCar: state.addCarRducer.showAddCar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeGarage: (garage) => dispatch(actions.garageChange(garage)),
    saveGarage: (garage) => dispatch(actions.garageSave(garage)),
    onChangeShowAddCar: (showAddCar) =>
      dispatch(actions.showAddCarChange(showAddCar)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
