
import {  Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Footer from './pages/Footer'
import Calendar from './components/calendar/Calendar'
import BookingDetails from './pages/summary/BookingDetails'
import Layout from './pages/Layout'



function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masters/:id" element={<Layout />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/booking-details" element={<BookingDetails />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </>
  );
}

export default App
