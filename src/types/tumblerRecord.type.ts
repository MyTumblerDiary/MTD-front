export type TumblerRecordsProps = TumblerRecordProps[];

export interface TumblerRecordProps {
  createdAt: string;
  deletedAt: any;
  id: string;
  imageFileKey: string;
  memo: string;
  placeType: string;
  prices: number;
  usedAt: string;
  __typename: string;
  store: StoreProps;
}

interface StoreProps {
  name: string;
  streetNameAddress: string;
}

export type ViewProps = 'month' | 'year' | 'century' | 'decade';
