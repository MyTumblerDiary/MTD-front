import Input from '@/components/Common/Input/Input';
import * as Style from './CafeSearchWrapper.style';

import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';
import { type InputProps } from '@/types';
import { useState } from 'react';

interface CafeSearchWrapperProps {
  isSearching: boolean;
  handleSearchingState: () => void;
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

type searchModeProps = 'address' | 'storeName';

interface SearchModeFilterProps {
  storeName: 'main' | 'default';
  address: 'main' | 'default';
  placeholder: string;
}

export default function CafeSearchWrapper({
  isSearching,
  handleSearchingState,
  handleSearchSubmit
}: CafeSearchWrapperProps) {
  const [searchMode, setSearchMode] = useState<searchModeProps>('storeName');

  const searchModeFilter: SearchModeFilterProps = {
    storeName: searchMode === 'storeName' ? 'main' : 'default',
    address: searchMode === 'storeName' ? 'default' : 'main',
    placeholder:
      searchMode === 'storeName'
        ? '가게명을 입력해주세요.'
        : '주소를 입력해주세요.'
  };

  const searchInputProps: InputProps = {
    type: 'search',
    name: 'search',
    size: 'lg',
    label: '검색',
    isLabelVisible: false,
    value: '',
    placeholder: searchModeFilter.placeholder,
    onChange: () => {}
  };

  return (
    <Style.CafeSearchWrapper>
      <Style.CafeSearch onClick={handleSearchingState}>
        {isSearching ? (
          <Style.SearchForm onSubmit={handleSearchSubmit}>
            <Style.SearchModeWrapper>
              <Style.SearchMode onClick={() => setSearchMode('storeName')}>
                <Typography size='button2' variant={searchModeFilter.storeName}>
                  가게명으로 검색
                </Typography>
              </Style.SearchMode>
              <Style.SearchMode onClick={() => setSearchMode('address')}>
                <Typography size='button2' variant={searchModeFilter.address}>
                  주소로 검색
                </Typography>
              </Style.SearchMode>
            </Style.SearchModeWrapper>
            <Style.SearchInputWrapper>
              <Input {...searchInputProps} />
              <Style.SearchButton />
            </Style.SearchInputWrapper>
          </Style.SearchForm>
        ) : (
          <>
            <Typography size='button2'>카페 검색하기</Typography>
            <Svg.SearchLogo />
          </>
        )}
      </Style.CafeSearch>
    </Style.CafeSearchWrapper>
  );
}
