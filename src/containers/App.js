import React, { Component } from 'react';
import { Button } from 'antd';

import GarageTable from '../garageTable/garageTable';
import classes from './App.module.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button className={classes.Button} type="primary">Add new car</Button>
        <GarageTable />
      </div>
    );
  }
}

export default App;
