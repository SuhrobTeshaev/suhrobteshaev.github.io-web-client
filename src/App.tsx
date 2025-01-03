
import {  Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Footer from './pages/Footer'
import Layout from './pages/Layout'
import { Toaster } from "react-hot-toast";
// import LendingPage from "./pages/lending/LendingPage";


function App() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Home />} />
        <Route path="/masters/:id" element={<Layout />} />
      </Routes>
      {location.pathname !== "/masters/:id" && <Footer />}
    </>
  );
}

export default App
