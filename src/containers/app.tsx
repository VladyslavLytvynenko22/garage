import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import GarageTable from './../components/garage-table/garage-table';
import AddCar from './../components/add-car/add-car';
import { Garage } from './../shared/garage.model';
import { GarageColumn } from './../shared/garage-column.model';
import Results from './results';
import * as actions from './../store/actions';
import classes from './app.module.css';
import 'antd/dist/antd.css';

interface IAppProps {
  garages: Garage[];
  columns: GarageColumn[];
  showAddCar: boolean;
  onChangeGarages: (garages: Garage[]) => void;
  onChangeGarageColumn: (columns: GarageColumn[]) => void;
  onChangeShowAddCar: (showAddCar: boolean) => void;
}

class App extends Component<IAppProps> {
  componentDidMount() {
    Results.get('/state.json').then((res) => {
      this.props.onChangeGarages(res.data.garages);
      this.props.onChangeGarageColumn(res.data.columns);
    });
  }

  getGarages = () => {
    return this.props.garages.slice();
  };

  getColumns = () => {
    return this.props.columns.slice();
  };

  getShowAddCar = () => {
    return this.props.showAddCar;
  };

  render() {
    let addCar = null;
    let showAddCar = this.getShowAddCar();

    if (showAddCar) {
      addCar = <AddCar />;
    }

    return (
      <div>
        <Button
          className={classes.Button}
          type="primary"
          onClick={() => this.props.onChangeShowAddCar(true)}
        >
          Add new car
        </Button>
        {addCar}
        <GarageTable garages={this.getGarages()} columns={this.getColumns()} />
      </div>
    );
  }
}

const mapStateToProps = (state: {
  garages: Garage[];
  columns: GarageColumn[];
  showAddCar: boolean;
}) => {
  return {
    garages: state.garages,
    columns: state.columns,
    showAddCar: state.showAddCar,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    garages?: Garage[];
    columns?: GarageColumn[];
    showAddCar?: boolean;
  }) => any
) => {
  return {
    onChangeGarages: (garages: Garage[]) =>
      dispatch({ type: actions.GARAGES_CHANGE, garages: garages }),
    onChangeGarageColumn: (columns: GarageColumn[]) =>
      dispatch({ type: actions.COLUMNS_CHANGE, columns: columns }),
    onChangeShowAddCar: (showAddCar: boolean) =>
      dispatch({
        type: actions.SHOW_ADD_CAR_CHANGE,
        showAddCar: showAddCar,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
