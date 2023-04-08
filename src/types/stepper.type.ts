export type StepArrayProps = Array<StepProps>;

export interface StepProps {
  label: string;
  stepDescription?: string;
  isNextButtonActive?: boolean;
  children: React.ReactNode;
}

export interface StepButtonNameProps {
  next: string;
  end: string;
}
