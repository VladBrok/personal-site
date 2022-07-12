import { Link } from "react-scroll";

export default function MenuItem({ name, onClick, offset = -75 }) {
  return (
    <li>
      <Link
        className="p-4 inline-block hover:underline hover:cursor-pointer hover:text-blue sm:py-1 capitalize"
        to={name}
        smooth={true}
        offset={offset}
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
}
