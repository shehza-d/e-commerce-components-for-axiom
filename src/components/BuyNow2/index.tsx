import { MdOutlineArrowRightAlt } from "react-icons/md";
import SizeUL from "./SizeUL";

export default function BuyNow2() {
  return (
    <section className="m-5 flex gap-10 md:m-10">
      <div className="slider bdr flex-1"></div>

      <div className="details  flex-1">
        <h2 className="text-4xl font-bold">Chambray Button Down</h2>
        <span className="block divide-y divide-gray-300  py-6 text-2xl font-light">
          $68
        </span>

        <h6 className="font-semibold tracking-widest">SIZE</h6>
        <SizeUL />
        {/*  */}
        <div className="btns flex flex-col gap-2">
          <button className="group flex h-12 items-center justify-around border-2 border-slate-800 bg-transparent text-lg font-bold text-slate-800 transition-all delay-300 duration-1000">
            <div></div>
            <span> Add to cart</span>
            <MdOutlineArrowRightAlt className="hidden text-4xl text-gray-800 group-hover:inline group-hover:translate-x-5" />
          </button>
          <button className="group h-12 bg-gray-900 text-lg font-bold text-white transition-all  delay-300 duration-300">
            Buy it now
          </button>
        </div>
        <div className="my-6 text-base font-normal">
          <p className="italic">
            This is a demonstration store. You can purchase products like this
            from{" "}
            <a
              className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
              href="https://unitedbyblue.com/"
            >
              United By Blue
            </a>
          </p>
          <br />
          <p className="">
            Like your well-worn pair of jeans in short-sleeve button down form.
            Features an understated plus-sign pattern.
          </p>
        </div>
        <ul className="list-inside list-disc py-2 px-8 font-light">
          <li> All-over print </li>
          <li> Full button down placket and collar </li>
          <li> Front left patch pocket </li>
          <li> Natural corozo buttons throughout </li>
          <li> Curved hemline</li>
        </ul>

        <select name="" id=""></select>
      </div>
    </section>
  );
}
