import { useState } from 'react';

import * as Style from './CafeSearchWrapper.style';

import { type InputProps } from '@/types';

import Input from '@/components/Common/Input/Input';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';
import Router from 'next/router';

type searchModeProps = 'STREET_NAME_ADDRESS' | 'NAME';

interface SearchModeFilterProps {
  storeName: 'main' | 'default';
  address: 'main' | 'default';
  placeholder: string;
}

export default function CafeSearchWrapper() {
  const [searchMode, setSearchMode] = useState<searchModeProps>('NAME');
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearchingState = () => {
    setIsSearching(true);
  };

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    setKeyword(value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (keyword === '') {
      return;
    }

    Router.push(`/cafes/search?keyword=${keyword}&searchby=${searchMode}`);
  };

  const handleModeStorename = () => {
    setSearchMode('NAME');
  };

  const handleModeAddress = () => {
    setSearchMode('STREET_NAME_ADDRESS');
  };

  const searchModeFilter: SearchModeFilterProps = {
    storeName: searchMode === 'NAME' ? 'main' : 'default',
    address: searchMode === 'NAME' ? 'default' : 'main',
    placeholder:
      searchMode === 'NAME' ? '가게명을 입력해주세요.' : '주소를 입력해주세요.'
  };

  const searchInputProps: InputProps = {
    type: 'search',
    name: 'search',
    size: 'lg',
    label: '검색',
    isLabelVisible: false,
    value: keyword,
    placeholder: searchModeFilter.placeholder,
    onChange: handleChangeKeyword
  };

  return (
    <Style.CafeSearchWrapper>
      <Style.CafeSearch onClick={handleSearchingState}>
        {isSearching ? (
          <Style.SearchForm onSubmit={handleSearchSubmit}>
            <Style.SearchModeWrapper>
              <Style.SearchMode
                onClick={handleModeStorename}
                borderVariant={searchModeFilter.storeName}
              >
                <Typography size='button2' variant={searchModeFilter.storeName}>
                  가게명으로 검색
                </Typography>
              </Style.SearchMode>
              <Style.SearchMode
                onClick={handleModeAddress}
                borderVariant={searchModeFilter.address}
              >
                <Typography size='button2' variant={searchModeFilter.address}>
                  주소로 검색
                </Typography>
              </Style.SearchMode>
            </Style.SearchModeWrapper>
            <Style.SearchInputWrapper>
              <Input {...searchInputProps} />
              <Style.SearchButton onClick={handleSearchSubmit} />
            </Style.SearchInputWrapper>
          </Style.SearchForm>
        ) : (
          <Style.SearchLanding>
            <Typography size='button2'>카페 검색하기</Typography>
            <Svg.SearchLogo />
          </Style.SearchLanding>
        )}
      </Style.CafeSearch>
    </Style.CafeSearchWrapper>
  );
}
