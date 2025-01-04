import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {/* Render children here */}
      {children}
    </div>
  );
}

export default DashboardLayout;
