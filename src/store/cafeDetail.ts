import { makeVar } from '@apollo/client';

import { type CafeProps } from '@/types';

const initialState: CafeProps = {
  id: 0,
  name: '',
  thumbnail: '',
  street_name_address: '',
  latitude: 0,
  longitude: 0,
  discount_price: 0
};

const cafeDetailState = makeVar(initialState);

export default cafeDetailState;
