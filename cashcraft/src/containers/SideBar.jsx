import { MdPeopleOutline } from "react-icons/md";
import Mainlogo from "../components/sidebar/Mainlogo"
import UserItem from "../components/sidebar/UserItem";
import styles from "./styles/Sidebar.module.scss";
import groups from "../data/groups.json"
// import { useHistory } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import SideBarItems from "../components/sidebar/SideBarItems";
import { HiOutlineLogout } from "react-icons/hi";
const SideBar = () => {
   // const user = JSON.parse(localStorage.getItem('user-info'));
   // const groups = JSON.parse(localStorage.getItem('groups'));
   // const history = useHistory();

   // function logout() {
   //    localStorage.clear();
   //    history.push('/login');
   // }

   return (
      <div className={styles.sidebar_main}>
         <Mainlogo />
         <div className={styles.sidebar_item}>
            {/* <UserItem name={user.userFirstName} lastName={user.userLastName} icon={<MdPersonOutline fontSize={"30px"} />} /> */}
            <UserItem name={"Mihir"} lastName={"Hadavani"} icon={<MdPersonOutline fontSize={"30px"} color="white" />} />
            <div className={styles.sidebar_items}>
               <p className={styles.sidebar_grp}>Groups</p>
               <div className={styles.groupss}>
                  {groups.map((group) => (
                     <SideBarItems key={group.id} name={group.name} icon={<MdPeopleOutline />} />
                  ))}
               </div>
            </div>
         </div>
         <div className={styles.logout}>
            <HiOutlineLogout fontSize={"19px"} />
            <p>Logout</p>
         </div>
      </div>
   )
}

export default SideBar