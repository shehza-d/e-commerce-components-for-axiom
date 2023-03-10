import { ImgGridData, BuyNowData, ImgCardData } from "./data/index";
import { BuyNow2, ImgGrid1, ImgCards3 } from "./components";
import { useEffect } from "react";

export default function App(): JSX.Element {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });
    const elements2 = document.querySelectorAll(".scale_triggering_class");
    // Create an intersection observer
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("scale");
        } else {
          entry.target.classList.remove("scale");
        }
      });
    });
    elements2.forEach((element) => {
      observer2.observe(element);
    });
  }, []);

  return (
    <main className="flex flex-col items-center bg-white ">
      <div className="mx-4 max-w-[1220px] min-[470px]:mx-6 cc:mx-10">
        {/* <div className="h-[50vh]"></div> */}
        {/* <div className="h-[50vh]"></div> */}
        <ImgGrid1 data={ImgGridData} />
        <BuyNow2 data={BuyNowData} />
        <ImgCards3 data={ImgCardData} />
        {/* <div className="h-[50vh]"></div> */}
        {/* <div className="h-[50vh]"></div> */}
      </div>
    </main>
  );
}
