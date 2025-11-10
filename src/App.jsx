import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";
import Projects from "./assets/components/Projects";
import Testimonials from './assets/components/Testimonials';
import CustomMessage from "./assets/components/CustomMessage";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import AllServicesPage from './assets/components/AllServicesPage';
import ServiceDetailPage from './assets/components/ServiceDetailPage';
import "./index.css";
import TestimonialsPage from './assets/components/TestimonialsPage';
import TeamPage from './assets/components/TeamPage';


function App() {
  return (
    <Router>
    
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Projects />
              <Testimonials />
              <CustomMessage />
              <Contact />
            </>
          } />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
       <Route path="/team" element={<TeamPage />} />
<Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;