import Link from "next/link";
import Dropdown from "components/Dropdown";
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiShoppingBag } from 'react-icons/hi'
import { useState } from "react";


const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropDown = (e) => {
    console.log('handler', { e, showDropdown })
    setShowDropdown(!showDropdown)
  }

  return (
    <header className="p-2 min-h-[60px] bg-gray-900 text-white flex flex-row justify-between flex-wrap">
      
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Link href='/'>
          <a>
            <div className="flex justify-center items-center">
              <HiShoppingBag className="inline-block mr-1 text-xl"/>
              <h1 className="inline-block">Beautiful Shop</h1>
            </div>
          </a>
        </Link>
      </div>

      <nav className="flex flex-row justify-between items-center flex-wrap">
        <button className="block md:hidden"> 
          <GiHamburgerMenu />
        </button>
        <div className="flex flex-row justify-center items-center flex-wrap">
          
          <div className="nav-item relative">
            <Link href='/'>
              <a className="p-2 m-2">Home</a>
            </Link>
          </div>

          <div className="nav-item relative">
            <Link href='/about'>
              <a className="p-2 m-2">About</a>
            </Link>
          </div>

          <div className="nav-item relative" onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
            
            <Link href='/categories'>
            <a className="p-2 m-2">Categories</a>
            </Link>

            <Dropdown show={showDropdown}>
              <ul>
                <li>
                  <Link href='/categories/home-kitchen'>
                    <a className="p-2 m-2 whitespace-nowrap text-sm opacity-100">Home & Kitchen</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/smartphones'>
                    <a className="p-2 m-2 whitespace-nowrap text-sm opacity-100">Smartphones</a>
                  </Link>
                </li>
                <li>
                  <Link href='/categories/toys'>
                    <a className="whitespace-nowrap text-sm opacity-100">Toys</a>
                  </Link>
                </li>
              </ul>
            </Dropdown>

          </div>
          
        </div>
      </nav>
      
    </header>
  );
};

export default Header;