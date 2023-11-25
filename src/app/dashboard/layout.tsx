'use client'

import React, { useState } from 'react';
import Nav from '@/app/dashboard/navigation/nav';
import Header from '@/app/dashboard/header/header';
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavMinimized, setIsNavMinimized] = useState<boolean>(false);
  const [isNavHidden, setIsNavHidden] = useState<boolean>(true);

  const handleMinimizeBtnClick = () => {
    setIsNavMinimized(!isNavMinimized);
  }

  const handleNavButtonClick = () => {
    setIsNavHidden(!isNavHidden);
  }

  return (
    <div className="grid grid-rows-[min-content_1fr] md:grid-cols-[min-content_1fr] h-screen flex-col bg-gray-100 md:flex-row md:overflow-hidden">
      <Nav isNavHidden={isNavHidden} isNavMinimized={isNavMinimized}  />
      <Header
        onMinimizeButtonClick={handleMinimizeBtnClick}
        isNavMinimized={isNavMinimized}
        onNavButtonClick={handleNavButtonClick}
        isNavHidden={isNavHidden}
      />
      <div className="bg-gray-200 flex-grow p-3 md:overflow-y-auto md:p-6 text-slate-700">
        <div className="bg-white w-full h-full rounded-lg p-2">
          {children}
        </div>
      </div>
    </div>
  );
}