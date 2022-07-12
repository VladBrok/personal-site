import Label from "./Label";

export default function InputContainer({ id, label, input }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {input({
        className:
          "block rounded-md p-1 border mt-1 mb-4 border-lightgray w-full md:mb-6 md:py-2 md:px-3",
        id,
        name: id,
      })}
    </div>
  );
}
