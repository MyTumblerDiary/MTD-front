export interface InputProps {
  type: InputTypeProps;
  name: InputNameProps;
  size: InputSizeProps;
  value: string | number;
  label: string;
  isLabelVisible?: boolean;
  isRequired?: boolean;
  validation?: InputValidationProps;
  message?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

export type InputNameProps =
  | 'email'
  | 'emailCheck'
  | 'username'
  | 'password'
  | 'passwordCheck'
  | 'place'
  | 'tumblerImage'
  | 'isDiscounted'
  | 'search'
  | 'place'
  | 'currentPassword';

export type InputValidationProps = 'default' | 'success' | 'error';

type InputTypeProps = 'text' | 'password' | 'email' | 'search';

type InputSizeProps = 'sm' | 'md' | 'lg' | 'full';

export type UserInputPramProps = {
  value: string;
  validation: InputValidationProps;
  message: string;
};
