export interface TextareaProps {
  name: string;
  value: string;
  lengthLimit: number;
  size: TextareaSizeProps;
  height: TextareaHeightProps;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

type TextareaSizeProps = 'sm' | 'md' | 'lg' | 'full';
type TextareaHeightProps = 'sm' | 'md';
