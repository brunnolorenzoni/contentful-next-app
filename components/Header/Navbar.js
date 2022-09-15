import Link from "next/link";
import Dropdown from "components/Header/Dropdown";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  const handlerMouseEnterMenu = () => setDropdown(true);
  const handlerMouseLeaveMenu = () => setDropdown(false);

  return (
    <nav className="flex flex-row justify-between items-center flex-wrap">
      <button className="block md:hidden"> 
        <GiHamburgerMenu />
      </button>

      <ul className="flex flex-row justify-center items-center flex-wrap">
        <li className="p-2 m-2">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className="p-2 m-2 ">
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li className="p-2 m-2"
          onMouseEnter={handlerMouseEnterMenu}
          onMouseLeave={handlerMouseLeaveMenu}
        >
          <button
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >Categories</button>
          <Dropdown dropdown={dropdown} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;