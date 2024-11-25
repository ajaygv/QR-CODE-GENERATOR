import PropTypes from 'prop-types';
import { Children } from 'react';

export const ChildComponent = (props) => {
  return <div>{props.children}</div>;
};

ChildComponent.prototype={
  Children:PropTypes.array,
}