import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Component/Global/NavBar/NavBar";
import Footer from "./Component/Global/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./Pages/Business/Business";
import Expertise from "./Pages/Expertise/Expertise";
import Achievement from "./Pages/Achievement/Achievement";
import NotFound from "./Component/Global/NotFound/NotFound";
import ReactGA from 'react-gtm-module';
import tagManagerArgs from './gtm.js';
import { useEffect } from "react";
import Engagement from "./Pages/Engagement/Engagement";
import Politique from "./Pages/Politique/Politique";

function App() {
  console.clear();

  useEffect(() => {
    ReactGA.initialize(tagManagerArgs);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprise" element={<Business />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/realisation" element={<Achievement />} />
          <Route path="/engagement" element={<Engagement/> } />
          <Route path="/politique" element={<Politique/> } />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
