import React, { Component } from 'react';
import { Button } from 'antd';

import GarageTable from '../GarageTable/GarageTable';
import AddCar from '../AddCar/AddCar';
import classes from './App.module.css';
import 'antd/dist/antd.css';

class App extends Component {
  state = {
    garages: [
      {
        key: -1,
        owner: '',
        dateOfBirth: -1,
        address: '',
        car: '',
        color: '',
      },
    ],
    columns: [
      {
        title: '',
        dataIndex: '',
        key: '',
      },
    ],
    showAddCar: false,
  };

  componentDidMount() {
    this.setState({
      garages: [
        {
          key: 1,
          owner: 'John Brown',
          dateOfBirth: '1990-02-09',
          address: 'New York No. 1 Lake Park',
          car: 'Mers',
          color: 'red',
        },
        {
          key: 2,
          owner: 'Jim Green',
          dateOfBirth: '1990-02-09',
          address: 'London No. 1 Lake Park',
          car: 'BMW',
          color: '',
        },
        {
          key: 3,
          owner: 'Joe Black',
          dateOfBirth: '1990-02-09',
          address: 'Sidney No. 1 Lake Park',
          car: 'Lambo',
          color: '',
        },
      ],
      columns: [
        {
          title: 'Garage',
          dataIndex: 'key',
          key: 'garage',
        },
        {
          title: 'Owner',
          dataIndex: 'owner',
          key: 'owner',
        },
        {
          title: 'Date Of Birth',
          dataIndex: 'dateOfBirth',
          key: 'dateOfBirth',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Car',
          dataIndex: 'car',
          key: 'car',
        },
      ],
    });
  }

  getGarages = () => {
    return this.state.garages.slice();
  };

  getColumns = () => {
    return this.state.columns.slice();
  };

  showAddCar = () => {
    this.setState({
      showAddCar: true,
    });
  };

  handleOk = (newGarage) => {
    const garages = this.state.garages.slice();
    const keyArr = garages.map((garage) => garage.key);
    const nextId = Math.max(...keyArr) + 1;

    newGarage.key = nextId;
    garages.push(newGarage);

    this.setState({
      garages: garages,
      showAddCar: false,
    });
  };

  handleCancel = () => {
    this.setState({
      showAddCar: false,
    });
  };

  render() {
    let addCar = '';
    let showAddCar = this.state.showAddCar;

    if (showAddCar) {
      addCar = (
        <AddCar
          showAddCar={showAddCar}
          clickOk={this.handleOk}
          clickCancel={this.handleCancel}
        />
      );
    }

    return (
      <div>
        <Button
          className={classes.Button}
          type="primary"
          onClick={this.showAddCar}
        >
          Add new car
        </Button>
        {addCar}
        <GarageTable garages={this.getGarages()} columns={this.getColumns()} />
      </div>
    );
  }
}

export default App;
