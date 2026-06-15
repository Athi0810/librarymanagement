import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;