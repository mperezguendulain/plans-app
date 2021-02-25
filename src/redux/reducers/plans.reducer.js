import { RECEIVE_PLANS } from '../actions/plans.action';

/**
 * In order to keep simple this app I use the next state shape,
 * but in the most cases is recommended to follow the next patter for
 * optimizing UI performance:
 * https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
 */
const INITIAL_STATE = {
  plans: [],
  loading: true
};

const plansReducerFn = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PLANS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default: return state;
  }
};

export default plansReducerFn;