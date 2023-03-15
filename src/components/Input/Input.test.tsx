import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const setup = (
    value: string | number = '',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = () => {}
  ) => {
    const utils = render(
      <Input
        type='text'
        name='test'
        size='md'
        value={value}
        onChange={onChange}
        placeholder='test'
      />
    );

    const input = screen.getByLabelText('test-input');

    return { ...utils, input };
  };

  it('Mounts Input component', () => {
    const { input } = setup();

    expect(input).not.toBeNull();
  });

  it('Change Input value', () => {
    let testValue = 'test value';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      testValue = e.target.value;
    };

    const { input } = setup(testValue, handleChange);

    fireEvent.change(input, { target: { value: 'change value' } });

    expect(testValue).toBe('change value');
  });
});
