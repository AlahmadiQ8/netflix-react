import React from 'react';
// import PropTypes from 'prop-types';
import './RowHeader.css';

const RowHeader = ({
  // title,
  children,
}) => (
  <div className="RowHeader">
    <h2>{children}</h2>
  </div>
);

// RowHeader.propTypes = {
//   id: PropTypes.number,
// };

RowHeader.defaultProps = {
  id: undefined,
};

export default RowHeader;
