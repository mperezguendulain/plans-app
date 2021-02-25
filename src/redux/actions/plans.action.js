export const RECEIVE_PLANS = 'RECEIVE_PLANS';

export const receivePlans = (plans) => {
  return {
    type: RECEIVE_PLANS,
    payload: { plans  },
  }
};