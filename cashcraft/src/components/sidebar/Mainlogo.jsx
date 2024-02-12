import styles from "./Sidebar.module.scss";
import { MdAccountBalanceWallet } from "react-icons/md";
const MainLogo = () => {
   return (
      <div className={styles.MainLogo_main}>
         <MdAccountBalanceWallet fontSize={"24px"} />
         <p className={styles.logo_text}>CashCraft</p>

      </div>
   )
}

export default MainLogo