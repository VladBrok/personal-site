import Label from "./Label";

export default function InputContainer({
  id,
  label,
  input,
  required,
  isInputError,
  errorMessage = "",
}) {
  const invalidInputStyles = isInputError ? "invalid:border-danger" : "";
  const errorMessageStyles = isInputError ? "peer-invalid:visible" : "";

  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {input({
        className: `input peer ${invalidInputStyles}`,
        id,
        name: id,
        required,
      })}
      <p className={`text-danger invisible mb-2 md:mb-3 ${errorMessageStyles}`}>
        {errorMessage}
      </p>
    </div>
  );
}
