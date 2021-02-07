import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import GarageTable from './../components/garage-table/garage-table';
import AddCar from './../components/add-car/add-car';
import Results from './results';
import * as actions from './../store/actions/actions';
import classes from './App.module.css';
import 'antd/dist/antd.css';

class App extends Component {
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

const mapStateToProps = (state) => {
  return {
    garages: state.appRducer.garages,
    columns: state.appRducer.columns,
    showAddCar: state.appRducer.showAddCar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeGarages: (garages) => dispatch(actions.garagesChange(garages)),
    onChangeGarageColumn: (columns) => dispatch(actions.columnsChange(columns)),
    onChangeShowAddCar: (showAddCar) =>
      dispatch(actions.showAddCarChange(showAddCar)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
