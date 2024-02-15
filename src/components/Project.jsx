import { useState } from "react";
import { BsDatabase, BsFileEarmarkCode } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import FlipCardButton from "./FlipCardButton";
import Gallery from "./Gallery";
import ProjectLink from "./ProjectLink";

const icons = {
  demo: HiOutlineStatusOnline,
  code: BsFileEarmarkCode,
  db: BsDatabase,
};

export default function Project({
  title,
  imageUrls,
  links,
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
  const projectLinks = links.map((link, i) => (
    <ProjectLink
      key={i}
      url={link.url}
      Icon={icons[link.icon]}
      name={link.name}
      screenReaderOnlyName={title}
    />
  ));

  return (
    <>
      <div className="max-w-[28rem] [perspective:1000px]">
        <div
          className={`${rotation} shadow-around relative flex h-full w-full flex-col items-center rounded-2xl shadow-lightgray [transition:transform_1s] [transform-style:preserve-3d] dark:shadow-gray`}
        >
          <div className="flex h-full w-full flex-col [backface-visibility:hidden] [transform:rotateX(0deg)]">
            <Gallery imageUrls={imageUrls} />
            <div className="flex h-full w-full flex-col px-4">
              <h3 className="text-min-lg text-contrast my-4 font-semibold sm:my-6">
                {title}
              </h3>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              <div className="text-contrast mt-auto mb-3 flex flex-wrap justify-center">
                {children}
              </div>
            </div>
            <FlipCardButton onClick={handleFrontArrowClick} />
          </div>

          <div
            className={`${backVisibility} rotate-y-180 absolute top-0 flex h-full w-full flex-col [backface-visibility:hidden] [transition:visibility_0.5s]`}
          >
            <div className="mt-auto px-8">{projectLinks}</div>
            <FlipCardButton onClick={handleBackArrowClick} />
          </div>
        </div>
      </div>
    </>
  );
}
