import { makeVar } from '@apollo/client';

import { TumblerRecordsProps } from '@/types';

const initalState: TumblerRecordsProps = [];

const clickedTumblerDataState = makeVar(initalState);

export default clickedTumblerDataState;
