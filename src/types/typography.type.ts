export interface TypographyProps {
  size: 'body1' | 'body2' | 'body3' | 'caption' | 'button1' | 'button2';
  variant?: 'default' | 'accent' | 'gray' | 'success' | 'error';
  children: React.ReactNode;
}