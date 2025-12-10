const PrayerFlagBorder = () => {
  // Prayer flag colors in traditional order: Blue (sky), White (clouds), Red (fire), Green (water), Yellow (earth)
  const flags = [
    'bg-blue-500',
    'bg-gray-100 dark:bg-gray-50', // Always gray in both themes
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-400'
  ];
  
  return (
    <div className="flex w-full h-2">
      {/* Mobile: 2 repetitions (10 flags), Desktop: 4 repetitions (20 flags, 5 colors only) */}
      {Array.from({ length: 4 }).map((_, setIndex) => (
        flags.map((colorClass, colorIndex) => (
          <div 
            key={`${setIndex}-${colorIndex}`} 
            className={`flex-1 ${colorClass}`}
          />
        ))
      ))}
    </div>
  );
};

export default PrayerFlagBorder;
