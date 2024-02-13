/* eslint-disable react/prop-types */
import styles from "./Sidebar.module.scss";
const SideBarItems = ({ name, icon }) => {
   return (
      <div className={styles.SideBarItem_main}>
         {icon}
         <p className={styles.sidebaritem_text}>{name}</p>
      </div>
   )
}

export default SideBarItems