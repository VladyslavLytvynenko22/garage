import { Modal } from 'antd';
import React, { Component } from 'react';

import NewData from './NewData/NewData';

class AddCar extends Component {
  state = {
    garage: {
      key: -1,
      owner: '',
      dateOfBirth: -1,
      address: '',
      car: '',
      color: '',
    },
  };

  getGarage = () => {
    return { ...this.state.garage };
  };

  onChangeGarageHandler = (newGarage) => {
    this.setState({ garage: newGarage });
  };

  render() {
    return (
      <Modal
        title="New Car"
        visible={this.props.showAddCar}
        onOk={() => this.props.clickOk(this.getGarage())}
        onCancel={this.props.clickCancel}
      >
        <NewData
          garage={this.getGarage()}
          onChangeGarage={this.onChangeGarageHandler.bind(this)}
        />
      </Modal>
    );
  }
}

export default AddCar;
