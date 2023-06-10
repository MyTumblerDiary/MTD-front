export type CafesProps = CafeProps[];

export interface CafeProps {
  id: number;
  name: string;
  thumbnail: string;
  streetNameAddress: string;
  latitude: number;
  longitude: number;
  discountPrice: number;
}
