import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
