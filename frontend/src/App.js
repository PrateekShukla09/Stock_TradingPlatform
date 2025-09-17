import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./landing_page/Login";
import Signup from "./landing_page/Signup";
import NotFound from "./NotFound";
import OpenAccount from "./OpenAccount";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
