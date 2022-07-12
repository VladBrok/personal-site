export default function Project({ title, imageUrl, description, children }) {
  return (
    <div className="flex flex-col items-center max-w-xs m-auto shadow-lg shadow-gray rounded-2xl h-full">
      <img className="w-full block rounded-t-2xl" src={imageUrl} alt={title} />
      <div className="mx-4 h-full flex flex-col">
        <h3 className="font-semibold text-2xl mb-6 mt-6">{title}</h3>
        <p className="text-gray text-lg mb-6">{description}</p>
        <div className="flex flex-wrap justify-center mb-6 mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
