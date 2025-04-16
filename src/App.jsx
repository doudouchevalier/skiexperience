import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
