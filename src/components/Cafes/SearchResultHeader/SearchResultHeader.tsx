import * as Style from './SearchResultHeader.style';

import Typography from '@/components/Common/Typography/Typography';

interface SearchResultHeaderProps {
  keyword: string;
  count: number;
}

export default function SearchResultHeader({
  keyword,
  count
}: SearchResultHeaderProps) {
  return (
    <Style.SearchResultHeader>
      <Typography size='button1' variant='main'>
        {keyword}
      </Typography>
      <Typography size='button1'>에 대한 총 {count}건의 검색결과</Typography>
    </Style.SearchResultHeader>
  );
}
