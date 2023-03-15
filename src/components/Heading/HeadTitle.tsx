import * as Style from './Heading.style';

interface Props {
  children: React.ReactNode;
}

export default function HeadTitle({ children }: Props) {
  return <Style.HeadTitle>{children}</Style.HeadTitle>;
}
