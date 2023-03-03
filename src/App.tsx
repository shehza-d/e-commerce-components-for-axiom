import { data } from "./data/ImgGirdData";
import { BuyNow2, ImgGrid1, ImgCards3 } from "./components";

function App(): JSX.Element {
  return (
    <main className="App">
      <ImgGrid1 data={data} />
      <BuyNow2 />
      <ImgCards3 />
    </main>
  );
}

export default App;
