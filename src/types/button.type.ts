export interface ButtonProps {
  type: 'submit' | 'button';
  size: 'sm' | 'md';
  name: string;
  children: React.ReactNode;
  onClick?: () => void;
}
