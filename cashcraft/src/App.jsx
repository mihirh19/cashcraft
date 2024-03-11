import './App.css';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Signup} />
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
