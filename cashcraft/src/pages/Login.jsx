/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import './index.css'
import split from './split.gif'
import ClipLoader from "react-spinners/CircleLoader";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrUser } from '../slices/currUserSlice';
export default function Login() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [showPassword, setShow] = useState(false)
  const history = useNavigate();
  const currUser = useSelector(state => state.currUser);
  const dispatch = useDispatch();
  // if (localStorage.getItem('user-info')) {
  //   history('/dashboard')
  //   // window.location.reload();
  // }
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/dashboard")
    }
  }, [])

  var index = Math.floor(Math.random() * 10);
  if (index === 9) { index = index - 1 }
  const quote = ["Go ahead -- hold your breath!", "Alt-F4 speeds things up...", "We're working very Hard .... Really", "You are number 2843684714 in the queue", "We are not liable for any broken screens as a result of waiting", "Well, this is embarrassing", "It's not you. It's me", "My other loading screen is much faster", "Web developers do it with <style>"];

  async function login() {

    //credentials
    setLoading(true);
    try {
      let result = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password })
      });
      result = await result.json();

      if (result.error == null) {
        let res = jwtDecode(result.jwtToken);
        localStorage.setItem('jwt', result.jwtToken);
        localStorage.setItem('user-info', JSON.stringify(res.user));
        dispatch(setCurrUser(res.user));
        setLoading(false);
        history("/dashboard");
      }
      else {
        setLoading(false);
        return;
      }
    }
    catch (e) {
      console.log(e);
    }





  }
  return (
    <>
      {loading ?
        <>
          <div className="login-screen">
            <ClipLoader color={'#C715DE'} loading={loading} size={100} />
          </div>
          <br />
          <p className="login-quote" >{quote[index]}</p>

        </>
        :
        <div className='m-login'>
          <div className='gif-box'>
            {/* <Iframe url="https://giphy.com/embed/xT1R9TaUQfgf5qQZEY" width="50%" height="50%" position='absolute' className="giphy-embed" ></Iframe> */}
            <img src={split} alt="loading..." style={{ height: '100%', width: '50%', position: 'absolute' }} />
          </div>
          <div className='login-s'>
            <p className='login-head'>Trip<span style={{ color: '#674fa3' }}>Split</span></p>
            <div className='login-box'>
              <TextField label="Email" onChange={(e) => { setEmail(e.target.value) }} />

              <TextField
                required

                name="password"

                type={showPassword ? "text" : "password"}
                label="Password" onChange={(e) => { setPassword(e.target.value) }} />
              <div style={{ textAlign: 'center', backgroundColor: '#674fa3', borderRadius: '0.5vw', cursor: 'pointer' }} onClick={login} >
                <p style={{ color: 'white' }}>Login</p>
              </div>
              <p>Don't have an account?<span onClick={() => { history("/register") }} style={{ cursor: 'pointer' }} >Sign up</span></p>
              {/* <button className='login-button' placeholder='Login' /> */}
            </div>
          </div>
        </div>
      }
    </>

  )
}
