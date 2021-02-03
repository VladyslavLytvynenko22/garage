import React, { Component } from 'react';
import { Button } from 'antd';

import GarageTable from '../garageTable/garageTable';
import AddCar from '../addCar/addCar';
import classes from './App.module.css';
import 'antd/dist/antd.css';

class App extends Component {
  state = {
    garages: [
      {
        key: -1,
        owner: '',
        age: -1,
        address: '',
        car: '',
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
          age: 32,
          address: 'New York No. 1 Lake Park',
          car: 'Mers',
        },
        {
          key: 2,
          owner: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          car: 'BMW',
        },
        {
          key: 3,
          owner: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          car: 'Lambo',
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
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
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

  showAddCar = () => {
    this.setState({
      showAddCar: true,
    });
  };

  handleOk = (props) => {
    const garages = this.state.garages.slice();
    const keyArr = garages.map(garage => garage.key);
    const nextId = Math.max(...keyArr) + 1;
    props.key = nextId;
    garages.push(props);
    this.setState({
      garages: garages,
      showAddCar: false,
    });
  };

  handleCancel = () => {
    console.log('Cancel');
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
        <GarageTable
          garages={this.state.garages}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default App;
