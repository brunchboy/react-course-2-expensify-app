import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h2>{props.description}</h2>
    </Link>
    <p>
      {props.amount} - {moment(props.createdAt).format()}
    </p>
  </div>
);

export default ExpenseListItem;
