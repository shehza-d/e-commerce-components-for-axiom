import { ImgGridData, BuyNowData, ImgCardData } from "./data/index";
import { BuyNow2, ImgGrid1, ImgCards3 } from "./components";

function App(): JSX.Element {
  return (
    <main className="App">
      <ImgGrid1 data={ImgGridData} />
      <BuyNow2 data={BuyNowData} />
      <ImgCards3 />
    </main>
  );
}

export default App;
