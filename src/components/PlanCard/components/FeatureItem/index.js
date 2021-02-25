import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FeatureItem = ({
  feature
}) => {

  return (
    <span className="feature-item">✔ {feature}</span>
  );

};

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired
};

export default React.memo(FeatureItem);