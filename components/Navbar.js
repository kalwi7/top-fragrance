import Link from 'next/link'
import classes from './Navbar.module.css'


const Navbar = () => (
    <header>
        <div>
            <Link href='/' >Top Fragrance</Link>
        </div>
        <nav className={classes.navigation}>
            <ul className={classes.navigationList}>
                <Link href='/' passHref >
                   <li className={classes.navigationItem}>Home</li>
                </Link>
                <Link href='/' passHref >
                   <li className={classes.navigationItem}>Search</li>
                </Link>
                <Link href='/' passHref >
                   <li className={classes.navigationItem}>some item</li>
                </Link>
                <Link href='/' passHref >
                   <li className={classes.navigationItem}>some item</li>
                </Link>
            </ul>
        </nav>
    </header>
)

export default Navbar;