import style from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {User} from '..'
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img
          src="Screenshot_2023-11-15_143213-removebg-preview.png"
          width="50"
          height={50}
        ></img>
        <div className={style.CompanyName}>Magic Post</div>
      </div>
      <div className={style.SearchLength}>
        <label htmlFor="search" className={style.SearchIcon}>
          <CiSearch />
        </label>
        <div className={style.InputSearch}>
          <input type="text" id="search" placeholder="Search..." />
        </div>
      </div>
      <User/>
    </div>
  );
};
export default Header;
