//1
export type ImgGridType = {
  name: string;
  imgUrl: string;
  grow: boolean;
  fade_duration: number;
};

//2
export type ImgSliderType = {
  type: "photo" | "video";
  imgUrl: string;
  active: boolean;
  thumbnail?: string;
};
export type BuyNowType = {
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
  ImgSliderData: ImgSliderType[];
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
