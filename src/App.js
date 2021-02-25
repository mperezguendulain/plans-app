import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlansScreen from './screens/Plans';
import { handleInitialData } from './redux/actions/shared.action';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch]);

  return (
    <PlansScreen />
  );

}

export default App;
