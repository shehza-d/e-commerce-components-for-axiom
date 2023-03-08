import { BuyNowType } from "../types/types";

export const BuyNowData: BuyNowType = {
  title: "Chambray Button Down",
  price: {
    s: 58,
    m: 68,
    l: 72,
    xl: 80,
  },
  details:
    "<p className='italic'>This is a demonstration store. You can purchase products like this  from{' '}<a className='S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full' href='https://unitedbyblue.com/'>United By Blue</a></p><br /><p>Like your well-worn pair of jeans in short-sleeve button down form. Features an understated plus-sign pattern.</p>",

  UlPoints: [
    { li: "All-over print" },
    { li: "Full button down placket and collar" },
    { li: "Front left patch pocket" },
    { li: "Natural corozo buttons throughout" },
    { li: "Curved hemline" },
  ],

  TableData: [
    { us: 0, us_text: "extra small", uk: 4, europe: 32 },
    { us: 4, us_text: "small", uk: 6, europe: 34 },
    { us: 6, us_text: "small", uk: 8, europe: 36 },
    { us: 8, us_text: "medium", uk: 10, europe: 38 },
    { us: 10, us_text: "large", uk: 12, europe: 42 },
  ],
  ImgSliderData: [
    {
      type: "video",
      imgUrl:
        "https://res.cloudinary.com/deh1sqok6/video/upload/v1677856366/axiom-1/cgvgbddex7fklthcvdui.mp4",
    },
    {
      type: "photo",
      imgUrl:
        "https://res.cloudinary.com/deh1sqok6/image/upload/v1677856363/axiom-1/byv4oq9xcnr9fqavr4uw.webp",
    },
    {
      type: "photo",
      imgUrl:
        "https://res.cloudinary.com/deh1sqok6/image/upload/v1677856364/axiom-1/nzu6mxpzhnurgxhtpaw7.webp",
    },
    {
      type: "photo",
      imgUrl:
        "https://res.cloudinary.com/deh1sqok6/image/upload/v1677856363/axiom-1/ap2jzysxtaohbxqmcwfs.webp",
    },
  ],
};
