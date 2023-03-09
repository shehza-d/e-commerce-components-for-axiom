import { ImgCardType } from "../../types/types";

export default function ImgCards3(props: { data: ImgCardType[] }) {
  return (
    <section className="">
      <div className="flex justify-between py-6">
        <h3 className="text-2xl font-bold">From the journal</h3>
        <button className="p-2">View all</button>
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row min-[916px]:flex-row">
        {props.data.map((item, i) => (
          <div className="min-w-[250px] flex-1" key={i}>
            <a href={`${item.link}`} className={``}>
              <div className="overflow-hidden">
                <img
                  className="duration-[1500ms] hover:scale-110 hover:brightness-75"
                  src={item.img_url}
                  alt={item.title}
                />
              </div>
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

      <div className="h-[50vh]"></div>
    </section>
  );
}
// <div className="z-5 group-hover:animate-shine absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40">
//   special btn
// </div>
