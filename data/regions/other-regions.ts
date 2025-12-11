import type { Trek } from '../treks';

// Dolpo Region Treks
export const dolpoRegionTreks: Trek[] = [
  {
    id: 'upper-dolpo',
    name: 'Upper Dolpo Trek',
    duration: '21 Days',
    altitude: '5,115m (16,781ft)',
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
    altitude: '3,660m (12,008ft)',
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
].map(trek => ({ ...trek, adventureType: 'trekking', difficulty: trek.difficulty as ('Strenuous' | 'Challenging' | 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme') }));

// Mustang Region Treks
export const mustangRegionTreks: Trek[] = [
  {
    id: 'upper-mustang',
    name: 'Upper Mustang Trek',
    duration: '14 Days',
    altitude: '3,840m (12,598ft)',
    difficulty: 'Moderate',
    description: 'Journey to the ancient forbidden kingdom of Mustang, featuring unique Tibetan culture, dramatic desert landscapes, and the walled city of Lo Manthang.',
    highlights: [
      'Lo Manthang - Walled capital city',
      'Ancient Tibetan Buddhist monasteries',
      'Dramatic desert landscapes',
      'Traditional Tibetan culture',
      'Ancient cave dwellings',
      'Trans-Himalayan scenery',
      'Unique geology and landscape',
      'Historical trade routes'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$1,899',
    season: 'Mar-Nov (Best: Apr-Oct)',
    groupSize: '2-12 people',
    region: 'Mustang Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Transfer to hotel, trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Fly to Pokhara',
        description: 'Scenic flight to lake city.',
        accommodation: 'Hotel',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Fly to Jomsom, Trek to Charang',
        description: 'Mountain flight and begin trekking in Mustang.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Charang to Lo Manthang',
        description: 'Trek to the walled capital city of Upper Mustang.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 5,
        title: 'Exploration Day in Lo Manthang',
        description: 'Explore the ancient walled city, visit monasteries and palaces.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 6,
        title: 'Lo Manthang to Drakmar',
        description: 'Trek through dramatic red cliff landscapes.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Drakmar to Ghar Gompa',
        description: 'Visit ancient monastery and cave dwellings.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Ghar Gompa to Charang',
        description: 'Return trek through desert landscapes.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'Charang to Ghemi',
        description: 'Trek to traditional Mustang village.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 10,
        title: 'Ghemi to Tsarang',
        description: 'Continue through ancient villages and monasteries.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Tsarang to Ghaymi',
        description: 'Trek through traditional Tibetan settlements.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 12,
        title: 'Ghaymi to Jomsom',
        description: 'Final trekking day back to airstrip.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 13,
        title: 'Fly to Pokhara, then Kathmandu',
        description: 'Return flights to Kathmandu.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Airport transfer for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All domestic flights',
      'Accommodation and meals',
      'Professional guide',
      'Restricted area permits',
      'Transportation'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses'
    ],
    requirements: [
      'Moderate fitness level',
      'Travel insurance',
      'Restricted area permit requirements'
    ],
    adventureType: 'trekking'
  }
].map(trek => ({ ...trek, adventureType: 'trekking', difficulty: trek.difficulty as ('Strenuous' | 'Challenging' | 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme') }));

// Dhaulagiri Region Treks
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
].map(trek => ({ ...trek, adventureType: 'trekking', difficulty: trek.difficulty as ('Strenuous' | 'Challenging' | 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme') }));

// Makalu Region Treks
export const makaluRegionTreks: Trek[] = [
  {
    id: 'makalu-base-camp',
    name: 'Makalu Base Camp Trek',
    duration: '20 Days',
    altitude: '4,870m (15,978ft)',
    difficulty: 'Strenuous',
    description: 'Remote wilderness trek to the base camp of Makalu, the fifth highest mountain in the world. Experience pristine nature and diverse ecosystems.',
    highlights: [
      'Makalu (8,485m) - Fifth highest mountain',
      'Makalu Barun National Park',
      'Diverse ecosystems and wildlife',
      'Remote Sherpa villages',
      'Pristine wilderness experience',
      'Technical terrain and river crossings',
      'Spectacular mountain views',
      'Rare flora and fauna'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$2,599',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-8 people',
    region: 'Makalu Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Preparation for remote trek.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Fly to Tumlingtar',
        description: 'Flight to eastern Nepal airstrip.',
        accommodation: 'Lodge',
        meals: 'All meals'
      },
      {
        day: 3,
        title: 'Tumlingtar to Chichila',
        description: 'Begin trekking through traditional villages.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Chichila to Num',
        description: 'Trek through terraced farmland.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Num to Seduwa',
        description: 'Descend to Arun River valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Seduwa to Tashigaon',
        description: 'Enter Makalu Barun National Park.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 7,
        title: 'Tashigaon to Khongma Danda',
        description: 'Climb to high ridgeline camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 8,
        title: 'Khongma Danda to Dobate',
        description: 'Cross high pass into upper valley.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'Dobate to Yangri Kharka',
        description: 'Trek through rhododendron forests.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Yangri Kharka to Langmale Kharka',
        description: 'Continue towards base camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Langmale Kharka to Makalu Base Camp',
        description: 'Reach Makalu Base Camp at 4,870m.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 12,
        title: 'Exploration Day at Makalu Base Camp',
        description: 'Rest day and exploration of surrounding area.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 13,
        title: 'Makalu Base Camp to Yangri Kharka',
        description: 'Begin return journey.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 14,
        title: 'Yangri Kharka to Dobate',
        description: 'Continue descent.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Dobate to Khongma Danda',
        description: 'Cross back over high pass.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Khongma Danda to Tashigaon',
        description: 'Descend to village.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Tashigaon to Seduwa',
        description: 'Continue descent towards airstrip.',
        accommodation: 'Camping',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 18,
        title: 'Seduwa to Tumlingtar',
        description: 'Final trekking day to airstrip.',
        accommodation: 'Lodge',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 19,
        title: 'Fly to Kathmandu',
        description: 'Return flight to capital.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 20,
        title: 'Departure',
        description: 'Airport transfer for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Camping equipment',
      'Professional crew',
      'All permits',
      'Transportation'
    ],
    excluded: [
      'Personal gear',
      'Insurance',
      'International flights'
    ],
    requirements: [
      'Excellent fitness',
      'Wilderness experience',
      'Self-sufficiency skills'
    ],
    adventureType: 'trekking'
  }
].map(trek => ({ ...trek, adventureType: 'trekking', difficulty: trek.difficulty as ('Strenuous' | 'Challenging' | 'Easy' | 'Moderate' | 'Hard' | 'Moderate to Hard' | 'Extreme') }));
