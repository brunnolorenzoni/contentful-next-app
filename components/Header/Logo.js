import Link from "next/link";
import { HiShoppingBag } from 'react-icons/hi'

const Logo = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap">
      <Link href='/'>
        <a>
          <div className="flex justify-center items-center">
            <HiShoppingBag className="inline-block mr-1 text-5xl"/>
            <h1 className="inline-block font-semibold text-lg md:text-2xl">Beautiful Shop</h1>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;