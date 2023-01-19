import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => (
  <header className={classes.header}>
    <span className={classes.logo}>
      <Link href="/">Top Fragrance</Link>
    </span>
    <nav className={classes.navigation}>
      <ul className={classes.navigationList}>
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

export default Navbar;
