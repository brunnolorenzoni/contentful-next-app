import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiShoppingBag } from 'react-icons/hi'


const Header = () => {
  return (
    <header className="h-14 bg-gray-900 text-white	">
      <Link href='/'>
        <a>
          <HiShoppingBag/>
          <h1>Beautiful Shop</h1>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Categories
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;