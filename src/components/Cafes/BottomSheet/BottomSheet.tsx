import * as Style from './BottomSheet.style';

import SheetContent from './SheetContent/SheetContent';
import SheetHeader from './SheetHeader/SheetHeader';

export default function BottomSheet() {
  return (
    <Style.SheetWrapper>
      <SheetHeader />
      <SheetContent />
    </Style.SheetWrapper>
  );
}
