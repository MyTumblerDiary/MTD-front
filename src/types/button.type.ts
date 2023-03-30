export interface ButtonProps {
  type: 'submit' | 'button';
  size: 'xsm' | 'sm' | 'md' | 'lg';
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
