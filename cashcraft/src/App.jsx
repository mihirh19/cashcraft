
import { Fragment } from 'react'
// import styles from "./App.module.scss"
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
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
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Fragment>

  )
}
export default App
