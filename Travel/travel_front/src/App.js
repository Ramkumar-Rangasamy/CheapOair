import "./App.css";
import React from "react";

//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


//All Components import him
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import Help from "./Components/Help/Help";
import Account from "./Components/Navbar/Account/Account";
import Newaccount from "./Components/Navbar/Account/Newaccount";

import Airlines from "./Components/Airlines/Airlines";
import CheapOair from "./Components/CheapOair/CheapOair";
import Footer from "./Components/Footer/Footer";
import Nexttrip from "./Components/Nexttrip/Nexttrip";
import Maincard from "./Components/Maincard/Maincard";
import Fbooking from "./Components/Home/Flight/Fbooking";
import Landing from "./Components/Landing/Landing";
import PackageList from "./Components/Home/Package/PackageList";
import Packselecting from "./Components/Home/Package/Packselecting";
import Flight from "./Components/Home/Flight/Flight";
import Hotellist from "./Components/Home/Hotel/Hotellist";
import Hbooking from "./Components/Home/Hotel/Hbooking";
import Conformbooking from "./Components/Home/Hotel/Conformbooking";
import Packfight from "./Components/Home/Package/Packfight";
import Abouts from "./Components/Abouts/Abouts";
import Center from "./Components/Center/Center";

function App() {
  return (
    <>
    <div className="hold">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[
              <Landing />,
              <Airlines />,
              <Nexttrip />,
              <CheapOair />,
              <Abouts/>,
              <Maincard />,
              <Center/>,
              <Footer />
            ]}
          />
           <Route
            path="/abouts"
            element={[
              <Abouts/>,
              <Airlines />,
              <Nexttrip />,
              <CheapOair />,
              <Maincard />,
              <Footer />
              
            ]}
          />
          <Route
            path="/home"
            element={[
              <Home />,
              <Airlines />,
              <Nexttrip />,
              <CheapOair />,
              <Footer />
            ]}
          />
          <Route
            path="/help-list"
            element={[<Help />,<Center/>, <Footer />]}
          />
          <Route path="/create-account" element={[<Account />, <Footer />]} />
          <Route path="/newaccount" element={[<Newaccount />, <Footer />]} />

          <Route
            path="/fight"
            element={[<Flight />, <Nexttrip />, <Footer />]}
          />
          <Route path="/fbooking" element={[<Fbooking />, <Footer />]} />

          <Route
            exact
            path="/fpackagelist"
            element={[<PackageList />, <CheapOair />, <Footer />]}
          />
          <Route exact path="/select/:pkgId" element={<Packselecting />} />
          <Route
            exact
            path="/packgflight"
            element={[<Packfight />, <CheapOair />, <Footer />]}
          />

          <Route path="/hotellist" element={<Hotellist />} />
          <Route path="/booking/:hotelId" element={<Hbooking />} />
          <Route path="/conform" element={<Conformbooking />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
