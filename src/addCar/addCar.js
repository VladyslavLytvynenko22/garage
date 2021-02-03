import { Modal, Input } from 'antd';
import React, { Component } from 'react';

class AddCar extends Component {
  garage = {
    key: -1,
    owner: '',
    age: -1,
    address: '',
    car: '',
  };

  render() {
    return (
      <Modal
        title="New Car"
        visible={this.props.showAddCar}
        onOk={() => this.props.clickOk(this.garage)}
        onCancel={this.props.clickCancel}
      >
        <p>Owner: </p>
        <Input
          placeholder="Owner"
          onChange={(value) => {
            this.garage.owner = value.target.value;
          }}
        />
      </Modal>
    );
  }
}

export default AddCar;
