import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PriceInfo = ({
  price
}) => {

  return (
    <div className="price-box">
      <span className="money">{price} Eur</span>
      <span className="label">per person, per month</span>
    </div>
  );

};

PriceInfo.propTypes = {
  price: PropTypes.number.isRequired
};

export default React.memo(PriceInfo);