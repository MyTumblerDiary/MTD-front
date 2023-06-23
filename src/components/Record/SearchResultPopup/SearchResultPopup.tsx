import * as Style from './SearchResultPopup.style';

import Typography from '../../Common/Typography/Typography';

import { type KakaoResultType, type SelectedPlaceType } from '@/types';

interface SearchResultPopupProps {
  placeSearchResult: KakaoResultType[];
  onClickSearchResult: ({
    place,
    latitude,
    longitude
  }: SelectedPlaceType) => void;
}

const SearchResultPopup = (props: SearchResultPopupProps) => {
  const { placeSearchResult, onClickSearchResult } = props;
  return (
    <Style.SearchResultContainer>
      <Style.SearchResultContent>
        {placeSearchResult.map((place: KakaoResultType) => {
          const { id, place_name, address_name, x, y, road_address_name } =
            place;
          return (
            <li key={id}>
              <Style.SearchResultButton
                type='button'
                onClick={() =>
                  onClickSearchResult({
                    id: id,
                    place: place_name,
                    latitude: Number(y),
                    longitude: Number(x),
                    detailAddress: address_name,
                    streetNameAddress: road_address_name
                  })
                }
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
