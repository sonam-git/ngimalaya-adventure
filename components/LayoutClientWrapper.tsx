'use client';

import React from 'react';
import MobileBottomBarWrapper from './MobileBottomBarWrapper';
import ServiceWorkerRegistration from './ServiceWorkerRegistration';

const LayoutClientWrapper: React.FC = () => {
  return (
    <>
      <ServiceWorkerRegistration />
      <MobileBottomBarWrapper />
    </>
  );
};

export default LayoutClientWrapper;
