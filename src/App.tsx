import { Routes, Route, Link, Outlet } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import PostOfficeList from "./pages/PostOfficeList";
import Tracking from "./pages/Tracking";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tracking />} />
          <Route path="office-list" element={<PostOfficeList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Перевірити ТТН</Link>
          </li>
          <li>
            <Link to="/office-list">Список відділень</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
