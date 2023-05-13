import { InputValidationProps, UserInputPramProps } from '.';

type UserFileInputPramProps = {
  value: File;
  validation: InputValidationProps;
  message: string;
};

export interface RecordInputTypes {
  tumblerImage: UserFileInputPramProps;
  place: UserInputPramProps;
  recordDate: {
    value: Date;
  };
  previewImage: {
    value: string;
  };
}
