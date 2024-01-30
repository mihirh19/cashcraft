
import { Fragment } from 'react'
// import styles from "./App.module.scss"
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { useEffect } from 'react'
import WebFont from 'webfontloader';



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    })
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Fragment>

  )
}
export default App
