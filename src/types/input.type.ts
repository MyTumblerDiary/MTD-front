export interface InputProps {
  type: 'text' | 'password' | 'email';
  name: string;
  size: 'sm' | 'md';
  value: string | number;
  label: string;
  isLabelVisible?: boolean;
  isRequired?: boolean;
  validation?: 'default' | 'success' | 'error';
  message?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
