import { makeVar } from '@apollo/client';

const date = new Date();

const activeDayState = makeVar(date);

export default activeDayState;
