export interface PeakItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  meals?: string;
}

export interface PeakExpedition {
  id: string;
  name: string;
  height: string;
  duration: string;
  difficulty: string;
  season: string;
  image: string;
  description: string;
  price: string;
  accommodation: string;
  meals: string;
  hiking: string;
  overview: string;
  highlights: string[];
  itinerary: PeakItineraryDay[];
  included: string[];
  excluded: string[];
  requirements: string[];
  technicalRequirements: string[];
}

export const peakExpeditions: PeakExpedition[] = [
  {
    id: 'island-peak',
    name: 'Island Peak (Imja Tse)',
    height: '6,165m',
    duration: '19 Days',
    difficulty: 'Strenuous Plus',
    season: 'Feb-May, Oct-Dec',
    image: '/assets/images/islandpeak.png',
    description: "Nepal's most popular 6,000m peak, perfect for mountaineering beginners. Combines Everest Base Camp trek with technical climbing.",
    price: 'Contact for Price',
    accommodation: 'Teahouse',
    meals: 'B, L & D',
    hiking: '5-7 hours',
    overview: `Island Peak, also known as Imja Tse, stands at 6,165 meters and is one of Nepal's most popular trekking peaks. This expedition combines the famous Everest Base Camp trek with technical climbing, making it perfect for those looking to experience high-altitude mountaineering.

The journey takes you through the stunning Khumbu region, passing through Sherpa villages, Buddhist monasteries, and offering spectacular views of Mt. Everest, Lhotse, Nuptse, and Ama Dablam. The climb itself involves glacier travel, fixed ropes, and a dramatic summit ridge.

Island Peak is an excellent introduction to Himalayan mountaineering, requiring basic mountaineering skills including the use of crampons, ice axe, and climbing fixed ropes. Our experienced Sherpa guides provide comprehensive training at base camp before the summit push.`,
    highlights: [
      'Summit Island Peak at 6,165m',
      'Trek to Everest Base Camp',
      'Visit Kala Patthar for stunning Everest views',
      'Explore Sherpa villages and Buddhist monasteries',
      'Comprehensive mountaineering training',
      'Experience high-altitude camping',
      'Stunning views of 8,000m peaks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrival at Tribhuvan International Airport. Transfer to hotel. Trek briefing and equipment check.',
        altitude: '1,400m',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding',
        description: 'Scenic flight to Lukla (2,840m). Begin trek through pine forests to Phakding.',
        altitude: '2,610m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar',
        description: 'Cross suspension bridges over Dudh Koshi river. Steep climb to Namche Bazaar, the Sherpa capital.',
        altitude: '3,440m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Hike to Everest View Hotel or visit Khumjung village. Explore Namche market and monastery.',
        altitude: '3,440m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 5,
        title: 'Namche to Tengboche',
        description: 'Trail through rhododendron forest with magnificent mountain views. Visit famous Tengboche monastery.',
        altitude: '3,860m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche',
        description: 'Descend to Deboche, cross the Imja River, and climb to Dingboche with stunning valley views.',
        altitude: '4,410m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Hike to Nangkartshang Peak (5,083m) for acclimatization and panoramic views.',
        altitude: '4,410m',
        duration: '4-5 hours',
        meals: 'B, L, D'
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche',
        description: 'Trek past memorials of climbers, through Dughla, and up to Lobuche with views of Khumbu Glacier.',
        altitude: '4,910m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 9,
        title: 'Lobuche to Gorak Shep, Visit EBC',
        description: 'Trek to Gorak Shep, afternoon visit to Everest Base Camp. Return to Gorak Shep for overnight.',
        altitude: '5,140m',
        duration: '7-8 hours',
        meals: 'B, L, D'
      },
      {
        day: 10,
        title: 'Kala Patthar, Trek to Chhukung',
        description: 'Early morning hike to Kala Patthar (5,545m) for sunrise over Everest. Trek to Chhukung.',
        altitude: '4,730m',
        duration: '7-8 hours',
        meals: 'B, L, D'
      },
      {
        day: 11,
        title: 'Chhukung to Island Peak Base Camp',
        description: 'Trek to Island Peak Base Camp. Set up camp and prepare climbing equipment.',
        altitude: '5,200m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 12,
        title: 'Base Camp Training Day',
        description: 'Mountaineering training: use of ice axe, crampons, ropes, and climbing techniques.',
        altitude: '5,200m',
        meals: 'B, L, D'
      },
      {
        day: 13,
        title: 'Base Camp to High Camp',
        description: 'Climb to Island Peak High Camp. Final preparations for summit push.',
        altitude: '5,600m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 14,
        title: 'Summit Day, Return to Base Camp',
        description: 'Summit push starting at 2 AM. Climb glacier, ascend headwall with fixed ropes, reach summit. Return to Base Camp.',
        altitude: '6,165m summit',
        duration: '10-12 hours',
        meals: 'B, L, D'
      },
      {
        day: 15,
        title: 'Reserve Day for Summit',
        description: 'Extra day in case of bad weather or if summit attempt needs to be rescheduled.',
        altitude: '5,200m',
        meals: 'B, L, D'
      },
      {
        day: 16,
        title: 'Base Camp to Pangboche',
        description: 'Descend to Pangboche, celebrate successful summit.',
        altitude: '3,930m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 17,
        title: 'Pangboche to Namche Bazaar',
        description: 'Continue descent through Tengboche to Namche Bazaar.',
        altitude: '3,440m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 18,
        title: 'Namche to Lukla',
        description: 'Final day of trekking back to Lukla. Celebration with crew.',
        altitude: '2,840m',
        duration: '6-7 hours',
        meals: 'B, L, D'
      },
      {
        day: 19,
        title: 'Fly to Kathmandu, Departure',
        description: 'Morning flight to Kathmandu. Transfer to airport for international departure.',
        altitude: '1,400m',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport pickup and drop-off',
      'Kathmandu hotel accommodation with breakfast',
      'Domestic flights (Kathmandu-Lukla-Kathmandu)',
      'Full board meals during trek (breakfast, lunch, dinner)',
      'Teahouse accommodation during trek',
      'Camping equipment for base camp and high camp',
      'Experienced climbing Sherpa guide',
      'Climbing permit and national park fees',
      'All climbing equipment (rope, ice screw, snow bar)',
      'Comprehensive mountaineering training',
      'First aid kit and oxygen cylinder',
      'Porter service (one porter for two trekkers)',
      'Guide and porter insurance',
      'Sleeping bag and down jacket (if needed)',
      'Achievement certificate'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Personal climbing gear (harness, boots, etc.)',
      'Travel and rescue insurance',
      'Lunch and dinner in Kathmandu',
      'Personal expenses (phone, laundry, battery charging)',
      'Alcoholic beverages and bottled drinks',
      'Tips for guide, porter, and driver',
      'Emergency evacuation costs',
      'Any costs arising from unforeseen circumstances'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Previous high-altitude trekking experience (above 4,000m)',
      'Basic mountaineering knowledge is helpful but not required',
      'Ability to walk 5-7 hours daily',
      'Comfortable with exposure and heights',
      'Mental determination and positive attitude',
      'Comprehensive travel insurance including helicopter rescue',
      'Medical clearance from doctor',
      'Proper acclimatization schedule must be followed'
    ],
    technicalRequirements: [
      'Use of crampons on steep ice',
      'Ice axe self-arrest techniques',
      'Fixed rope ascending with jumar',
      'Basic glacier travel and crevasse awareness',
      'Rope team travel',
      'High-altitude camping experience',
      'Training provided at base camp before summit attempt'
    ]
  },
  {
    id: 'mera-peak',
    name: 'Mera Peak',
    height: '6,476m',
    duration: '18 Days',
    difficulty: 'Strenuous Plus',
    season: 'Jan-May, Oct-Dec',
    image: '/assets/images/mera.jpg',
    description: "Nepal's highest trekking peak with stunning panoramic views of five 8,000m peaks including Everest, Lhotse, and Cho Oyu.",
    price: 'Contact for Price',
    accommodation: 'Teahouse & Camping',
    meals: 'B, L & D',
    hiking: '5-7 hours',
    overview: `Mera Peak, at 6,476 meters, is the highest permitted trekking peak in Nepal. The expedition offers spectacular views of five 8,000-meter peaks: Everest, Lhotse, Cho Oyu, Makalu, and Kanchenjunga. 

This expedition takes you through the remote Hinku Valley, passing through pristine forests, traditional Sherpa villages, and crossing high passes. The climb is less technical than Island Peak but requires excellent physical fitness and acclimatization due to the extreme altitude.

The summit day rewards climbers with one of the most spectacular panoramas in the Himalayas. Our experienced team ensures proper acclimatization and provides comprehensive support throughout the expedition.`,
    highlights: [
      'Summit the highest trekking peak in Nepal',
      'Panoramic views of five 8,000m peaks',
      'Trek through remote Hinku Valley',
      'Experience pristine Himalayan wilderness',
      'Cross Zatr La Pass (4,610m)',
      'Visit traditional Sherpa villages',
      'Less technical than other 6,000m peaks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Meet at airport, transfer to hotel, expedition briefing and equipment check.',
        altitude: '1,400m',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Chutanga',
        description: 'Scenic mountain flight to Lukla (2,840m). Begin trek through beautiful landscape to Chutanga.',
        altitude: '3,060m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Chutanga to Tuli Kharka via Zatr La Pass',
        description: 'Cross the challenging Zatr La Pass (4,610m) with spectacular mountain views. Descend to Tuli Kharka.',
        altitude: '3,900m',
        duration: '6-7 hours',
        meals: 'B, L, D'
      },
      {
        day: 4,
        title: 'Tuli Kharka to Kothe',
        description: 'Trek through rhododendron forests and beautiful valleys to reach Kothe in the Hinku Valley.',
        altitude: '4,095m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 5,
        title: 'Kothe to Thangnak',
        description: 'Continue up the Hinku Valley with views of Mera Peak. Trek alongside the Hinku Khola river.',
        altitude: '4,350m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 6,
        title: 'Thangnak to Khare',
        description: 'Short but steep climb to Khare, the last settlement before base camp. Stunning views of Mera Peak.',
        altitude: '5,054m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Khare',
        description: 'Rest day for acclimatization. Optional hike to Mera La (5,415m) for views and acclimatization. Equipment check and climbing preparation.',
        altitude: '5,054m',
        duration: '3-4 hours (optional)',
        meals: 'B, L, D'
      },
      {
        day: 8,
        title: 'Khare to Mera High Camp',
        description: 'Trek on glacier to Mera High Camp. Set up camp and final preparations for summit attempt.',
        altitude: '5,790m',
        duration: '4-5 hours',
        meals: 'B, L, D'
      },
      {
        day: 9,
        title: 'Summit Day - Mera Peak',
        description: 'Early morning (2-3 AM) start for summit push. Climb glacier, navigate crevasses, and reach the summit (6,476m) for breathtaking panoramic views of five 8,000m peaks. Descend to Khare.',
        altitude: '6,476m summit, return to 5,054m',
        duration: '10-12 hours',
        meals: 'B, L, D'
      },
      {
        day: 10,
        title: 'Reserve Day at Khare',
        description: 'Contingency day in case of bad weather or if summit attempt needs to be rescheduled. If not needed, extra rest day.',
        altitude: '5,054m',
        meals: 'B, L, D'
      },
      {
        day: 11,
        title: 'Khare to Kothe',
        description: 'Celebrate successful summit and descend back to Kothe. Enjoy the lower altitude.',
        altitude: '4,095m',
        duration: '4-5 hours',
        meals: 'B, L, D'
      },
      {
        day: 12,
        title: 'Kothe to Tuli Kharka via Zatr La Pass',
        description: 'Retrace route back over Zatr La Pass to Tuli Kharka.',
        altitude: '3,900m',
        duration: '6-7 hours',
        meals: 'B, L, D'
      },
      {
        day: 13,
        title: 'Tuli Kharka to Lukla',
        description: 'Final day of trekking back to Lukla. Celebration dinner with climbing team.',
        altitude: '2,840m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 14,
        title: 'Fly to Kathmandu',
        description: 'Morning flight from Lukla to Kathmandu. Transfer to hotel. Free afternoon for rest or shopping.',
        altitude: '1,400m',
        meals: 'Breakfast'
      },
      {
        day: 15,
        title: 'Sightseeing in Kathmandu Valley',
        description: 'Guided tour of UNESCO World Heritage Sites: Swayambhunath (Monkey Temple), Pashupatinath Temple, Boudhanath Stupa, or Patan Durbar Square.',
        altitude: '1,400m',
        meals: 'Breakfast'
      },
      {
        day: 16,
        title: 'Final Departure',
        description: 'Transfer to Tribhuvan International Airport for your international departure. End of expedition.',
        altitude: '1,400m',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers',
      'Kathmandu hotel with breakfast',
      'Domestic flights',
      'Full board during trek',
      'Camping equipment',
      'Experienced guide and climbing Sherpa',
      'Climbing permit',
      'All necessary equipment',
      'Porter service',
      'Insurance for staff'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Personal climbing gear',
      'Insurance',
      'Personal expenses',
      'Tips'
    ],
    requirements: [
      'Excellent physical condition',
      'Previous high-altitude experience',
      'Ability to walk 6-7 hours daily',
      'Basic mountaineering skills',
      'Travel insurance with helicopter rescue'
    ],
    technicalRequirements: [
      'Glacier travel with crampons',
      'Use of ice axe',
      'Fixed rope techniques',
      'High-altitude endurance'
    ]
  },
  {
    id: 'lobuche-east',
    name: 'Lobuche East',
    height: '6,119m',
    duration: '20 Days',
    difficulty: 'Strenuous Plus',
    season: 'Jan-May, Oct-Dec',
    image: '/assets/images/peak.png',
    description: 'Technical climbing peak in the Everest region offering spectacular views and excellent preparation for higher peaks.',
    price: 'Contact for Price',
    accommodation: 'Teahouse & Camping',
    meals: 'B, L & D',
    hiking: '5-7 hours',
    overview: `Lobuche East at 6,119 meters is a challenging trekking peak in the Khumbu region. More technical than Island Peak, it offers excellent preparation for aspiring mountaineers looking to climb higher peaks in the future.

The expedition follows the classic Everest Base Camp route before branching off to Lobuche Base Camp. The climb involves steep snow and ice slopes, fixed ropes, and requires good technical climbing skills. The summit provides stunning 360-degree views of Everest, Lhotse, Nuptse, Ama Dablam, and many other Himalayan giants.

This expedition is perfect for experienced trekkers with some mountaineering experience who want to challenge themselves on a more technical peak while enjoying the iconic Everest region.`,
    highlights: [
      'Technical mountaineering experience',
      'Follow classic Everest Base Camp route',
      'Summit a challenging 6,000m peak',
      'Spectacular mountain panorama',
      'Excellent preparation for higher peaks',
      'Professional mountaineering training',
      'Small group experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrival at Tribhuvan International Airport. Transfer to hotel. Trek briefing and equipment check.',
        altitude: '1,400m',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding',
        description: 'Scenic flight to Lukla (2,840m). Begin trek through pine forests to Phakding.',
        altitude: '2,610m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar',
        description: 'Cross suspension bridges over Dudh Koshi river. Steep climb to Namche Bazaar, the Sherpa capital.',
        altitude: '3,440m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Hike to Everest View Hotel or visit Khumjung village. Explore Namche market and monastery.',
        altitude: '3,440m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 5,
        title: 'Namche to Tengboche',
        description: 'Trail through rhododendron forest with magnificent mountain views. Visit famous Tengboche monastery.',
        altitude: '3,860m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche',
        description: 'Descend to Deboche, cross the Imja River, and climb to Dingboche with stunning valley views.',
        altitude: '4,410m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Hike to Nangkartshang Peak (5,083m) for acclimatization and panoramic views.',
        altitude: '4,410m',
        duration: '4-5 hours',
        meals: 'B, L, D'
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche',
        description: 'Trek past memorials of climbers, through Dughla, and up to Lobuche with views of Khumbu Glacier.',
        altitude: '4,910m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 9,
        title: 'Lobuche to Lobuche East Base Camp',
        description: 'Trek to Lobuche East Base Camp. Set up camp and prepare climbing equipment.',
        altitude: '5,000m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 10,
        title: 'Base Camp Training Day',
        description: 'Mountaineering training: use of ice axe, crampons, ropes, and climbing techniques.',
        altitude: '5,000m',
        meals: 'B, L, D'
      },
      {
        day: 11,
        title: 'Base Camp to High Camp',
        description: 'Climb to Lobuche East High Camp. Final preparations for summit push.',
        altitude: '5,600m',
        duration: '3-4 hours',
        meals: 'B, L, D'
      },
      {
        day: 12,
        title: 'Summit Day, Return to Base Camp',
        description: 'Summit push starting at 2 AM. Climb steep snow and ice slopes using fixed ropes. Reach summit and return to Base Camp.',
        altitude: '6,119m summit',
        duration: '10-12 hours',
        meals: 'B, L, D'
      },
      {
        day: 13,
        title: 'Reserve Day for Summit',
        description: 'Extra day in case of bad weather or if summit attempt needs to be rescheduled.',
        altitude: '5,000m',
        meals: 'B, L, D'
      },
      {
        day: 14,
        title: 'Base Camp to Gorak Shep',
        description: 'Descend to Gorak Shep, the last stop before Everest Base Camp.',
        altitude: '5,140m',
        duration: '5-6 hours',
        meals: 'B, L, D'
      },
      {
        day: 15,
        title: 'Gorak Shep to Everest Base Camp, Return to Pheriche',
        description: 'Trek to Everest Base Camp for a visit, then descend to Pheriche for overnight.',
        altitude: '4,240m',
        duration: '7-8 hours',
        meals: 'B, L, D'
      },
      {
        day: 16,
        title: 'Pheriche to Namche Bazaar',
        description: 'Continue descent through Tengboche to Namche Bazaar.',
        altitude: '3,440m',
        duration: '6-7 hours',
        meals: 'B, L, D'
      },
      {
        day: 17,
        title: 'Namche to Lukla',
        description: 'Final day of trekking back to Lukla. Celebration with crew.',
        altitude: '2,840m',
        duration: '6-7 hours',
        meals: 'B, L, D'
      },
      {
        day: 18,
        title: 'Fly to Kathmandu, Departure',
        description: 'Morning flight to Kathmandu. Transfer to airport for international departure.',
        altitude: '1,400m',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All airport transfers',
      'Hotel in Kathmandu',
      'Lukla flights',
      'All meals during trek',
      'Teahouse and camping accommodation',
      'Climbing guide and Sherpa',
      'All permits and fees',
      'Climbing equipment',
      'Group equipment',
      'Porter service'
    ],
    excluded: [
      'International airfare',
      'Visa fees',
      'Personal gear',
      'Insurance',
      'Meals in Kathmandu',
      'Personal expenses',
      'Tips and gratuities'
    ],
    requirements: [
      'Strong physical fitness',
      'High-altitude trekking experience',
      'Basic to intermediate mountaineering skills',
      'Comfortable with technical climbing',
      'Mental toughness',
      'Comprehensive insurance'
    ],
    technicalRequirements: [
      'Steep ice and snow climbing',
      'Fixed rope ascending',
      'Ice axe and crampon proficiency',
      'Exposure to steep terrain',
      'Glacier navigation'
    ]
  }
];
