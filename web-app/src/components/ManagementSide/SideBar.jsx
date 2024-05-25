import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaCar, FaVideo, FaUsers, FaCog, FaSignOutAlt, FaChevronDown, FaChevronRight, FaListAlt, FaWrench, FaClipboardList, FaExchangeAlt, FaCheckCircle, FaTimesCircle, FaUserFriends } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setSidebarHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path) {
      setActiveSection(path);
      localStorage.setItem('activeSection', path);
    }
  }, [location]);

  const toggleSection = (section) => {
    const newActiveSection = activeSection === section ? null : section;
    setActiveSection(newActiveSection);
    localStorage.setItem('activeSection', newActiveSection);
  };

  const renderArrow = (section) => {
    return activeSection === section ? <FaChevronDown className="ml-auto" /> : <FaChevronRight className="ml-auto" />;
  };

  const activeStyle = 'bg-[#fba701] text-gray-900';
  const inactiveStyle = 'hover:bg-gray-700';
  const activeInnerStyle = 'text-[#fba701]';
  const hoverInnerStyle = 'hover:bg-gray-600 hover:text-[#fba701]';

  return (
    <div style={{ height: sidebarHeight }} className="w-64 bg-gray-800 text-white flex flex-col justify-between fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <Link to="/AdminDashboard">
            <h1 className="text-2xl font-semibold text-center cursor-pointer">MKFLEET</h1>
          </Link>
        </div>
        <div className="space-y-2">
          <Link
            to="/AdminDashboard"
            className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'AdminDashboard' ? activeStyle : inactiveStyle}`}
            onClick={() => toggleSection('AdminDashboard')}
          >
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </Link>
          <div>
            <button className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'Booking' ? activeStyle : inactiveStyle}`} onClick={() => toggleSection('Booking')}>
              <FaCalendarAlt className="mr-3" />
              Booking
              {renderArrow('Booking')}
            </button>
            {activeSection === 'Booking' && (
              <div className="ml-8 space-y-2">
                <Link to="/CustomerSchedule" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/CustomerSchedule' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaClipboardList className={`mr-3 relative ${location.pathname === '/CustomerSchedule' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaClipboardList>
                  Customer Schedule
                </Link>
                <Link to="/OngoingRentals" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/OngoingRentals' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaExchangeAlt className={`mr-3 relative ${location.pathname === '/OngoingRentals' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaExchangeAlt>
                  Ongoing Rentals
                </Link>
                <Link to="/CompletedTransaction" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/CompletedTransaction' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaCheckCircle className={`mr-3 relative ${location.pathname === '/CompletedTransaction' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaCheckCircle>
                  Completed Transaction
                </Link>
                <Link to="/CancelledTransaction" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/CancelledTransaction' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaTimesCircle className={`mr-3 relative ${location.pathname === '/CancelledTransaction' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaTimesCircle>
                  Cancelled Transaction
                </Link>
              </div>
            )}
          </div>
          <div>
            <button className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'VehicleList' ? activeStyle : inactiveStyle}`} onClick={() => toggleSection('VehicleList')}>
              <FaCar className="mr-3" />
              Vehicle Management
              {renderArrow('VehicleList' && 'VehicleMaintenance')}
            </button>
            {activeSection === 'VehicleList' && 'VehicleMaintenance' && (
              <div className="ml-8 space-y-2">
                <Link to="/VehicleList" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/VehicleList' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaListAlt className={`mr-3 relative ${location.pathname === '/VehicleList' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaListAlt>
                  Vehicle List
                </Link>
                <Link to="/VehicleMaintenance" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/VehicleMaintenance' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaWrench className={`mr-3 relative ${location.pathname === '/VehicleMaintenance' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaWrench>
                  Vehicle Maintenance
                </Link>
              </div>
            )}
          </div>
          <div>
            <button className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'cctv' ? activeStyle : inactiveStyle}`} onClick={() => toggleSection('cctv')}>
              <FaVideo className="mr-3" />
              CCTV
              {renderArrow('cctv')}
            </button>
            {activeSection === 'cctv' && (
              <div className="ml-8 space-y-2">
                <Link to="/CCTVSurveillance" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/CCTVSurveillance' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaVideo className={`mr-3 relative ${location.pathname === '/CCTVSurveillance' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaVideo>
                  Surveillance
                </Link>
              </div>
            )}
          </div>
          <div>
            <button className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'user-management' ? activeStyle : inactiveStyle}`} onClick={() => toggleSection('user-management')}>
              <FaUsers className="mr-3" />
              User Management
              {renderArrow('user-management')}
            </button>
            {activeSection === 'user-management' && (
              <div className="ml-8 space-y-2">
                <Link to="/UserList" className={`flex items-center w-full text-left px-4 py-2 rounded ${location.pathname === '/UserList' ? activeInnerStyle : hoverInnerStyle}`}>
                  <FaUserFriends className={`mr-3 relative ${location.pathname === '/UserList' ? activeInnerStyle : ''}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaUserFriends>
                  User List
                </Link>
              </div>
            )}
          </div>
          <Link to="/settings" className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'settings' ? activeStyle : inactiveStyle}`} onClick={() => toggleSection('settings')}>
            <FaCog className="mr-3" />
            Settings
          </Link>
        </div>
      </div>
      <div className="p-4">
        <button className="flex items-center w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

