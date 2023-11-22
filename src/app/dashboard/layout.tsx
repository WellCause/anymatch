import React from 'react';
import Navigation from '@/app/dashboard/navigation/navigation';
import Header from '@/app/dashboard/header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_min-content_1fr] md:grid-cols-[min-content_1fr] md:grid-rows-[min-content_1fr] h-screen flex-col bg-gray-100 md:flex-row md:overflow-hidden">
      <Navigation/>
      <Header/>
      <div className="bg-gray-200 flex-grow p-3 md:overflow-y-auto md:p-6 text-slate-700">
        <div className="bg-white w-full h-full rounded-lg p-2">
          {children}
        </div>
      </div>
    </div>
  );
}