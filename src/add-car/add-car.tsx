import { Modal } from 'antd';
import React, { Component } from 'react';

import { Garage } from '../shared/garage.model';
import NewData from './new-data/new-data';

interface IProps {
  showAddCar: boolean;
  clickOk: (newGarage: Garage) => void;
  clickCancel: () => void;
}

class AddCar extends Component<IProps> {
  garage: Garage = new Garage(-1, '', '', [''], '', '');
  state = {
    garage: this.garage,
  };

  getGarage = () => {
    return { ...this.state.garage };
  };

  onChangeGarageHandler = (newGarage: Garage) => {
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
