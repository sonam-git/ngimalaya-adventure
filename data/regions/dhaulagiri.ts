import type { Trek } from '../treks';

export const dhaulagiriRegionTreks: Trek[] = [
  {
    id: 'dhaulagiri-circuit',
    name: 'Dhaulagiri Circuit Trek',
    duration: '19 Days',
    altitude: '5,360m (17,585ft)',
    difficulty: 'Strenuous',
    description: 'Ultimate wilderness adventure around Dhaulagiri, the seventh highest mountain in the world. This technical trek includes glacier crossings and high passes.',
    highlights: [
      'Dhaulagiri (8,167m) - Seventh highest mountain',
      'French Pass (5,360m) - Technical high pass',
      'Dhampus Pass (5,258m) - Challenging crossing',
      'Hidden Valley - Remote glacial valley',
      'Glacier crossings and technical terrain',
      'Ultimate wilderness experience',
      'Spectacular mountain views',
      'Camping in pristine environment'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$2,899',
    season: 'Apr-May, Oct-Nov',
    groupSize: '2-6 people',
    region: 'Dhaulagiri Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrival and preparation.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu to Beni',
        description: 'Drive to Beni, gateway to Dhaulagiri region.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '8-9 hours drive'
      },
      {
        day: 3,
        title: 'Beni to Darbang',
        description: 'Begin trekking through traditional villages.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Darbang to Dharapani',
        description: 'Trek along Myagdi Khola river.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 5,
        title: 'Dharapani to Muri',
        description: 'Continue upstream through forests.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Muri to Boghara',
        description: 'Trek towards base camp area.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 7,
        title: 'Boghara to Dobang',
        description: 'Enter high mountain environment.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Dobang to Italian Base Camp',
        description: 'Trek to historic base camp site.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 9,
        title: 'Italian Base Camp to Glacier Camp',
        description: 'Move higher towards pass crossing.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 10,
        title: 'Glacier Camp to Dhampus Pass',
        description: 'Cross technical Dhampus Pass (5,258m).',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '8-9 hours'
      },
      {
        day: 11,
        title: 'Hidden Valley Exploration',
        description: 'Rest day in the remote Hidden Valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 12,
        title: 'Hidden Valley to Dhaulagiri Base Camp',
        description: 'Trek to Dhaulagiri Base Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 13,
        title: 'French Pass Crossing',
        description: 'Cross challenging French Pass (5,360m).',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '9-10 hours'
      },
      {
        day: 14,
        title: 'Descent to Yak Kharka',
        description: 'Descend from high altitude.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 15,
        title: 'Yak Kharka to Marpha',
        description: 'Continue descent to traditional village.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Marpha to Jomsom',
        description: 'Trek to airport town.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 17,
        title: 'Fly to Pokhara',
        description: 'Mountain flight to lake city.',
        accommodation: 'Hotel',
        meals: 'All meals'
      },
      {
        day: 18,
        title: 'Pokhara to Kathmandu',
        description: 'Return to capital city.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 19,
        title: 'Departure',
        description: 'Airport transfer for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Technical equipment',
      'Experienced guides',
      'Camping equipment',
      'All permits'
    ],
    excluded: [
      'Personal mountaineering gear',
      'Insurance',
      'International flights'
    ],
    requirements: [
      'Previous mountaineering experience',
      'Excellent fitness',
      'Technical gear knowledge'
    ],
    adventureType: 'trekking'
  }
];
