import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import { useFetchList } from './redux/hooks';
import { Table } from 'antd';

export default function ListPage() {
  const {
    listItems,
    fetchList
  } = useFetchList();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div>
      <ul>
        {listItems.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListPage.propTypes = {};
ListPage.defaultProps = {};
