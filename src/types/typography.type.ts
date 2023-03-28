export interface TypographyProps {
  size: 'body1' | 'body2' | 'body3' | 'button1' | 'button2';
  variant?: 'default' | 'accent' | 'gray';
  children: React.ReactNode;
}
