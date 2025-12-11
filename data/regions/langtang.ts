import type { Trek } from '../treks';

export const langtangRegionTreks: Trek[] = [
  {
    id: 'langtang-valley',
    name: 'Langtang Valley Trek',
    duration: '10 Days',
    altitude: '4,984m (16,352ft)',
    difficulty: 'Moderate',
    description: 'Explore the beautiful Langtang Valley, known as the "Valley of Glaciers" with stunning mountain views, rich Tamang culture, and diverse ecosystems. This trek offers spectacular mountain views with relatively easy access from Kathmandu.',
    highlights: [
      'Langtang National Park - Rich biodiversity',
      'Kyanjin Gompa (3,870m) - Ancient Buddhist monastery',
      'Kyanjin Ri (4,773m) - Spectacular viewpoint',
      'Langtang Lirung (7,227m) - Dominant peak views',
      'Tamang culture and traditional villages',
      'Cheese factory visit in Kyanjin Gompa',
      'Dense rhododendron and bamboo forests',
      'Close proximity to Kathmandu',
      'Views of Ganesh Himal and Langtang ranges',
      'Traditional stone houses and culture'
    ],
    image: '/assets/images/kyangjin.jpg',
    price: '$799',
    season: 'Oct-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-15 people',
    region: 'Langtang Region',
    adventureType: 'trekking',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m)',
        description: 'Airport transfer and trek briefing. Welcome dinner with team introduction.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Drive to Syabrubesi (1,550m)',
        description: 'Scenic drive through terraced fields and traditional villages to trek starting point.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Syabrubesi to Lama Hotel (2,380m)',
        description: 'Begin trekking through Langtang National Park. Dense forests with wildlife spotting opportunities.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Lama Hotel to Langtang Village (3,430m)',
        description: 'Climb through beautiful forests with increasing mountain views. Enter the Langtang Valley proper.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Langtang Village to Kyanjin Gompa (3,870m)',
        description: 'Trek through traditional Tamang villages with spectacular mountain views. Visit ancient monastery.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 6,
        title: 'Kyanjin Gompa - Exploration Day',
        description: 'Acclimatization day with optional hikes to Kyanjin Ri (4,773m) or Tserko Ri (4,984m). Visit cheese factory.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-6 hours (optional hikes)'
      },
      {
        day: 7,
        title: 'Kyanjin Gompa to Lama Hotel',
        description: 'Begin descent retracing steps with different perspectives of the valley.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 8,
        title: 'Lama Hotel to Syabrubesi',
        description: 'Final trekking day descending through forests back to road head.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'Drive to Kathmandu',
        description: 'Return drive to Kathmandu. Rest, shopping, and farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Transfer to airport for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu (twin sharing)',
      'Teahouse accommodation during trek',
      'All meals during trekking days',
      'Professional English-speaking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (Langtang National Park, TIMS)',
      'Transportation (Kathmandu-Syabrubesi-Kathmandu)',
      'Welcome and farewell dinners',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses',
      'Tips for guide and porter',
      'Extra meals in Kathmandu',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs'
    ],
    requirements: [
      'Basic to moderate physical fitness',
      'Ability to walk 5-7 hours daily',
      'Previous hiking experience helpful',
      'Travel and medical insurance',
      'Valid passport with 6 months validity',
      'Appropriate trekking gear',
      'Positive attitude for mountain conditions'
    ]
  },
  {
    id: 'langtang-gosainkunda',
    name: 'Langtang Gosainkunda Trek',
    duration: '12 Days',
    altitude: '4,984m (16,352ft)',
    difficulty: 'Moderate',
    description: 'Combine the beautiful Langtang Valley with the sacred Gosainkunda Lakes. This trek offers diverse landscapes from subtropical forests to alpine lakes, rich cultural experiences, and spectacular mountain views.',
    highlights: [
      'Langtang Valley - Valley of Glaciers',
      'Gosainkunda Lakes (4,380m) - Sacred pilgrimage site',
      'Kyanjin Gompa and Ri - Mountain viewpoints',
      'Tamang and Sherpa cultural experiences',
      'Lauribina Pass (4,610m) - High mountain pass',
      'Diverse ecosystems and wildlife',
      'Hindu and Buddhist pilgrimage sites',
      'Views of Langtang Lirung and Ganesh Himal'
    ],
    image: '/assets/images/gosaikunda.jpg',
    price: '$999',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-12 people',
    region: 'Langtang Region',
    adventureType: 'trekking',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Airport transfer and trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Drive to Syabrubesi',
        description: 'Scenic drive to trek starting point.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Syabrubesi to Lama Hotel',
        description: 'Begin trekking through national park.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Lama Hotel to Langtang Village',
        description: 'Continue through forests to Langtang Valley.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Langtang Village to Kyanjin Gompa',
        description: 'Reach monastery with mountain views.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 6,
        title: 'Kyanjin Gompa exploration',
        description: 'Hike to viewpoints and explore monastery.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-6 hours'
      },
      {
        day: 7,
        title: 'Kyanjin Gompa to Lama Hotel',
        description: 'Retrace steps down the valley.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 8,
        title: 'Lama Hotel to Thulo Syabru',
        description: 'Cross to Gosainkunda trail.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'Thulo Syabru to Gosainkunda',
        description: 'Climb to sacred lakes.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 10,
        title: 'Gosainkunda to Dhunche',
        description: 'Descend via Lauribina Pass.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 11,
        title: 'Drive to Kathmandu',
        description: 'Return to capital city.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '5-6 hours drive'
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Airport transfer.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All permits and transportation',
      'Professional guide and porter',
      'All accommodation and meals during trek',
      'Welcome and farewell dinners'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips for staff'
    ],
    requirements: [
      'Moderate fitness level',
      'Travel insurance',
      'Appropriate gear'
    ]
  }
];
