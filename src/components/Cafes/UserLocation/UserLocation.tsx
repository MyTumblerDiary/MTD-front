import * as Style from './UserLocation.style';

import Svg from '@/components/svg';
import Typography from '@/components/Common/Typography/Typography';

interface UserLocationProps {
  location: string;
  isLoading: boolean;
  handleSetLocation: () => void;
}

export default function UserLocation({
  location,
  isLoading,
  handleSetLocation
}: UserLocationProps) {
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
              <Typography size='body3'>{location}</Typography>
            )}
          </Style.Location>
        </Style.UserLocation>
        <Style.SetButtonWrapper>
          <Svg.Location onClick={handleSetLocation} />
        </Style.SetButtonWrapper>
      </Style.UserLocationBar>
    </Style.UserLocationWrapper>
  );
}
