import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/me" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
