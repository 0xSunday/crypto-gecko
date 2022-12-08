import Link from "next/link";

import classes from "./mainHeader.module.css";
import { FaBitcoin } from "react-icons/Fa";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Crypto Gecko</Link>
      </div>
      <nav className={classes.navigation}>
        <Link className={classes.link} href="/coins">
          All Coins
          <FaBitcoin className={classes.icon} />
        </Link>
        {/* <ul>
          <li>
          <Link href="/events">
            Browse All Events
            <AiOutlineArrowRight />
          </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default MainHeader;
