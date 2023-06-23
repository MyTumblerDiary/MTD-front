export interface TypographyProps {
  size:
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'button1'
    | 'button2'
    | 'button3'
    | 'captionBold';
  variant?:
    | 'default'
    | 'accent'
    | 'gray'
    | 'gray2'
    | 'gray3'
    | 'success'
    | 'warning'
    | 'error'
    | 'main'
    | 'high'
    | 'medium'
    | 'primary';
  children: React.ReactNode;
}
