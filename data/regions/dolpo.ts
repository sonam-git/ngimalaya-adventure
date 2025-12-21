import type { Trek } from '../treks';

export const dolpoRegionTreks: Trek[] = [
  {
    id: 'upper-dolpo',
    name: 'Upper Dolpo Trek',
    duration: '21 Days',
    altitude: '5,115m | 16,781ft',
    difficulty: 'Strenuous',
    description: 'Journey into the remote trans-Himalayan region of Upper Dolpo, often called the "Last Forbidden Kingdom." Experience pristine Tibetan Buddhist culture, ancient monasteries, and dramatic high-altitude landscapes.',
    highlights: [
      'Shey Phoksundo Lake - Deepest lake in Nepal',
      'Shey Gompa - Ancient monastery and meditation caves',
      'Crystal Mountain - Sacred pilgrimage site',
      'Authentic Tibetan Buddhist culture',
      'Trans-Himalayan landscapes',
      'Rare wildlife including snow leopards',
      'Ancient trade routes and caravan trails',
      'Remote villages unchanged for centuries'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$3,299',
    season: 'May-Sep (Best: Jun-Aug)',
    groupSize: '2-8 people',
    region: 'Dolpo Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Airport transfer, permit arrangements, trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Fly to Nepalgunj',
        description: 'Flight to western Nepal gateway.',
        accommodation: 'Hotel',
        meals: 'All meals'
      },
      {
        day: 3,
        title: 'Fly to Juphal, Trek to Dunai',
        description: 'Mountain flight to remote airstrip, begin trekking.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Dunai to Tarakot',
        description: 'Trek along Thuli Bheri River through terraced fields and traditional villages.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Tarakot to Dho Tarap',
        description: 'Cross Numa La Pass and enter the high Tarap Valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 6,
        title: 'Exploration Day in Dho Tarap',
        description: 'Explore traditional Tibetan village and ancient monastery.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 7,
        title: 'Dho Tarap to Numa La Base Camp',
        description: 'Trek towards high pass, ascending through alpine terrain.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Cross Numa La Pass to Pelung Tang',
        description: 'Cross challenging high pass (5,115m) with spectacular mountain views.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '8-9 hours'
      },
      {
        day: 9,
        title: 'Pelung Tang to Shey Gompa',
        description: 'Trek to ancient monastery near Crystal Mountain.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 10,
        title: 'Exploration Day at Shey Gompa',
        description: 'Visit monastery, meditation caves, and Crystal Mountain.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Shey Gompa to Namduna Gaon',
        description: 'Continue through high-altitude desert landscape.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 12,
        title: 'Namduna Gaon to Saldang',
        description: 'Trek to traditional Tibetan village.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 13,
        title: 'Saldang to Yangze Gompa',
        description: 'Visit remote monastery and traditional villages.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 14,
        title: 'Yangze Gompa to Sibu',
        description: 'Continue trek through dramatic landscapes.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 15,
        title: 'Sibu to Jeng La Phedi',
        description: 'Trek towards second high pass crossing.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Cross Jeng La Pass to Tokyu Gaon',
        description: 'Cross Jeng La Pass (5,090m) and descend to village.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 17,
        title: 'Tokyu Gaon to Dho Tarap',
        description: 'Return trek to Dho Tarap valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 18,
        title: 'Dho Tarap to Dunai',
        description: 'Long descent back to Dunai.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 19,
        title: 'Dunai to Juphal',
        description: 'Final trekking day to airstrip.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 20,
        title: 'Fly to Nepalgunj, then Kathmandu',
        description: 'Return flights to Kathmandu.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 21,
        title: 'Departure',
        description: 'Airport transfer for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All domestic flights',
      'Camping equipment and crew',
      'All permits including restricted area',
      'Professional guide and support staff',
      'All meals during trek'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips for staff'
    ],
    requirements: [
      'Excellent fitness required',
      'Previous high-altitude experience',
      'Restricted area permit (minimum 2 people)',
      'Comprehensive insurance'
    ],
    adventureType: 'trekking'
  },
  {
    id: 'lower-dolpo',
    name: 'Lower Dolpo Trek',
    duration: '18 Days',
    altitude: '3,660m | 12,008ft',
    difficulty: 'Challenging',
    description: 'Explore the more accessible part of Dolpo region featuring the stunning Phoksundo Lake and traditional Bon Po culture in a dramatic trans-Himalayan setting.',
    highlights: [
      'Phoksundo Lake - Stunning turquoise alpine lake',
      'Traditional Bon Po culture',
      'Remote Himalayan villages',
      'Dramatic landscapes and gorges',
      'Wildlife spotting opportunities',
      'Ancient monasteries and culture'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$2,299',
    season: 'May-Oct',
    groupSize: '2-10 people',
    region: 'Dolpo Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Airport transfer and briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Fly to Nepalgunj',
        description: 'Flight to western Nepal gateway city.',
        accommodation: 'Hotel',
        meals: 'All meals'
      },
      {
        day: 3,
        title: 'Fly to Juphal, Trek to Dunai',
        description: 'Scenic mountain flight and trek to district headquarters.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '2-3 hours'
      },
      {
        day: 4,
        title: 'Dunai to Chhepka',
        description: 'Trek along Thuli Bheri River through pine forests.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Chhepka to Chunuwar',
        description: 'Continue upstream through dramatic gorges.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Chunuwar to Phoksundo Khola',
        description: 'Trek towards the famous lake region.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Phoksundo Khola to Phoksundo Lake',
        description: 'Reach the stunning turquoise Phoksundo Lake.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Exploration Day at Phoksundo Lake',
        description: 'Explore lake, visit monastery, and enjoy the scenery.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 9,
        title: 'Phoksundo Lake to Phoksundo Bhanjyang',
        description: 'Trek to high camp for pass crossing.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Cross Kang La Pass to Shey Gompa',
        description: 'Cross challenging pass (5,115m) to ancient monastery.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '7-8 hours'
      },
      {
        day: 11,
        title: 'Exploration Day at Shey Gompa',
        description: 'Visit monastery and meditation caves.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 12,
        title: 'Shey Gompa to Namduna Gaon',
        description: 'Trek through high-altitude landscapes.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 13,
        title: 'Namduna Gaon to Saldang',
        description: 'Visit traditional Tibetan village.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 14,
        title: 'Saldang to Yangze Gompa',
        description: 'Trek to remote monastery.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Yangze Gompa to Dho Tarap',
        description: 'Long trek to Tarap valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 16,
        title: 'Dho Tarap to Tarakot',
        description: 'Descend towards lower elevations.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Tarakot to Dunai',
        description: 'Final trekking day back to Dunai.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 18,
        title: 'Fly to Kathmandu via Nepalgunj',
        description: 'Return flights to Kathmandu.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      }
    ],
    included: ['Permits', 'Guide', 'Accommodation', 'Meals'],
    excluded: ['Flights', 'Insurance', 'Personal gear'],
    requirements: ['Good fitness', 'Insurance', 'Appropriate gear'],
    adventureType: 'trekking'
  }
];
