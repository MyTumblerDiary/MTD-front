import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const setup = (onClick: () => void = () => {}) => {
    const utils = render(
      <Button name='test' size='md' onClick={onClick}>
        테스트
      </Button>
    );

    const button = screen.getByLabelText('test-button');

    return { ...utils, button };
  };

  it('Mounts Button component', () => {
    const { button } = setup();

    expect(button).not.toBeNull();
  });

  it('Click Button', () => {
    const handleClick = jest.fn();

    const { button } = setup(handleClick);

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
