import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSelect({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="relative ml-auto mr-6 sm:mr-4">
      <BsMoon className="select-icon hidden dark:block" />
      <BsSun className="select-icon dark:hidden" />

      <label className="sr-only" htmlFor="themes">
        Select color theme
      </label>
      <select
        className="bg-contrast h-9 w-9 cursor-pointer appearance-none p-1 sm:h-8 sm:w-8"
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
