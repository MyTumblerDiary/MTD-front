import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const setup = (
    value: string | number = '',
    isLabelVisible: boolean = true,
    isRequired: boolean = false,
    validation: 'default' | 'error' | 'success' = 'default',
    message: string = '',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = () => {}
  ) => {
    const utils = render(
      <Input
        type='text'
        name='email'
        size='md'
        value={value}
        label='email label'
        isLabelVisible={isLabelVisible}
        isRequired={isRequired}
        validation={validation}
        message={message}
        onChange={onChange}
        placeholder='email'
      />
    );

    const input = screen.getByLabelText('email-input');

    return { ...utils, input };
  };

  it('Mounts Input component', () => {
    const { input } = setup();

    expect(input).not.toBeNull();
  });

  it('Change Input value', () => {
    let testValue = 'email value';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      testValue = e.target.value;
    };

    const { input } = setup(
      testValue,
      true,
      false,
      'default',
      '',
      handleChange
    );

    fireEvent.change(input, { target: { value: 'change value' } });

    expect(testValue).toBe('change value');
  });

  it('Shows label', () => {
    const { getByText } = setup('', true, false);

    expect(getByText(/email label/)).not.toBeNull();
  });

  it('Shows error alert icon', () => {
    const { getByRole } = setup('', true, true, 'error');

    expect(getByRole('error_alert')).not.toBeNull();
  });

  it('Shows validation message', () => {
    const { getByText } = setup(
      '',
      true,
      true,
      'error',
      'test validation message'
    );

    expect(getByText('test validation message')).not.toBeNull();
  });
});
