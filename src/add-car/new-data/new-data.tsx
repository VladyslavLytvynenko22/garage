import { Input, DatePicker, Cascader, Select } from 'antd';
import { CascaderOptionType } from 'antd/lib/cascader';
import React, { Component } from 'react';

import { Garage } from '../../shared/garage.model';
import classes from './new-data.css';

interface IProps {
  garage: Garage;
  onChangeGarage: (newGarage: Garage) => void;
}

class NewData extends Component<IProps> {
  options: CascaderOptionType[] = [];
  children: CascaderOptionType[] = [];

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
                dateOfBirth: date?.toDate(),
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
                car: value.toString().split(', '),
              });
            }}
          >
            <Select.Option value={'Lambo'} key={'lambo'}>
              {'Lambo'}
            </Select.Option>
            <Select.Option value={'Mers'} key={'mers'}>
              {'Mers'}
            </Select.Option>
            <Select.Option value={'BMW'} key={'bmw'}>
              {'BMW'}
            </Select.Option>
            <Select.Option value={'Ferari'} key={'ferari'}>
              {'Ferari'}
            </Select.Option>
            <Select.Option value={'Golf'} key={'golf'}>
              {'Golf'}
            </Select.Option>
          </Select>
        </Input.Group>

        <Input.Group compact>
          <p className={classes.P}>Color: </p>
          <Select
            className={classes.InputDiv}
            placeholder="Please select color"
            onChange={(value, option) => {
              this.props.onChangeGarage({
                ...this.props.garage,
                color: value.toString(),
              });
            }}
          >
            <Select.Option value={'red'} key={'red'}>
              {'red'}
            </Select.Option>
            <Select.Option value={'blue'} key={'blue'}>
              {'blue'}
            </Select.Option>
            <Select.Option value={'black'} key={'black'}>
              {'black'}
            </Select.Option>
            <Select.Option value={'yellow'} key={'yellow'}>
              {'yellow'}
            </Select.Option>
            <Select.Option value={'green'} key={'green'}>
              {'green'}
            </Select.Option>
          </Select>
        </Input.Group>
      </div>
    );
  }
}

export default NewData;
