import React from 'react';
import PropTypes from 'prop-types';
import FeatureItem from '../FeatureItem';
import './styles.css';

const FeatureList = ({
  topFeatures
}) => {

  return (
    <div className="features-box">
      <span className="features-list-title">Top features:</span>
      <div className="features-list">
        {topFeatures.map((feature, index) => <FeatureItem key={index} feature={feature}/>)}
      </div>
    </div>
  );

};

FeatureList.propTypes = {
  topFeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default React.memo(FeatureList);