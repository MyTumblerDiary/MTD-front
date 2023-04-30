import { useCallback } from 'react';

import { useReactiveVar } from '@apollo/client';

import sheetVar from '@/store/sheet';

export default function useToggleSheet() {
  const sheetState = useReactiveVar(sheetVar);

  const toggleSheet = useCallback(() => {
    sheetVar(!sheetState);
  }, [sheetState]);

  return { sheetState, toggleSheet };
}
