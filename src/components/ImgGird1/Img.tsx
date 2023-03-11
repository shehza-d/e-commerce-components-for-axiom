import { ImgGridType } from "../../types/types";

export default function Img(props: { data: ImgGridType }) {
  // export default function Img({ data }: ImgGridType) {
  return (
    <a
      href={`www.facebook.com/${props.data.name}`}
      // style={{ animation: `fadeInAnimation ease ${props.data.fade_duration}s` }}
      className={`animation_triggering_class group flex overflow-hidden
      ${props.data.grow ? "w-full md:w-1/2" : "w-1/2 md:w-1/4"}`}
    >
      <div
        className="scale_triggering_class flex h-[150px] w-full items-end bg-cover bg-center bg-no-repeat md:h-[270px]"
        style={{
          backgroundImage: `url(${props.data.imgUrl})`,
        }}
      >
        <h4 className="S_Underline relative inline-block p-3 text-2xl font-bold capitalize text-slate-100 underline-offset-4 transition-all duration-300 group-hover:-translate-y-4 group-hover:after:left-0 group-hover:after:w-full">
          {props.data.name}
        </h4>
      </div>
    </a>
  );
}
