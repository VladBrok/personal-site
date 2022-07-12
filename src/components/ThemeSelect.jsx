import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSelect({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="relative ml-auto mr-6 sm:mr-4">
      <BsMoon className="absolute-center text-3xl sm:text-2xl hidden dark:block" />
      <BsSun className="absolute-center text-3xl sm:text-2xl dark:hidden" />

      <select
        className="opacity-0 w-10 h-10 cursor-pointer dark:bg-darkgray"
        name="themes"
        id="themes"
        onChange={handleChange}
        value={value ?? "system"}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
