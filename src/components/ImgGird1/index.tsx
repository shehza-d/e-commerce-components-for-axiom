import { ImgGridType } from "../../../types/types";
import { data } from "../../data/index";
import Img from "./Img";

export default function ImgGrid1() {
  // console.log(data);

  return (
    <>
      <section className="bdr h-screen">
        <div className="bdr3 flex">
          <Img data={data[0]} />
          <Img data={data[1]} />
          <Img data={data[2]} />
        </div>
        <div className="bdr4 flex">
          <Img data={data[3]} />
          <Img data={data[4]} />
          <Img data={data[5]} />
        </div>
      </section>
    </>
  );
}
