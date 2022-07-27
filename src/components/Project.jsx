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
    <div className="m-auto h-full max-w-[20rem] [perspective:1000px] xsm:w-[20rem]">
      <div
        className={`${rotation} shadow-around relative flex h-full w-full flex-col items-center rounded-2xl shadow-lightgray [transition:transform_1s] [transform-style:preserve-3d] dark:shadow-gray`}
      >
        <div className="flex h-full w-full flex-col items-center [backface-visibility:hidden] [transform:rotateX(0deg)]">
          <img
            className="block h-[13rem] w-full rounded-t-2xl object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="flex h-full w-full flex-col px-4">
            <h3 className="text-min-lg text-contrast my-4 font-semibold sm:my-6">
              {title}
            </h3>
            <p className="mb-6">{description}</p>
            <div className="text-contrast mt-auto flex flex-wrap justify-center">
              {children}
            </div>
          </div>
          <Arrow onClick={handleFrontArrowClick} text="Flip project card" />
        </div>

        <div
          className={`${backVisibility} rotate-y-180 absolute top-0 flex h-full w-full flex-col [backface-visibility:hidden] [transition:visibility_0.5s]`}
        >
          <div className="mt-auto px-8">
            <a className="button" href={demoUrl}>
              <span className="sr-only">{title} </span>Demo
            </a>
            <a className="button" href={codeUrl}>
              <span className="sr-only">{title} </span>Code
            </a>
          </div>
          <Arrow onClick={handleBackArrowClick} text="Flip project card" />
        </div>
      </div>
    </div>
  );
}
