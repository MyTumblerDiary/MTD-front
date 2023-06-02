import { makeVar } from '@apollo/client';

import { type CafeProps } from '@/types';

const initialState: CafeProps = {
  id: 0,
  name: '',
  thumbnail: '',
  streetNameAddress: '',
  latitude: 0,
  longitude: 0,
  discountPrice: 0
};

const cafeDetailState = makeVar(initialState);

export default cafeDetailState;
