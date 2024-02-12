import styles from "../App.module.scss"
import { Link } from "react-router-dom"
const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar_logo}>CashCraft</div>
         <ul className={styles.navbar_links}>
            <Link to={"/login"}>
               <li className={styles.navbar_link}>login</li>
            </Link>

            <Link to={"/dashboard"}>
               <li className={styles.navbar_link}>Dashboard</li>
            </Link>
            <li className={styles.navbar_link}>Expenses</li>
            <li className={styles.navbar_link}>Friends</li>
            <li className={styles.navbar_link}>Settings</li>
         </ul>
      </nav>
   )
}

export default Navbar