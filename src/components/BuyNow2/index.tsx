import { MdOutlineArrowRightAlt } from "react-icons/md";
import SizeUL from "./SizeUL";
import Table from "./Table";
import { BuyNowType, ImgSliderType } from "../../types/types";
// import PortableText from "react-portable-text";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// export default function BuyNow2({TableData,ImgSliderData,UlPoints,details,price,title}:BuyNowType) {
export default function BuyNow2(props: { data: BuyNowType }) {
  const [imgSrc, setImgSrc] = useState<ImgSliderType>(
    props.data.ImgSliderData[0]
  );

  return (
    <section className="flex flex-wrap md:gap-10">
      <div className="slider top-0 flex h-screen min-w-[250px] flex-1 justify-center pt-32 mm:min-w-[350px] cc:min-w-[450px] md:sticky">
        <div className="imgSidebarBtn order-last ml-6 flex flex-col gap-5 md:order-none min-[770px]:mr-2 min-[830px]:mr-6">
          {props.data.ImgSliderData.map((item, i) => {
            return (
              <div
                className={`cursor-pointer ${
                  item.active ? "ring-2 ring-gray-800" : ""
                }`}
                key={i}
                onClick={() => setImgSrc(item)}
                // onClick={() => setImgSrc({ ...item, active: true })}
              >
                {item.type === "photo" ? (
                  <img
                    src={item.imgUrl}
                    className="h-[75px] w-[50px] min-[450px]:h-[95px] min-[450px]:w-[75px]"
                    // width={75}
                    // height={75}
                    alt="shop item for sell"
                  />
                ) : item.type === "video" ? (
                  <img
                    src={item.thumbnail}
                    className="h-[75px] w-[50px] min-[450px]:h-[95px] min-[450px]:w-[75px]"
                    // width={75}
                    // height={75}
                    alt="shop item for sell"
                  />
                ) : (
                  <p>No Image found</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mainSlider mb-2 flex h-[70%]  snap-x snap-mandatory justify-center ml:h-[80%] md:h-[90%]">
          {/* {props.data.ImgSliderData.map((item, i) => { */}
          {imgSrc.type === "photo" ? (
            <img
              className="w-fit cursor-zoom-in snap-center"
              src={imgSrc.imgUrl}
              // width={70}
              // height={30}
              alt="shop item for sell"
            />
          ) : imgSrc.type === "video" ? (
            <video
              // width="450"
              // height="500"
              className="cursor-grab self-start"
              muted
              autoPlay
            >
              <source src={imgSrc.imgUrl} type="video/mp4" />
            </video>
          ) : (
            <p>No Image found</p>
          )}
        </div>
      </div>

      <div className="details flex-1 mm:min-w-[300px]">
        <h2 className="text-4xl font-bold">{props.data.title}</h2>
        <span className="block divide-y divide-gray-300  py-6 text-2xl font-light">
          ${props.data.price.m}
        </span>
        <h6 className="font-semibold tracking-widest">SIZE</h6>
        <SizeUL />
        {/*  */}
        <div className="flex flex-col gap-2">
          <button className="group flex h-12 items-center justify-around border-2 border-slate-800 bg-transparent text-lg font-bold text-slate-800 transition-all delay-300 duration-1000">
            <div className="hidden w-9 cc:block"></div>
            <span className="transition-all duration-300 group-hover:-translate-x-3">
              Add to cart
            </span>
            <MdOutlineArrowRightAlt className="relative -right-8 -z-20 hidden text-4xl text-gray-800 transition-all duration-300 group-hover:right-7 group-hover:z-10 group-hover:translate-x-5 cc:block lg:-right-20" />
          </button>
          <button className="h-12 bg-gray-900 text-lg font-bold text-gray-100">
            Buy it now
          </button>
        </div>
        <div className="my-6 text-base font-normal text-slate-700">
          {props.data.details}

          {/*     <PortableText
               // Pass in block content straight from Sanity.io
               content={props.data.details}
               // Optionally override marks, decorators, blocks, etc. in a flat
               // structure without doing any gymnastics
               serializers={{
                 h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                 li: ({ children }) => <li className="special-list-item">{children}</li>,
                 someCustomType: YourComponent,
               }}
    /> */}

          {/* <p className="italic">
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
          </p> */}
        </div>
        <ul className="list-inside list-disc py-2 px-8 font-light">
          {props.data.UlPoints.map((item, i) => (
            <li key={i}>{item.li}</li>
          ))}
        </ul>

        <details className="3 group border-b-2 pb-4 transition-all delay-300 duration-1000">
          <summary className=" mt-8 flex cursor-pointer items-center justify-between py-3 transition-all delay-300 duration-1000">
            <h6 className="text-sm font-semibold tracking-widest">
              SIZE CHART
            </h6>
            <IoIosArrowDown className="group-open:rotate-180" />
          </summary>
          <Table data={props.data.TableData} />
        </details>
        <details className="group border-b-2 pb-4">
          <summary className="mt-8 flex cursor-pointer items-center justify-between py-3">
            <h6 className="text-sm font-semibold tracking-widest">
              ASK A QUESTION
            </h6>
            <IoIosArrowDown className="group-open:rotate-180" />
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
