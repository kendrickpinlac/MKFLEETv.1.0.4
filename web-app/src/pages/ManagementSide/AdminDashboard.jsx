import React from 'react';
import SideBar from '../../components/ManagementSide/SideBar';
import DashboardContent from '../../components/ManagementSide/DashboardContent';
import Header from '../../components/ManagementSide/Header';
import Footer from '../../components/ManagementSide/Footer';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <SideBar className="w-1/4" />
        <div className="flex-grow">
          <Header />
          <DashboardContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;