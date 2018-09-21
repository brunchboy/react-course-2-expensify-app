import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h2>{props.description}</h2>
    </Link>
    <p>
      {numeral(props.amount / 100).format('$0,0.00')}
      &mdash;
      {moment(props.createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
