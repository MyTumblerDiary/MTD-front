import { render } from '@testing-library/react';

import Temp from '../Temp';

describe('Temp', () => {
  it('Shows Temp component', () => {
    const { queryByText } = render(<Temp />);

    expect(queryByText(/Temp/)).not.toBeNull();
  });
});
