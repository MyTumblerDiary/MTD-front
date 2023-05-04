import * as Style from './SearchResultPopup.style';

import Typography from '../../Common/Typography/Typography';

import { KakaoResultType } from '@/types/kakaoSearchResult.type';

interface SearchResultPopupProps {
  placeSearchResult: KakaoResultType[];
  onClickSearchResult: (place: string) => void;
}

const SearchResultPopup = (props: SearchResultPopupProps) => {
  const { placeSearchResult, onClickSearchResult } = props;

  return (
    <Style.SearchResultContainer>
      <Style.SearchResultContent>
        {placeSearchResult.map((place: any) => {
          const { id, place_name, address_name } = place;
          return (
            <li key={id}>
              <Style.SearchResultButton
                type='button'
                onClick={() => onClickSearchResult(place_name)}
              >
                <Typography size='body2'>{place_name}</Typography>
                <Typography size='body3'>{address_name}</Typography>
              </Style.SearchResultButton>
            </li>
          );
        })}
      </Style.SearchResultContent>
    </Style.SearchResultContainer>
  );
};

export default SearchResultPopup;
