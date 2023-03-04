import { MdOutlineArrowRightAlt } from "react-icons/md";
import SizeUL from "./SizeUL";
import Table from "./Table";
import { BuyNowData } from "../../../types/types";

export default function BuyNow2(props: { data: BuyNowData }) {
  return (
    <section className="m-5 flex gap-10 md:m-10">
      <div className="slider bdr sticky top-0 h-screen flex-1">
        <img
          src="https://res.cloudinary.com/deh1sqok6/image/upload/v1677856363/axiom-1/ap2jzysxtaohbxqmcwfs.webp"
          alt=""
        />
      </div>

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
            <span className="group-hover: group-hover: transition-all duration-300 group-hover:-translate-x-3">
              Add to cart
            </span>
            <MdOutlineArrowRightAlt className="relative -right-full text-4xl text-gray-800 transition-all duration-300 group-hover:right-5  group-hover:translate-x-5" />
          </button>
          <button className="h-12 bg-gray-900 text-lg font-bold text-gray-100">
            Buy it now
          </button>
        </div>
        <div className="my-6 text-base font-normal text-slate-700">
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

        <details className="border-b-2 pb-4">
          <summary>
            <h6 className="mt-8 mb-2 font-semibold tracking-widest">
              SIZE CHART
            </h6>
          </summary>
          {/* <div className="flex	w-full table-auto">*/}
          <Table data={props.data.TableData} />
          {/*     </div> */}
        </details>
        <details className="border-b-2 pb-4">
          <summary>
            <h6 className="mt-8 mb-2 font-semibold tracking-widest">
              ASK A QUESTION
            </h6>
          </summary>
          <form className="mt-3 flex flex-col gap-3">
            <label htmlFor="userName">Name</label>
            <input
              id="userName"
              type="text "
              className="border p-2 outline-none focus:border-gray-900"
            />

            <label htmlFor="userEmail">Email</label>
            <input
              id="userEmail"
              type="e "
              className="border p-2 outline-none focus:border-gray-900"
            />

            <label htmlFor="userMessage">Message</label>
            <textarea
              id="userMessage"
              rows={4}
              className="border p-2 outline-none focus:border-gray-900"
            />

            <button
              className="my-6 h-11 w-28  bg-gray-900 px-8 text-lg font-bold text-gray-100"
              type="submit"
            >
              Send
            </button>
          </form>
          <p className="text-gray-700">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
              href="https://policies.google.com/terms"
            >
              Terms of Service apply.
            </a>
          </p>
        </details>
      </div>
    </section>
  );
}
