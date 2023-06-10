import { useState } from 'react';

export default function useSelectState(initialState: string | number) {
  const [selectedOption, setSelectedOption] =
    useState<typeof initialState>(initialState);

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value }
    } = event;

    setSelectedOption(value);
  };

  return { selectedOption, handleChangeOption };
}
