import * as Style from './UserLocation.style';

import { useReactiveVar } from '@apollo/client';
import userLocationState from '@/store/userLocation';

import { useAddressByCoords, useCurrentCoords } from '@/hooks';

import Svg from '@/components/svg';
import Typography from '@/components/Common/Typography/Typography';

export default function UserLocation() {
  const userLocation = useReactiveVar(userLocationState);
  const { isLoading, getUserCoords } = useCurrentCoords();
  useAddressByCoords();

  return (
    <Style.UserLocationWrapper>
      <Style.UserLocationBar>
        <Style.UserLocation>
          <Style.SetLocation>
            <Svg.Marker />
            <Typography size='button3' variant='gray3'>
              위치
            </Typography>
          </Style.SetLocation>
          <Style.Location>
            {isLoading ? (
              <Typography size='body3' variant='gray2'>
                주소 가져오는중..
              </Typography>
            ) : (
              <Typography size='body3'>{userLocation.address}</Typography>
            )}
          </Style.Location>
        </Style.UserLocation>
        <Style.SetButtonWrapper>
          <Svg.Location onClick={getUserCoords} />
        </Style.SetButtonWrapper>
      </Style.UserLocationBar>
    </Style.UserLocationWrapper>
  );
}
