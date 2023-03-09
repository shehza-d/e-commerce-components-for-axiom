import { ImgGridData, BuyNowData, ImgCardData } from "./data/index";
import { BuyNow2, ImgGrid1, ImgCards3 } from "./components";

export default function App(): JSX.Element {
  return (
    <main className="flex flex-col items-center bg-white ">
      <div className="max-w-[1220px] min-[470px]:mx-6 cc:mx-10">
        <ImgGrid1 data={ImgGridData} />
        <BuyNow2 data={BuyNowData} />
        <ImgCards3 data={ImgCardData} />
      </div>
    </main>
  );
}
