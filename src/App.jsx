import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
  return <></>;
}

export default App;
