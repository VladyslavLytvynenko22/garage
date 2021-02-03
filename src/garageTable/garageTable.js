import { Table } from 'antd';
import React, { Component } from 'react';

class GarageTable extends Component {
  render() {
    return (
      <Table columns={this.props.columns} dataSource={this.props.garages} />
    );
  }
}

export default GarageTable;
