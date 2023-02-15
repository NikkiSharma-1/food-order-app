import { Fragment } from 'react';

import Summary from './Summary';
import AvailableMeal from './AvailableMeal';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;