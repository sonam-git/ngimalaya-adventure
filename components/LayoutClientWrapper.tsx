'use client';

import React, { useState } from 'react';
import MobileBottomBarWrapper from './MobileBottomBarWrapper';
import AIAssistant from './AIAssistant';
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
