import * as Style from './Heading.style';

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return <Style.Title>{children}</Style.Title>;
}
