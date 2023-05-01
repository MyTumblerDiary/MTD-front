import ReactDOM from 'react-dom';

import useToggleSheet from '@/hooks/useToggleSheet';

import BottomSheetFrame from './BottomSheetFrame';

interface Props {
  children: React.ReactNode;
}

export default function ReactPortal({ children }: Props) {
  const container = document.getElementById('portal-root') as HTMLElement;

  const { sheetState, toggleSheet } = useToggleSheet();

  return ReactDOM.createPortal(
    <BottomSheetFrame state={sheetState} handleSheet={toggleSheet}>
      {children}
    </BottomSheetFrame>,
    container
  );
}
