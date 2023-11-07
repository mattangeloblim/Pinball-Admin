import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import AdminStats from "./pages/AdminStats";
import AdminSearch from "./pages/AdminSearch";
import AdminBets from "./pages/AdminBets";
import AdminGameHistory from "./pages/AdminGameHistory";
import AdminTransaction from "./pages/AdminTransaction";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          exact
          path="/live"
          element={<ProtectedRoute Component={AdminPage} />}
        />
        <Route
          path="/stats"
          element={<ProtectedRoute Component={AdminStats} />}
        />
        <Route
          path="/bets"
          element={<ProtectedRoute Component={AdminBets} />}
        />
        <Route
          path="/search"
          element={<ProtectedRoute Component={AdminSearch} />}
        />
        <Route
          path="/history"
          element={<ProtectedRoute Component={AdminGameHistory} />}
        />
        <Route
          path="/transaction"
          element={<ProtectedRoute Component={AdminTransaction} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
