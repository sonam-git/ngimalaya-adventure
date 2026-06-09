'use client';

import React, { useState } from 'react';
import AIAssistant from './AIAssistant';
import MobileBottomBarWrapper from './MobileBottomBarWrapper';
import ServiceWorkerRegistration from './ServiceWorkerRegistration';

const LayoutClientWrapper: React.FC = () => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <>
      <ServiceWorkerRegistration />
      <MobileBottomBarWrapper onAIChatToggle={() => setIsAIChatOpen(true)} />
      <AIAssistant isOpen={isAIChatOpen} onToggle={setIsAIChatOpen} />
    </>
  );
};

export default LayoutClientWrapper;
