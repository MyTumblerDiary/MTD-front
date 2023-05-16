import { useRouter } from 'next/router';

import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

import * as Style from './Header.style';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <Style.Container>
      <Title>{title}</Title>
      <Style.LoginLink onClick={onClickBack}>
        <Svg.ArrowLeft />
      </Style.LoginLink>
    </Style.Container>
  );
};

export default Header;
