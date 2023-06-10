import { makeVar } from '@apollo/client';

interface userLocationStateProps {
  latitude: number;
  longitude: number;
  address: string;
}

const initialState: userLocationStateProps = {
  latitude: 37.544820710541,
  longitude: 127.05515387709,
  address: '서울특별시 성동구 아차산로 100 성수역'
};

const userLocationState = makeVar(initialState);

export default userLocationState;
