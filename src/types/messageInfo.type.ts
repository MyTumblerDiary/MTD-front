export interface MessageInfoProps {
  title: string;
  message: string;
  price: number;
  newPrice: number;
}

export type NotifyMessageProps = 'suggest' | 'question';
