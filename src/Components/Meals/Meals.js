import { Fragment } from 'react';

import Summary from '..Summary/Summary';
import Meal from './Meal';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <Meal />
    </Fragment>
  );
};

export default Meals;