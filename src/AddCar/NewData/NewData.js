import { Input, DatePicker, Cascader, Select } from 'antd';
import React, { Component } from 'react';

import classes from './NewData.module.css';

class NewData extends Component {
  options = [];
  children = [];

  componentDidMount() {
    this.options = [
      {
        value: 'ukraine',
        label: 'Ukraine',
        children: [
          {
            value: 'kyiv',
            label: 'Kyiv',
          },
          {
            value: 'lviv',
            label: 'Lviv',
          },
        ],
      },
      {
        value: 'usa',
        label: 'USA',
        children: [
          {
            value: 'ny',
            label: 'NY',
          },
          {
            value: 'florida',
            label: 'Florida',
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div>
        <Input.Group compact>
          <p className={classes.P}>Owner: </p>
          <div className={classes.InputDiv}>
            <Input
              placeholder="Owner"
              onChange={(event) => {
                this.props.onChangeGarage({
                  ...this.props.garage,
                  owner: event.target.value,
                });
              }}
            />
          </div>
        </Input.Group>

        <Input.Group compact>
          <p className={classes.P}>Date of birth: </p>
          <DatePicker
            className={classes.InputDiv}
            onChange={(date, dateString) => {
              this.props.onChangeGarage({
                ...this.props.garage,
                dateOfBirth: dateString,
              });
            }}
          />
        </Input.Group>

        <Input.Group compact>
          <p className={classes.P}>Address: </p>
          <Cascader
            className={classes.InputDiv}
            options={this.options}
            placeholder="Select Address"
            onChange={(value, selOption) => {
              this.props.onChangeGarage({
                ...this.props.garage,
                address: value.join(', '),
              });
            }}
          />
        </Input.Group>

        <Input.Group compact>
          <p className={classes.P}>Car: </p>
          <Select
            className={classes.InputDiv}
            mode="multiple"
            allowClear
            placeholder="Please select Car"
            onChange={(value, option) => {
              this.props.onChangeGarage({
                ...this.props.garage,
                car: value.join(', '),
              });
            }}
          >
            <Select.Option key={'lambo'}>{'Lambo'}</Select.Option>
            <Select.Option key={'mers'}>{'Mers'}</Select.Option>
            <Select.Option key={'bmw'}>{'BMW'}</Select.Option>
            <Select.Option key={'ferari'}>{'Ferari'}</Select.Option>
            <Select.Option key={'golf'}>{'Golf'}</Select.Option>
          </Select>
        </Input.Group>

        <Input.Group compact>
          <p className={classes.P}>Color: </p>
          <Select
            className={classes.InputDiv}
            placeholder="Please select color"
            onChange={(value, option) => {
              this.props.onChangeGarage({ ...this.props.garage, color: value });
            }}
          >
            <Select.Option key={'red'}>{'red'}</Select.Option>
            <Select.Option key={'blue'}>{'blue'}</Select.Option>
            <Select.Option key={'black'}>{'black'}</Select.Option>
            <Select.Option key={'yellow'}>{'yellow'}</Select.Option>
            <Select.Option key={'green'}>{'green'}</Select.Option>
          </Select>
        </Input.Group>
      </div>
    );
  }
}

export default NewData;
