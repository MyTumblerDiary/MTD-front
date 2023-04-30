import * as Style from './CafesContainer.style';

import Header from '../Common/Header/Header';
import CafeList from './CafeList/CafeList';
import CafeSearchForm from './CafeSearchForm/CafeSearchForm';

export default function CafesContainer() {
  return (
    <Style.CafesContainer>
      <Header title='카페' />
      <CafeSearchForm />
      <CafeList />
    </Style.CafesContainer>
  );
}
