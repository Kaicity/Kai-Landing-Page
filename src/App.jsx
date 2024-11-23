import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/Productpage";
import SharingContact from "./components/SharingContact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/blog" element={<></>} />
        <Route path="/contact" element={<></>} />

        {/* Route cho trang lỗi */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SharingContact />
      <Footer />
    </Router>
  );
}

export default App;
