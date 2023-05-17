import Link from 'next/link';
import MainHeader from '../Common/MainHeader/MainHeader';
import Typography from '../Common/Typography/Typography';

import SUB_INFORMATION from '@/utils/constants/mypageSubInfo';
import Svg from '../svg';

import * as Style from './MypageContainer.style';

const MypageContainer = () => {
  return (
    <Style.MypageContainer>
      <MainHeader title='마이페이지' />
      <Style.MainContainer>
        <Style.NicknameContainer>
          <Typography size='button1'>뚱당뚱당</Typography>
          <Link href='/'>
            <Svg.Pencil />
          </Link>
        </Style.NicknameContainer>

        <Style.MainInfoContainer>
          <Style.MainInfo>
            <Typography size='button1'>26회</Typography>
            <Typography size='body2'>할인 받은 횟수</Typography>
          </Style.MainInfo>
          <Style.VerticalLine />
          <Style.MainInfo>
            <Typography size='button1'>5,900원</Typography>
            <Typography size='body2'>할인 받은 금액</Typography>
          </Style.MainInfo>
        </Style.MainInfoContainer>

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
