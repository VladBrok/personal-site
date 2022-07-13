import { BsMoon, BsSun } from "react-icons/bs";

const iconStyles =
  "absolute top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none text-3xl sm:text-2xl bg-white dark:bg-darkgray";

export default function ThemeSelect({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="relative ml-auto mr-6 sm:mr-4">
      <BsMoon className={`${iconStyles} hidden dark:block`} />
      <BsSun className={`${iconStyles} dark:hidden`} />

      <label className="sr-only" htmlFor="themes">
        Select color theme
      </label>
      <select
        className="w-9 h-9 sm:h-8 sm:w-8 cursor-pointer dark:bg-darkgray"
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
