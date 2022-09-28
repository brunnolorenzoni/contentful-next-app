import Link from "next/link";

const Dropdown = ({ dropdown }) => {
  return (
    <ul className={`m-2 relative md:absolute opacity-90 right-0 z-10 bg-gray-700 shadow-xl rounded ${dropdown ? 'block' : 'hidden'}`}>
      <li>
        <Link href='/categories/home-kitchen'>
          <a className="block px-4 py-1 whitespace-nowrap text-sm opacity-100 hover:bg-gray-900 rounded-tl rounded-tr">Home & Kitchen</a>
        </Link>
      </li>
      <li>
        <Link href='/categories/smartphones'>
          <a className="block px-4 py-1 whitespace-nowrap text-sm opacity-100 hover:bg-gray-900">Smartphones</a>
        </Link>
      </li>
      <li>
        <Link href='/categories/toys'>
          <a className="block px-4 py-1 whitespace-nowrap text-sm opacity-100 hover:bg-gray-900 rounded-bl rounded-br">Toys</a>
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;