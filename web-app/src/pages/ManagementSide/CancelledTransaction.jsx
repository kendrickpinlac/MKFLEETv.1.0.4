import React from 'react';
import SideBar from '../../components/ManagementSide/SideBar';
import CancelledTransactionComponent from '../../components/ManagementSide/CancelledTransactionComponent';
import Header from '../../components/ManagementSide/Header';
import Footer from '../../components/ManagementSide/Footer';

const CancelledTransactionPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <SideBar className="w-1/4" />
        <div className="flex-grow flex flex-col"> {/* Removed pl-64 for left-side padding */}
          <Header />
          <div className="pl-64 flex-grow overflow-auto"> {/* Added pl-64 for left-side padding */}
            <CancelledTransactionComponent />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CancelledTransactionPage;
