import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/NavBar";
import Layout from "./pages/layout/Layout";
import { PositionProvider } from "./store/PositionContext";
import {Provider} from "react-redux";
import { reduxStore } from "./store/reduxStore";
function App() {
  return (
    <>
    <Provider store={reduxStore}>
      <PositionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PositionProvider>
      </Provider>
    </>
  );
  return <></>;
}

export default App;
