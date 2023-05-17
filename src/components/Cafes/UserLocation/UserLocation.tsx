import * as Style from './UserLocation.style';

import Svg from '@/components/svg';
import Typography from '@/components/Common/Typography/Typography';

interface UserLocationProps {
  location: string;
  handleSetLocation: () => void;
}

export default function UserLocation({
  location,
  handleSetLocation
}: UserLocationProps) {
  return (
    <Style.UserLocationWrapper>
      <Style.UserLocationBar>
        <Style.UserLocation>
          <Style.SetLocation>
            <Svg.Marker />
            <Typography size='button3' variant='gray3'>
              설정 위치
            </Typography>
          </Style.SetLocation>
          <Style.Location>
            <Typography size='body3'>{location}</Typography>
          </Style.Location>
        </Style.UserLocation>
        <Style.SetButtonWrapper>
          <Svg.Location onClick={handleSetLocation} />
        </Style.SetButtonWrapper>
      </Style.UserLocationBar>
    </Style.UserLocationWrapper>
  );
}
