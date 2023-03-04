//1
export type ImgGridType = {
  name: string;
  imgUrl: string;
  grow: boolean;
};

//2
export type BuyNowData = {
  title: string;
  price: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  details: string;
  imgUrl: string;
  grow: boolean;
  TableData: {
    us: number;
    us_text: string;
    uk: number;
    europe: number;
  }[];
};
export type SizeTableType = {
  us: number;
  us_text: string;
  uk: number;
  europe: number;
}[];
