import Link from "next/link";

const Dropdown = ({ dropdown  }) => {
  return (
    <ul className={`p-2 m-2 relative md:absolute opacity-90 right-0 z-10 bg-gray-700 shadow-xl rounded ${dropdown ? 'block' : 'hidden'}`}>
      <li>
        <Link href='/categories/home-kitchen' replace>
          <a className="block p-1 my-1 whitespace-nowrap text-sm opacity-100">Home & Kitchen</a>
        </Link>
      </li>
      <li>
        <Link href='/categories/smartphones' replace>
          <a className="block px-1 my-1 whitespace-nowrap text-sm opacity-100">Smartphones</a>
        </Link>
      </li>
      <li>
        <Link href='/categories/toys' replace>
          <a className="block p-1 my-1 whitespace-nowrap text-sm opacity-100">Toys</a>
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;