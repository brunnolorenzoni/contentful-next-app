import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiShoppingBag } from 'react-icons/hi'


const Header = () => {
  return (
    <header className="p-2 min-h-[60px] bg-gray-900 text-white flex flex-row justify-between flex-wrap">
      
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Link href='/'>
          <a>
            <div className="flex justify-center items-center">
              <HiShoppingBag className="inline-block mr-1"/>
              <h1 className="inline-block">Beautiful Shop</h1>
            </div>
          </a>
        </Link>
      </div>

      <nav className="flex flex-row justify-center items-center flex-wrap">
        <div className="p-2 m-2">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className="p-2 m-2">
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div className="p-2 m-2">
          <Link href='/categories'>
          <a>Categories</a>
          </Link>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;