import Svg from '@/components/svg';
import { type ButtonProps } from '@/types';
import { SIZES } from '@/components/Common/Button/Button.variant';
import Typography from '@/components/Common/Typography/Typography';
import * as Style from './SocialLoginButton.style';

export type SocialLoginButtonType = Pick<
  ButtonProps,
  'size' | 'name' | 'onClick'
>;

const SOCIAL_TYPE_CLASSES = {
  kakao: 'kakao',
  google: 'google',
  apple: 'apple'
};

export interface SocialLoginButtonTheme {
  backgroundColor: string;
  logo: JSX.Element;
  text: string;
  logoSize: string;
  textColor?: string;
}

const BUTTON_THEME = (socialType: string): SocialLoginButtonTheme =>
  ({
    [SOCIAL_TYPE_CLASSES.kakao]: {
      backgroundColor: '#FEE500',
      logo: <Svg.KakaoLogo />,
      logoSize: '18px',
      text: 'Kakao'
    },
    [SOCIAL_TYPE_CLASSES.google]: {
      backgroundColor: '#fff',
      logo: <Svg.GoogleLogo />,
      logoSize: '45px',
      text: 'Google'
    },
    [SOCIAL_TYPE_CLASSES.apple]: {
      backgroundColor: '#000',
      logo: <Svg.AppleLogo />,
      logoSize: '45px',
      text: 'Apple',
      textColor: '#fff'
    }
  }[socialType]);

const SocialLoginButton = ({ ...props }: SocialLoginButtonType) => {
  const { size, name, onClick } = props;
  const sizeStyle = SIZES[size];

  const buttonTheme = BUTTON_THEME(name);
  const textColor = buttonTheme.textColor ? 'accent' : 'default';

  return (
    <Style.SocialButton
      type='button'
      onClick={onClick}
      name={name}
      sizeStyle={sizeStyle}
      buttonTheme={buttonTheme}
    >
      {buttonTheme.logo}
      <Typography size='button2' variant={textColor}>
        {buttonTheme.text}로 로그인
      </Typography>
    </Style.SocialButton>
  );
};

export default SocialLoginButton;
