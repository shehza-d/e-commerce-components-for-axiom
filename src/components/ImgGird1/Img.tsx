import { ImgGridType } from "../../../types/types";

export default function Img(props: { data: ImgGridType }) {
  // export default function Img({ name, imgUrl }: ImgGridType) {
  console.log("Image", props.data.grow);
  return (
    <a
      href="#"
      className={`group flex ${
        props.data.grow ? "flex-grow-[2]" : "flex-grow"
      }`}
    >
      <div
        className="bdr2 flex h-[300px] w-full items-end bg-cover bg-center  bg-no-repeat p-3"
        style={{
          backgroundImage: `url(${props.data.imgUrl})`,
        }}
      >
        <h4 className="group font-bold capitalize text-slate-100 group-hover:underline">
          {props.data.name}
        </h4>
      </div>
    </a>
  );
}
