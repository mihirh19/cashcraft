import { Fragment } from "react"
import styles from "./styles/Login.module.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (e) => {
      e.preventDefault();
      // Add your login logic here
      const data = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
      const user = await data.json()

      if (user.length > 0) {
         navigate('/')
      }
      else {
         alert('Invalid username or password')
         setUsername('')
         setPassword('')

      }
   }
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

export default Login;