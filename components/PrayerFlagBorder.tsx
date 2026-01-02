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
    <div className="flex w-full h-1">
      {/* Show 1 set on small screens, more on larger screens */}
      {/* Small screens (< 640px): 1 set (5 colors) */}
      <div className="flex w-full sm:hidden">
        {flags.map((colorClass, colorIndex) => (
          <div 
            key={`mobile-${colorIndex}`} 
            className={`flex-1 ${colorClass}`}
          />
        ))}
      </div>
      
      {/* Medium and larger screens (≥ 640px): Multiple sets */}
      <div className="hidden sm:flex w-full">
        {Array.from({ length: 3 }).map((_, setIndex) => (
          flags.map((colorClass, colorIndex) => (
            <div 
              key={`${setIndex}-${colorIndex}`} 
              className={`flex-1 ${colorClass}`}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default PrayerFlagBorder;
