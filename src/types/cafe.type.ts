export type CafesProps = CafeProps[];

export interface CafeProps {
  id: number;
  name: string;
  imageFileKey: string;
  streetNameAddress: string;
  latitude: number;
  longitude: number;
  discountPrice: number;
}
