import { ImgGridType } from "../../../types/types";

export default function Img(props: { data: ImgGridType }) {
  // export default function Img({ data }: ImgGridType) {
  return (
    <a
      href={`www.facebook.com/${props.data.name}`}
      className={`group flex ${
        props.data.grow ? "w-80 flex-grow-[2]" : "w-32 flex-grow"
      }`}
    >
      <div
        className="flex h-[270px] w-full items-end bg-cover bg-center bg-no-repeat  p-3 sm:h-[300px]"
        style={{
          backgroundImage: `url(${props.data.imgUrl})`,
        }}
      >
        <h4 className="S_Underline relative inline-block font-bold capitalize text-slate-100 underline-offset-4 transition-all duration-300 group-hover:-translate-y-8 group-hover:after:left-0  group-hover:after:w-full">
          {props.data.name}
        </h4>
      </div>
    </a>
  );
}
