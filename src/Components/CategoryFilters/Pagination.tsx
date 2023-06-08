import Link from "next/link";

const Pagination = () => {
  return (
    <nav className="mb-10 flex items-center justify-center">
      <ul className="flex gap-2">
        <li>
          <Link href={"#"} className="prose-heading-7-600 mr-2">
            {"< Anterior"}
          </Link>
        </li>
        <li>1</li>
        <li>
          <p>de</p>
        </li>
        <li>2</li>
        <li>
          <Link href={"#"} className="prose-heading-7-600 ml-2">
            {"Seguinte >"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
