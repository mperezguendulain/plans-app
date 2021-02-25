import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import PlanCard from '../../components/PlanCard';
import RadioBtn from '../../components/RadioBtn';
import Loading from '../../components/Loading';
import './styles.css';


const PlansScreen = () => {

  const {plans, loading} = useSelector(state => state.plans);

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
        {loading && <Loading />}
        {selectedPlans.map(
          (plan, index) => <PlanCard key={index} {...plan} />
        )}
      </div>
    </div>
  );

};

export default React.memo(PlansScreen);