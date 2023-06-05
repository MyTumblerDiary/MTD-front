import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as Style from './SearchResultHeader.style';

import { useReactiveVar } from '@apollo/client';
import saerchQueryState from '@/store/searchQuery';

import Typography from '@/components/Common/Typography/Typography';

export default function SearchResultHeader() {
  const router = useRouter();
  const searchQuery = useReactiveVar(saerchQueryState);

  const {
    query: { keyword, searchby }
  } = router;

  useEffect(() => {
    saerchQueryState({
      searchBy: searchby as string,
      value: keyword as string
    });

    return () => {
      saerchQueryState({});
    };
  }, [keyword, searchby]);

  const searchMode = searchby === 'NAME' ? '가게명' : '주소';

  return (
    <Style.SearchResultHeader>
      <Typography size='button1' variant='main'>
        {searchQuery.value}
      </Typography>
      <Typography size='button1'>에 대한 {searchMode} 검색결과</Typography>
    </Style.SearchResultHeader>
  );
}
