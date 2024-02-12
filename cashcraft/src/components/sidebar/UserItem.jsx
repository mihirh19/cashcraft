/* eslint-disable react/prop-types */
import styles from "./Sidebar.module.scss";


const UserItem = ({ name, icon, lastName }) => {
   return (
      <div className={styles.UserItem_main}>
         {icon}
         <div>
            <p className={styles.sidebaritem_text}>
               {name}
               <br />
               {lastName}
            </p>
         </div>
      </div >
   )
}

export default UserItem