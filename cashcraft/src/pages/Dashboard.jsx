

import styles from './styles/Dashboard.module.scss'
import SideBar from '../containers/SideBar';
import { useNavigate } from "react-router-dom"
const Dashboard = () => {

   const navigate = useNavigate();
   if (!localStorage.getItem("user-info")) {
      navigate("/login");
   }

   return (
      <>
         <div className={styles.dashboard_main}>
            <SideBar />
         </div>
      </>
   )
}

export default Dashboard;