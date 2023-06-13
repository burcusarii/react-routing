import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Dashboard/Home";
import About from "./pages/Dashboard/About";
import Users from "./pages/Dashboard/Users";
import UsersDetails from "./pages/Dashboard/UsersDetails";
import Login from "./pages/Auth/Login";
import DashboardLayout from "./Layouts/Dashboard/index";
import AuthLayout from "./Layouts/Auth/index";
import Register from "./pages/Auth/Register";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/" element={<Home />}></Route>{" "}
            <Route path="about" element={<About />}></Route>{" "}
            <Route path="users" element={<Users />}></Route>{" "}
            <Route path="users/:id" element={<UsersDetails />}></Route>{" "}
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />}></Route>{" "}
            <Route path="register" element={<Register />}></Route>{" "}
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
