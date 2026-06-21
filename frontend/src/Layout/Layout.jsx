import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import socket from '../socket/socket'

const Layout = () => {
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">


      {/* Main Section */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Scrollable Content ONLY */}
        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Layout