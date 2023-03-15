import { Routes, Route, Link, Outlet } from "react-router-dom";
import Tab from "@mui/material/Tab";

import NoMatch from "./pages/NoMatch";
import PostOfficeList from "./pages/PostOfficeList";
import Tracking from "./pages/Tracking";
import { RouteNames } from "./enums/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteNames.Home} element={<Layout />}>
          <Route index element={<Tracking />} />
          <Route path={RouteNames.OfficeList} element={<PostOfficeList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div style={{ width: "100%" }}>
      <nav className="navigation_container">
        <Tab
          label="Перевірити ТТН"
          to={RouteNames.Home}
          component={Link}
          sx={{
            border: 1,
            borderColor: "grey.500",
            borderRadius: 1,
          }}
        />
        <Tab
          label="Список відділень"
          to={`/${RouteNames.OfficeList}`}
          component={Link}
          sx={{ border: 1, borderColor: "grey.500", borderRadius: 1 }}
        />
      </nav>
      <Outlet />
    </div>
  );
}
