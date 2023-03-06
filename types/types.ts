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
  UlPoints: {
    li: string;
  }[];
  TableData: {
    us: number;
    us_text: string;
    uk: number;
    europe: number;
  }[];
  ImgSliderData: {
    type: "photo" | "video";
    imgUrl: string;
  }[];
};

export type SizeTableType = {
  us: number;
  us_text: string;
  uk: number;
  europe: number;
}[];

//3
export type ImgCardType = {
  img_url: string;
  date: string;
  title: string;
  link: string;
};
