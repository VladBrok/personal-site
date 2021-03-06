import Label from "./Label";

export default function InputContainer({
  id,
  label,
  input,
  required,
  className = "",
  errorMessage = "",
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {input({
        className: `input peer ${className}`,
        id,
        name: id,
        required,
      })}
      <p className="invisible peer-invalid:visible text-red mb-4 md:mb-6">
        {errorMessage}
      </p>
    </div>
  );
}
