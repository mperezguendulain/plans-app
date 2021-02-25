import { GetAllPlans } from '../../services/plans.api';
import { receivePlans } from './plans.action';

export const handleInitialData = () => (dispatch) => {
  return GetAllPlans()
    .then(
      plans => dispatch(receivePlans(plans))
    )
};