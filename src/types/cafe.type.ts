export type CafesProps = CafeProps[];

export interface CafeProps {
  id: number;
  name: string;
  thumbnail: string;
  street_name_address: string;
  latitude: number;
  longitude: number;
  discount_price: number;
}
