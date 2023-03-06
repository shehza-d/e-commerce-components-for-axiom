import { ImgCardType } from "../../../types/types";

export default function ImgCards3(props: { data: ImgCardType[] }) {
  return (
    <section className="p-8">
      <div className="flex justify-between py-6">
        <h3 className="text-2xl font-bold">From the journal</h3>
        <button className="p-2">View all</button>
      </div>

      <div className="flex gap-8 ">
        {props.data.map((item, i) => (
          <div className="flex-1" key={i}>
            <a href={`${item.link}`} className={``}>
              <div className="overflow-hidden ">
                <img
                  className="relative z-10 duration-[1500ms] hover:scale-110"
                  src={item.img_url}
                  alt={item.title}
                />
              </div>
              {/* <div
                className="flex aspect-video items-end bg-cover bg-center bg-no-repeat p-3 sm:h-[300px]"
                style={{
                  backgroundImage: `url(${item.img_url})`,
                }}
              ></div> */}
            </a>

            <br />
            <span className="text-sm font-light tracking-widest">
              {item.date}
            </span>
            <br />
            <a
              className="text-2xl font-light capitalize text-slate-700"
              href={item.link}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      <div className="h-screen"></div>
    </section>
  );
}
// <div className="z-5 group-hover:animate-shine absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40">
//   special btn
// </div>
