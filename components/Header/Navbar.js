import Link from "next/link";
import Dropdown from "components/Header/Dropdown";
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose, IoChevronBackCircleOutline } from 'react-icons/io5'
import { useState } from 'react';

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown(prev => !prev);
  }
  const toggleMenuHamburguer = () => setToogleMenu(prev => !prev);

  return (
    <nav className="flex flex-row justify-between items-center flex-wrap ">
      <button className="block md:hidden" onClick={toggleMenuHamburguer}> 
        <GiHamburgerMenu className="text-3xl" />
      </button>

      <ul className={`${toogleMenu ? 'flex fixed z-20 top-0 left-0 w-full min-h-screen	bg-gray-900' : 'hidden'} md:flex md:relative md:min-h-min flex-row content-center justify-center items-center flex-wrap`} >
        
        <button className="block md:hidden fixed top-10 right-10" onClick={toggleMenuHamburguer}> 
          <IoClose className="text-3xl" />
        </button>
        
        <li className="block md:inline-block w-full md:w-min text-center p-2 m-2">
          <Link href='/' replace>
            <a>Home</a>
          </Link>
        </li>
        <li className="block md:inline-block w-full md:w-min text-center p-2 m-2">
          <Link href='/about' replace>
            <a>About</a>
          </Link>
        </li>
        <li className="block md:inline-block w-full md:w-min text-center p-2 m-2"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <button
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >Categories</button>
          <Dropdown dropdown={dropdown} />
        </li>

        <button className="block md:hidden mt-20" onClick={toggleMenuHamburguer}> 
          <IoChevronBackCircleOutline className="text-3xl" />
        </button>

      </ul>
    </nav>
  );
};

export default Navbar;