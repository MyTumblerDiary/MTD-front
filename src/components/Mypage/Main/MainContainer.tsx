import Link from 'next/link';
import Typography from '../../Common/Typography/Typography';
import DiscountInformation from '../DiscountInformation/DiscountInformation';

import { useMypageInfo } from '@/hooks';

import SUB_INFORMATION from '@/utils/constants/mypageSubInfo';
import Svg from '../../svg';

import * as Style from './MainContainer.style';

const MypageContainer = () => {
  const { data } = useMypageInfo();

  const DiscountInformationProps = {
    count: data?.tumblerRecords.totalUsedTumbler,
    amount: data?.tumblerRecords.totalDiscount,
    href: '/mypage/discount-report'
  };

  return (
    <Style.MypageContainer>
      <Style.MainContainer>
        <Style.NicknameContainer>
          <Typography size='button1'>{data?.user.nickname}</Typography>
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
