export interface TextareaProps {
  name: string;
  value: string;
  lengthLimit: number;
  size: TextareaSizeProps;
  height: TextareaHeightProps;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

type TextareaSizeProps = 'sm' | 'md' | 'lg' | 'full';
type TextareaHeightProps = 'sm' | 'md';
