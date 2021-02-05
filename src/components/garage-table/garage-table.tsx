import { Table } from 'antd';
import React, { Component } from 'react';

import { GarageColumn } from './../../shared/garage-column.model';
import { Garage } from './../../shared/garage.model';
import classes from './garage-table.module.css';

interface IProps {
  garages: Garage[];
  columns: GarageColumn[];
}

class GarageTable extends Component<IProps> {
  selectRowClassName = (color: string) => {
    switch (color) {
      case 'red':
        return classes.RedRow;
      case 'blue':
        return classes.BlueRow;
      case 'black':
        return classes.BlackRow;
      case 'yellow':
        return classes.YellowRow;
      case 'green':
        return classes.GreenRow;
      default:
        return '';
    }
  };

  render() {
    return (
      <Table
        columns={this.props.columns}
        dataSource={this.props.garages}
        rowClassName={(record, index) => this.selectRowClassName(record.color)}
      />
    );
  }
}

export default GarageTable;
