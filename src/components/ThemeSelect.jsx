import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSelect({ onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="relative ml-auto mr-4">
      <BsMoon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none hidden dark:block" />
      <BsSun className="absolute top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none dark:hidden" />

      <select
        className="opacity-0 w-7 h-7 cursor-pointer"
        name="themes"
        id="themes"
        onChange={handleChange}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
