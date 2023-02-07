import Link from "next/link";
import classes from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Link className={classes.link} href="/">
          Top Fragrance
        </Link>
      </span>
      <nav className={classes.navigation}>
        <button
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className={classes.hamburger}
        >
          <FaBars className={classes.menuIcon} />
        </button>
        <ul
          className={
            isNavExpanded
              ? `${classes["expanded"]} ${classes["navigationList"]}`
              : classes["navigationList"]
          }
        >
          <Link href="/" passHref>
            <li className={classes.navigationItem}>Home</li>
          </Link>
          <Link href="/search" passHref>
            <li className={classes.navigationItem}>Search</li>
          </Link>
          <Link href="/search?categoryId=cat1230040" passHref>
            <li className={classes.navigationItem}>For Men</li>
          </Link>
          <Link href="/search?categoryId=cat1230039" passHref>
            <li className={classes.navigationItem}>For Women</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
