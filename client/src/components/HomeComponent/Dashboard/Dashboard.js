import React from "react";
import "./Dashboard.css";
import Header from "./Dashboard_Header/Header";
import MainContent from "./Dashboard_MainContent/MainContent";

const Dashboard = () => {
  return (
    <div class="dashboard">
      <Header />
      <MainContent />
    </div>
  );
};

export default Dashboard;
