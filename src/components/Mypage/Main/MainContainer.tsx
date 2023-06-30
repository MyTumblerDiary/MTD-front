import Link from 'next/link';
import Typography from '../../Common/Typography/Typography';
import DiscountInformation from '../DiscountInformation/DiscountInformation';

import SUB_INFORMATION from '@/utils/constants/mypageSubInfo';
import Svg from '../../svg';

import * as Style from './MainContainer.style';

const MypageContainer = () => {
  const DiscountInformationProps = {
    count: 26,
    amount: 5900,
    href: '/mypage/discount-report'
  };

  return (
    <Style.MypageContainer>
      <Style.MainContainer>
        <Style.NicknameContainer>
          <Typography size='button1'>뚱당뚱당</Typography>
          <Link href='/mypage/change-nickname'>
            <Svg.Pencil />
          </Link>
        </Style.NicknameContainer>

        <DiscountInformation {...DiscountInformationProps} />

        <Style.SubInfoContainer>
          {Object.values(SUB_INFORMATION).map((info) => {
            const { icon, title, path } = info;
            return (
              <Link href={path} key={`subInfo ${title}`}>
                <Style.SubInfo>
                  {icon}
                  <Typography size='body1'>{title}</Typography>
                  <Svg.ArrowLeft width={26} height={26} />
                </Style.SubInfo>
              </Link>
            );
          })}
        </Style.SubInfoContainer>
      </Style.MainContainer>
    </Style.MypageContainer>
  );
};

export default MypageContainer;
