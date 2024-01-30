import styles from "../App.module.scss"

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar_logo}>CashCraft</div>
         <ul className={styles.navbar_links}>
            <li className={styles.navbar_link}>Dashboard</li>
            <li className={styles.navbar_link}>Expenses</li>
            <li className={styles.navbar_link}>Friends</li>
            <li className={styles.navbar_link}>Settings</li>
         </ul>
      </nav>
   )
}

export default Navbar