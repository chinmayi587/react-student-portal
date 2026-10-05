import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./studentportal/Dashboard";
import Students from "./studentportal/Students";
import Courses from "./studentportal/Courses";
import Profile from "./studentportal/Profile";
import Error from "./studentportal/Error";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;