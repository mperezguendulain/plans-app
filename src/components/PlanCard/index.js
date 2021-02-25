import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import FeatureList from './components/FeatureList';
import PriceInfo from './components/PriceInfo';
import './styles.css';

const PlanCard = ({
  name,
  price,
  billedTime,
  topFeatures
}) => {

  const selectPlan = useCallback(() => {
    console.log(`Se seleccionó el plan: ${name}`);
  }, [name]);

  const option = billedTime === 'montly' ? 'Try for free' : 'Contact Sales';
  return (
    <div className="card">
      <span className="plan-name">{name}</span>

      <div style={{paddingLeft: '5px'}}>
        {billedTime === 'montly' && <PriceInfo price={price}/>}
        <FeatureList topFeatures={topFeatures}/>
      </div>

      <button className="btn-plan-option" onClick={selectPlan}>{option}</button>

      <a href="/" className="link" >Learn more</a>
    </div>
  );

};

PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  billedTime: PropTypes.string.isRequired,
  topFeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default React.memo(PlanCard);