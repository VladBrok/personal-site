export default function Project({
  title,
  imageUrl,
  demoUrl,
  codeUrl,
  description,
  children,
}) {
  return (
    <div className="max-w-[20rem] xsm:w-[20rem] m-auto h-full [perspective:1000px] group">
      <div className="flex flex-col items-center w-full h-full [transition:transform_1s] [transform-style:preserve-3d] group-hover:rotate-y-180 focus-within:rotate-y-180 shadow-around shadow-lightgray dark:shadow-gray rounded-2xl">
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
            <div className="flex flex-wrap justify-center mb-4 mt-auto text-contrast sm:mb-6">
              {children}
            </div>
          </div>
        </div>

        <div className="top-1/2 [transform:rotateY(180deg)_translateY(-20%)] absolute w-full h-full [backface-visibility:hidden] px-8">
          <a className="button" href={demoUrl}>
            <span className="sr-only">{title} </span>Demo
          </a>
          <a className="button" href={codeUrl}>
            <span className="sr-only">{title} </span>Code
          </a>
        </div>
      </div>
    </div>
  );
}
