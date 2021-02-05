import React, { Component } from 'react';
import { Button } from 'antd';

import GarageTable from '../garage-table/garage-table';
import AddCar from '../add-car/add-car';
import classes from './app.module.css';
import Results from './results';
import { Garage } from '../shared/garage.model';
import { GarageColumn } from '../shared/garage-column.model';
import 'antd/dist/antd.css';

class App extends Component {
  garage: Garage[] = new Garage(-1, '', '', [''], '', '');
  garageColumn: GarageColumn[] = new GarageColumn('', '', '');
  state = {
    garages: this.garage,
    columns: this.garageColumn,
    showAddCar: false,
  };

  componentDidMount() {
    Results.get('/state.json').then((res) => {
      this.setState({
        garages: res.data.garages,
        columns: res.data.columns,
      });
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

  handleOk = (newGarage: Garage) => {
    const garages = this.state.garages.slice();
    const keyArr = garages.map((garage) => garage.key);
    const nextId = Math.max(...keyArr) + 1;

    newGarage.key = nextId;
    garages.push(newGarage);

    this.setState({
      garages: garages,
      showAddCar: false,
    });

    // Results.put('/state.json', {
    //   garages: garages,
    //   columns: this.state.columns,
    // }).then((res) => {
    //   console.log(res);
    // });
  };

  handleCancel = () => {
    this.setState({
      showAddCar: false,
    });
  };

  render() {
    let addCar = null;
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
