import Link from "next/link";
import { GiGearHammer } from "react-icons/gi";
import { LiaUserCircle } from "react-icons/lia";

const Header = () => {
  return (
    <div className="bg-red-100">
      <header className="flex items-center justify-between p-2">
        <div>
          <Link href="/" className="text-sky-950">
            <GiGearHammer className="w-8 h-8" />
          </Link>
        </div>
        <ul className="bg-green-200 w-96 flex items-center justify-between">
          <li>
            <Link className="inline-block py-1 px-4" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="inline-block py-1 px-4" href="/">
              Customers
            </Link>
          </li>
          <li>
            <Link className="inline-block py-1 px-4" href="/">
              Orders
            </Link>
          </li>
        </ul>
        <div>
          <Link href="login" className="text-sky-950">
            <LiaUserCircle className="w-9 h-9" />
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
