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
      <div className="flex flex-col items-center w-full h-full [transition:transform_1s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-around shadow-lightgray dark:shadow-gray rounded-2xl">
        <div className="flex flex-col items-center w-full h-full [backface-visibility:hidden]">
          <img className="w-full block rounded-t-2xl" src={imageUrl} alt="" />
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

        <div className="top-1/2 [transform:rotateY(180deg)_translateY(-20%)] absolute w-full h-full [backface-visibility:hidden] px-8 invisible group-hover:visible [transition:visibility_1s]">
          <a className="button" href={demoUrl}>
            Demo
          </a>
          <a className="button" href={codeUrl}>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
