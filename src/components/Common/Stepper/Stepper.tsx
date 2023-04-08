import { useState } from 'react';

import * as Style from './Stepper.style';

import {
  type ButtonProps,
  type StepArrayProps,
  type StepButtonNameProps
} from '@/types';

import Typography from '../Typography/Typography';
import Button from '../Button/Button';

interface StepperProps {
  steps: StepArrayProps;
  stepButtonNames: StepButtonNameProps;
  isValidateSubmit: boolean;
  handleSubmit: () => void;
}

export default function Stepper({
  steps,
  stepButtonNames,
  isValidateSubmit,
  handleSubmit
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackToIndex = (index: number) => {
    if (index > activeStep) {
      return;
    }

    setActiveStep(index);
  };

  const isStepEnded = activeStep === steps.length - 1;

  const isStepActive = (index: number) => index <= activeStep;

  const buttonHandlerByStepEnded = isStepEnded ? handleSubmit : handleNext;

  const buttonValidationByStepEnded = isStepEnded
    ? !isValidateSubmit
    : !steps[activeStep].isNextButtonActive;

  const buttonNameByStepEnded = isStepEnded
    ? stepButtonNames.end
    : stepButtonNames.next;

  const isStepEndedOfIndex = (index: number) => index === steps.length - 1;

  const circleVariantOfIndex = (index: number) =>
    isStepActive(index) ? 'accent' : 'gray2';

  const labelVariantOfIndex = (index: number) =>
    isStepActive(index) ? 'main' : 'gray2';

  const nextButtonProps: ButtonProps = {
    name: 'next',
    type: 'button',
    size: 'lg',
    disabled: buttonValidationByStepEnded,
    onClick: buttonHandlerByStepEnded,
    children: (
      <Typography size='button1' variant='accent'>
        {buttonNameByStepEnded}
      </Typography>
    )
  };

  return (
    <Style.StepperContainer>
      <Style.Steps>
        {steps.map(({ label }, index) => (
          <Style.Step key={index} onClick={() => handleBackToIndex(index)}>
            <Style.StepCircle isActive={isStepActive(index)}>
              <Typography size='body2' variant={circleVariantOfIndex(index)}>
                {index + 1}
              </Typography>
            </Style.StepCircle>
            <Style.Label>
              <Typography size='caption' variant={labelVariantOfIndex(index)}>
                {label}
              </Typography>
            </Style.Label>
            {isStepEndedOfIndex(index) || (
              <Style.StepLine isActive={isStepActive(index)} />
            )}
          </Style.Step>
        ))}
      </Style.Steps>
      <Style.StepContents>
        <Typography size='body1' variant='main'>
          {steps[activeStep].stepDescription || ''}
        </Typography>
        {steps[activeStep].children}
      </Style.StepContents>
      <Style.ButtonWrapper>
        <Button {...nextButtonProps} />
      </Style.ButtonWrapper>
    </Style.StepperContainer>
  );
}
