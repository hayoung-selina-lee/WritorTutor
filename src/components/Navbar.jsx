import { Link } from "react-router-dom";
import LogoImage from "../assets/logo_title.svg";

function Navbar() {
  return (
    <nav className="p-4 border-b max-w-4xl mx-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <Link to="/">
            <img src={LogoImage} className="w-32" alt="WriteTutor logo" />
          </Link>
          <div className="pl-3 flex font-semibold flex-row gap-5">
            <Link className="hover:text-primary" to="/">
              HOME
            </Link>
            <Link className="hover:text-primary" to="/history">
              HISTORY
            </Link>
          </div>
        </div>
        <Link className="font-semibold hover:text-primary" to="/mypage">
          MY PAGE
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
