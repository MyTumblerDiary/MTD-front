import { makeVar } from '@apollo/client';

interface SearchQueryProps {
  value?: string;
  searchBy?: string;
}

const initialState: SearchQueryProps = {};

const saerchQueryState = makeVar(initialState);

export default saerchQueryState;
