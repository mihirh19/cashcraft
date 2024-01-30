
import { Fragment } from 'react'
// import styles from "./App.module.scss"
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
function App() {

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
