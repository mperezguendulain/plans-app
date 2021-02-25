import React, { useCallback, useMemo, useState } from 'react';
import Plan from '../../models/Plan.model';
import PlanCard from '../../components/PlanCard';
import RadioBtn from '../../components/RadioBtn';
import './styles.css';


const PlansScreen = () => {

  const plans = useMemo(() => [
    new Plan('Standard', 9, 'montly', ['Unlimit search', '10 apps', 'Group calls']),
    new Plan('Advanced', 15, 'montly', ['Advance admin control', 'Domain verification', 'Message exports']),
    new Plan('Enterprice', undefined, 'yearly', ['Unlimit worspaces', 'Data loss prevention', 'Network control']),
  ], []);

  const [billTime, setBillTime] = useState('montly');

  const changeBillTime = useCallback((evt) => {
    setBillTime(() => evt.target.value);
  }, []);

  const selectedPlans = plans.filter(plan => plan.billedTime === billTime);

  return (
    <div className="plans-screnn">
      <header className="title">Find the best plan for you</header>
      <div className="options">
        <RadioBtn
          label="Billed montly"
          onChange={changeBillTime}
          checked={billTime === 'montly'}
          value="montly" />
        <div style={{ marginRight: '4rem' }}></div>
        <RadioBtn
          label="Billed yearly"
          onChange={changeBillTime}
          checked={billTime === 'yearly'}
          value="yearly" />
      </div>
      <div className="plans">
        {selectedPlans.map(
          (plan, index) => <PlanCard key={index} {...plan} />
        )}
      </div>
    </div>
  );

};

export default React.memo(PlansScreen);