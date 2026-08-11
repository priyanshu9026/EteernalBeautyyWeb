import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFab from "./WhatsAppFab";

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-cream">
    <ScrollToTop />
    <Navbar />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Layout;
