import React from 'react';
import SideBar from '../../components/ManagementSide/SideBar';
import CustomerScheduleComponent from '../../components/ManagementSide/CustomerScheduleComponent';
import Header from '../../components/ManagementSide/Header';
import Footer from '../../components/ManagementSide/Footer';

const CustomerSchedulePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <SideBar className="w-1/4" activeSection="booking" /> {/* Added activeSection prop with value "booking" */}
        <div className="flex-grow flex flex-col"> {/* Removed pl-64 for left-side padding */}
          <Header />
          <div className="pl-64 flex-grow overflow-auto"> {/* Added pl-64 for left-side padding */}
            <CustomerScheduleComponent />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CustomerSchedulePage;
