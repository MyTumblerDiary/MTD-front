import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const renderer = (
    value: string | number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = () => {}
  ) => {
    const { getByLabelText } = render(
      <Input
        type='text'
        name='test'
        size='md'
        value={value}
        onChange={onChange}
        placeholder='test'
      />
    );

    return { getByLabelText };
  };

  it('Show Input component', () => {
    const { getByLabelText } = renderer('');
    expect(getByLabelText('test')).not.toBeNull();
  });
});
