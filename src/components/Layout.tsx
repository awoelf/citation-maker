import React, { useContext } from 'react';

// Components
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
   // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <link rel='icon' href='/favicon.ico' />
      <Header />
      {children}
    </div>
  );
}

