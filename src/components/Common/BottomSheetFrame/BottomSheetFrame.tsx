import Typography from '../Typography/Typography';
import * as Style from './BottomSheetFrame.style';

interface BottomSheetFrameProps {
  handleSheet: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
  state: boolean;
  children: React.ReactNode;
}

export default function BottomSheetFrame({
  handleSheet,
  state,
  children
}: BottomSheetFrameProps) {
  return state ? (
    <Style.BottomSheetWrapper>
      <Style.Background onClick={(e) => handleSheet(e)} />
      <Style.SheetBlock>
        <Style.SheetContents>{children}</Style.SheetContents>
        <Style.Close onClick={(e) => handleSheet(e)}>
          <Typography size='button2' variant='main'>
            닫기
          </Typography>
        </Style.Close>
      </Style.SheetBlock>
    </Style.BottomSheetWrapper>
  ) : (
    <></>
  );
}
