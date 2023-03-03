// import { data } from "./data/ImgGirdData";
import { ImgGridType } from "../../../types/types";
import Img from "./Img";

export default function ImgGrid1(props: { data: ImgGridType[] }) {
  // console.log(data)

  return (
    <>
      <section className="m-7 min-h-screen">
        <div className="flex flex-wrap">
          <Img data={props.data[0]} />
          <Img data={props.data[1]} />
          <Img data={props.data[2]} />
        </div>
        <div className="flex flex-wrap">
          <Img data={props.data[3]} />
          <Img data={props.data[4]} />
          <Img data={props.data[5]} />
        </div>
      </section>
    </>
  );
}
