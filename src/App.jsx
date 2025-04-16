import { Outlet } from 'react-router-dom'
import Navigation from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
