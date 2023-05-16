import { useRouter } from 'next/router';

import Button from '@/components/Common/Button/Button';
import Title from '@/components/Common/Heading/Title';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

import { type ButtonProps } from '@/types';

import * as Style from './ExistingEmail.style';

interface ExistingEmailContainerProps {
  email: string;
}

const ExistingEmailContainer = ({ email }: ExistingEmailContainerProps) => {
  const router = useRouter();

  const clickLoginRouter = () => {
    router.replace('/login');
  };

  const RouteLoginButtonProps: ButtonProps = {
    type: 'button',
    size: 'md',
    name: 'routeLogin',
    children: (
      <Typography size='button1' variant='accent'>
        로그인 페이지로 이동
      </Typography>
    ),
    onClick: clickLoginRouter
  };

  return (
    <Style.PageContainer>
      <Style.SvgContainer>
        <Svg.Tree />
      </Style.SvgContainer>

      <Style.MessageContainer>
        <Title>
          {email}은 <br /> 이미 가입된 계정입니다.
        </Title>
      </Style.MessageContainer>

      <Button {...RouteLoginButtonProps} />
    </Style.PageContainer>
  );
};

export default ExistingEmailContainer;
