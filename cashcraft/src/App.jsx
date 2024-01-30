
import { Fragment } from 'react'
import styles from "./App.module.scss"
import Navbar from './components/Navbar'

function App() {

  return (
    <Fragment>
      <Navbar/>
      <h1 className={styles.heading}>
        NavBar Components
      </h1>
    </Fragment>

  )
}
export default App
