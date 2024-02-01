import { Fragment } from "react"
import styles from "./styles/Login.module.scss"
import { useState } from "react";
const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here
      alert('Logging in with:   ' + username);
   };

   return (
      <Fragment>
         <div className={styles.login_all}>
            <div className={styles.login_container}>
               <h2>Login</h2>
               <form onSubmit={handleLogin}>
                  <label htmlFor="username">Username:</label>
                  <input
                     type="text"
                     id="username"
                     value={username}

                     onChange={(e) => setUsername(e.target.value)}
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                     type="password"
                     id="password"
                     value={password}

                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <button type="submit">
                     Login
                  </button>
               </form>
            </div>
         </div>

      </Fragment>
   )
}

export default Login