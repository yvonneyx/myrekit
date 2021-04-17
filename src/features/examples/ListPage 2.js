import React, { Component } from 'react';
import { Table } from 'antd';

export default class ListPage extends Component {
  static propTypes = {

  };
  getColumns = () => {
    return [{
      title: 'Frist name',
      dataIndex: 'fristname',
      key: 'fristname',
    }, {
      title: 'Last name',
      dataIndex: 'lastname',
      key: 'lastname',
    }]
  };

  render() {
    return (
      <div className="examples-list-page">
        <Table columns={this.getColumns()} />
      </div>
    );
  }
}
