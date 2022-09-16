import Logo from "components/Header/Logo";
import Navbar  from "components/Header/Navbar";

const Header = () => {

  return (
    <header className="p-2 min-h-[60px] bg-gray-900 text-white flex flex-row justify-between flex-wrap">
      <Logo/>
      <Navbar/>   
    </header>
  );
};

export default Header;