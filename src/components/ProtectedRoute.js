// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import axios from "axios";

// const ProtectedRoute = ({ Component }) => {
//   const userToken = Cookies.get("token");

//   // USER LOGIN CREDENTIAL
//   useEffect(() => {
//     const baseUrl = process.env.REACT_APP_BACKEND_URL;
//     const headers = {
//       Authorization: `Bearer ${userToken}`,
//     };
//     axios
//       .get(`${baseUrl}/user/check/session`, { headers })
//       .then((response) => {
//         if (response.status === 200) {
//           // setUserId(response.data.userSessionDets.user_id);
//           console.log("User is still logged in.");
//         } else {
//           console.log("User session is not active.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking user session:", error);
//         console.log("Error checking user session.");
//       });
//   }, [userToken]);

//   if (userToken) {
//     return <Component />;
//   }
//   return <Navigate to="/" />;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "./NavBar";
import AdminPage from "../pages/AdminPage";
import AdminStats from "../pages/AdminStats";
import AdminSearch from "../pages/AdminSearch";
import AdminBets from "../pages/AdminBets";
import AdminGameHistory from "../pages/AdminGameHistory";
import AdminTransaction from "../pages/AdminTransaction";

function ProtectedRoute() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route path="/" element={token ? <NavBar /> : <Navigate to="/login" />}>
        <Route index element={<AdminPage />} />
        <Route path="/live" element={<AdminPage />} />
        <Route path="/stats" element={<AdminStats />} />
        <Route path="/bets" element={<AdminBets />} />
        <Route path="/search" element={<AdminSearch />} />
        <Route path="/history" element={<AdminGameHistory />} />
        <Route path="/transaction" element={<AdminTransaction />} />
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
