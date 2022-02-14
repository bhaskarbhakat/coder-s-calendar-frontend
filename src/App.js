import React from "react";
import Contest from "./components/contest/Contest";
import Navbar from "./components/navbar/Navbar";
import Notification from "./components/notification/Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Contest site="all" />} />
          <Route exact path="/leetcode" element={<Contest site="leet_code" />} />
          <Route exact path="/codeforces" element={<Contest site="codeforces" />} />
          <Route exact path="/codechef"element={<Contest site="code_chef" />} />
          <Route exact path="/topcoder"element={<Contest site="top_coder" />} />
          <Route exact path="/atcoder"element={<Contest site="at_coder" />} />
          <Route exact path="/csacademy"element={<Contest site="cs_academy" />} />
          <Route exact path="/hackerrank"element={<Contest site="hacker_rank" />} />
          <Route exact path="/hackerearth"element={<Contest site="hacker_earth" />} />
          <Route exact path="/kickstart"element={<Contest site="kick_start" />} />
          <Route exact path="/notification"element={<Notification/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
