import { Link } from "react-scroll";

export default function MenuItem({ name, onClick, offset = -75 }) {
  return (
    <li>
      <Link
        className="hover:text-highlight inline-block p-4 capitalize hover:cursor-pointer sm:py-0"
        to={name}
        smooth={true}
        offset={offset}
        onClick={onClick}
        href="#"
      >
        {name}
      </Link>
    </li>
  );
}
