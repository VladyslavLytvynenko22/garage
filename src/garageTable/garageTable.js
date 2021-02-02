import { Table } from 'antd';
import React, { Component } from 'react';

class GarageTable extends Component {
  state = {
    garage: [
      {
        key: '',
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
  };

  componentDidMount() {
    this.setState({
      garage: [
        {
          key: '1',
          owner: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          car: 'Mers',
        },
        {
          key: '2',
          owner: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          car: 'BMW',
        },
        {
          key: '3',
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

  render() {
    return (
      <div>
        <Table columns={this.state.columns} dataSource={this.state.garage} />
      </div>
    );
  }
}

export default GarageTable;
