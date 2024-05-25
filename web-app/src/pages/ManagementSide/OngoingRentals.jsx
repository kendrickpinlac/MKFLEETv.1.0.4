import React from 'react';
import SideBar from '../../components/ManagementSide/SideBar';
import OngoingRentalsComponent from '../../components/ManagementSide/OngoingRentalsComponent';
import Header from '../../components/ManagementSide/Header';
import Footer from '../../components/ManagementSide/Footer';

const OngoingRentalsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <SideBar className="w-1/4" />
        <div className="flex-grow flex flex-col"> {/* Removed pl-64 for left-side padding */}
          <Header />
          <div className="pl-64 flex-grow overflow-auto"> {/* Added pl-64 for left-side padding */}
            <OngoingRentalsComponent />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OngoingRentalsPage;
