import * as Style from './Card.style';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <Style.Card>{children}</Style.Card>;
}
