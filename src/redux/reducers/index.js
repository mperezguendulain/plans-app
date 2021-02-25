import { combineReducers } from 'redux';
import plansReducerFn from './plans.reducer';

export default combineReducers({
  plans: plansReducerFn,
});