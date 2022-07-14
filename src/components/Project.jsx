import Arrow from "./Arrow";
import { useState } from "react";

export default function Project({
  title,
  imageUrl,
  demoUrl,
  codeUrl,
  description,
  children,
}) {
  const [isRotated, setIsRotated] = useState(false);

  function handleFrontArrowClick() {
    setIsRotated(true);
  }

  function handleBackArrowClick() {
    setIsRotated(false);
  }

  const rotation = isRotated ? "rotate-y-180" : "";
  const backVisibility = isRotated ? "visible" : "invisible";

  return (
    <div className="max-w-[20rem] xsm:w-[20rem] m-auto h-full [perspective:1000px]">
      <div
        className={`${rotation} relative flex flex-col items-center w-full h-full [transition:transform_1s] [transform-style:preserve-3d] shadow-around shadow-lightgray dark:shadow-gray rounded-2xl`}
      >
        <div className="flex flex-col items-center w-full h-full [backface-visibility:hidden]">
          <img
            className="w-full h-[13rem] block rounded-t-2xl object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="px-4 flex flex-col w-full h-full">
            <h3 className="font-semibold text-min-lg my-4 text-contrast sm:my-6">
              {title}
            </h3>
            <p className="mb-6">{description}</p>
            <div className="flex flex-wrap justify-center mt-auto text-contrast">
              {children}
            </div>
          </div>
          <Arrow onClick={handleFrontArrowClick} />
        </div>

        <div
          className={`${backVisibility} flex flex-col absolute top-0 rotate-y-180 w-full h-full [backface-visibility:hidden] [transition:visibility_0.5s]`}
        >
          <div className="mt-auto px-8">
            <a className="button" href={demoUrl}>
              <span className="sr-only">{title} </span>Demo
            </a>
            <a className="button" href={codeUrl}>
              <span className="sr-only">{title} </span>Code
            </a>
          </div>
          <Arrow onClick={handleBackArrowClick} />
        </div>
      </div>
    </div>
  );
}
