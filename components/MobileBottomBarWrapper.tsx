'use client';

import React, { useState } from 'react';
import MobileBottomBar from './MobileBottomBar';
import BookingModal from './BookingModal';

interface MobileBottomBarWrapperProps {
  onAIChatToggle?: () => void;
}

const MobileBottomBarWrapper: React.FC<MobileBottomBarWrapperProps> = ({ onAIChatToggle }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleAIChat = () => {
    if (onAIChatToggle) {
      onAIChatToggle();
    }
  };

  return (
    <>
      <MobileBottomBar onBookNow={handleBookNow} onAIChat={handleAIChat} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default MobileBottomBarWrapper;
