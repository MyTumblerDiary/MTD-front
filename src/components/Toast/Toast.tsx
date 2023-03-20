import * as Style from './Toast.style';

interface Props {
  children: React.ReactNode;
}

export default function Toast({ children }: Props) {
  return <Style.Toast>{children}</Style.Toast>;
}
