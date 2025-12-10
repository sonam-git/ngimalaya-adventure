'use client';

import React, { useState } from 'react';
import MobileBottomBar from './MobileBottomBar';
import BookingModal from './BookingModal';

const MobileBottomBarWrapper: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <MobileBottomBar onBookNow={handleBookNow} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default MobileBottomBarWrapper;
