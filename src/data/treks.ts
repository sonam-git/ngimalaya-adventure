export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
  walkingHours?: string;
}

export interface Trek {
  id: string;
  name: string;
  duration: string;
  altitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  description: string;
  highlights: string[];
  image: string;
  price: string;
  season: string;
  groupSize: string;
  region: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  requirements: string[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  trekCount: number;
  popularTreks: string[];
}

export const popularTreks: Trek[] = [
  {
    id: 'abc-trek',
    name: 'Annapurna Base Camp Trek',
    duration: '11 Days',
    altitude: '4,130m',
    difficulty: 'Moderate',
    description: 'Experience the stunning beauty of the Annapurna massif with breathtaking mountain views and diverse landscapes.',
    highlights: [
      'Spectacular views of Annapurna I, II, III, and IV',
      'Machapuchare (Fishtail) mountain views',
      'Cultural diversity of Gurung and Magar villages',
      'Hot springs at Jhinu Danda',
      'Rhododendron forests'
    ],
    image: '/api/placeholder/400/300',
    price: '$899',
    season: 'Sep-Nov, Mar-May',
    groupSize: '2-12 people',
    region: 'Annapurna Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu, transfer to hotel, and trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Drive to Pokhara',
        description: 'Scenic drive to Pokhara, prepare for the trek.',
        accommodation: 'Hotel',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Pokhara to Ghandruk',
        description: 'Drive to Nayapul and trek to beautiful Ghandruk village.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 4,
        title: 'Ghandruk to Chhomrong',
        description: 'Trek through rhododendron forests to Chhomrong.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Chhomrong to Dovan',
        description: 'Descend to Chhomrong Khola and ascend to Dovan.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      }
    ],
    included: [
      'Airport transfers',
      'Accommodation in Kathmandu and Pokhara',
      'Teahouse accommodation during trek',
      'All meals during trek',
      'Professional English-speaking guide',
      'Porter service',
      'All permits and fees',
      'First aid kit'
    ],
    excluded: [
      'International flights',
      'Nepal visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips for guide and porter',
      'Extra meals in Kathmandu/Pokhara'
    ],
    requirements: [
      'Good physical fitness',
      'Previous hiking experience recommended',
      'Travel insurance mandatory',
      'Valid passport (6 months validity)',
      'Appropriate trekking gear'
    ]
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit Trek',
    duration: '17 Days',
    altitude: '5,416m',
    difficulty: 'Challenging',
    description: 'The classic circuit trek offering diverse landscapes from subtropical forests to high alpine terrain.',
    highlights: [
      'Cross the famous Thorong La Pass (5,416m)',
      'Visit the sacred Muktinath Temple',
      'Diverse ecosystems and landscapes',
      'Traditional Tibetan Buddhist culture',
      'Stunning views of Annapurna and Dhaulagiri ranges'
    ],
    image: '/api/placeholder/400/300',
    price: '$1,299',
    season: 'Oct-Nov, Mar-Apr',
    groupSize: '2-10 people',
    region: 'Annapurna Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Drive to Besisahar', description: 'Drive to trek starting point.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '1 hour' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Good fitness level', 'Travel insurance', 'Appropriate gear']
  },
  {
    id: 'ebc-gokyo',
    name: 'EBC Trek via Gokyo/Cho-La',
    duration: '18 Days',
    altitude: '5,550m',
    difficulty: 'Strenuous',
    description: 'Combine Everest Base Camp with the stunning Gokyo Lakes via the challenging Cho La Pass.',
    highlights: [
      'Everest Base Camp (5,364m)',
      'Gokyo Lakes - pristine turquoise lakes',
      'Climb Gokyo Ri for panoramic views',
      'Cross Cho La Pass (5,420m)',
      'Views of four 8000m peaks'
    ],
    image: '/api/placeholder/400/300',
    price: '$1,899',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-8 people',
    region: 'Everest Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Fly to Lukla', description: 'Scenic flight and trek to Phakding.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '3 hours' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Excellent fitness level', 'High altitude experience', 'Travel insurance']
  },
  {
    id: 'everest-three-passes',
    name: 'Everest Three Passes Trek',
    duration: '20 Days',
    altitude: '5,535m',
    difficulty: 'Strenuous',
    description: 'The ultimate Everest region challenge crossing three high passes with incredible mountain views.',
    highlights: [
      'Cross Kongma La, Cho La, and Renjo La passes',
      'Everest Base Camp and Kala Patthar',
      'Gokyo Lakes and Gokyo Ri',
      'Remote valleys and glacial landscapes',
      'Sherpa culture and monasteries'
    ],
    image: '/api/placeholder/400/300',
    price: '$2,299',
    season: 'Oct-Nov, Apr-May',
    groupSize: '2-6 people',
    region: 'Everest Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Fly to Lukla', description: 'Scenic flight and trek preparation.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '3 hours' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Excellent fitness level', 'High altitude experience', 'Mountaineering experience']
  },
  {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    duration: '18 Days',
    altitude: '5,106m',
    difficulty: 'Challenging',
    description: 'Off-the-beaten-path trek around the eighth highest mountain in the world.',
    highlights: [
      'Cross Larkya La Pass (5,106m)',
      'Views of Manaslu (8,163m)',
      'Restricted area permits required',
      'Tibetan Buddhist culture',
      'Remote mountain villages'
    ],
    image: '/api/placeholder/400/300',
    price: '$1,699',
    season: 'Sep-Nov, Mar-May',
    groupSize: '2-10 people',
    region: 'Manaslu Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Drive to Soti Khola', description: 'Drive to trek starting point.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '2 hours' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Good fitness level', 'High altitude experience', 'Travel insurance']
  },
  {
    id: 'kanchenjunga-circuit',
    name: 'Kanchenjunga Circuit Trek',
    duration: '25 Days',
    altitude: '5,143m',
    difficulty: 'Strenuous',
    description: 'Remote trek to the base camps of the third highest mountain in the world.',
    highlights: [
      'North and South Base Camps of Kanchenjunga',
      'Pristine wilderness and biodiversity',
      'Spectacular mountain views',
      'Traditional Limbu and Rai cultures',
      'Rhododendron and alpine forests'
    ],
    image: '/api/placeholder/400/300',
    price: '$2,799',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-8 people',
    region: 'Kanchenjunga Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Fly to Bhadrapur', description: 'Flight and drive to Taplejung.', accommodation: 'Hotel', meals: 'All meals', walkingHours: '1 hour' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Excellent fitness level', 'Remote trekking experience', 'Travel insurance']
  }
];

// Add more treks for different regions
export const additionalTreks: Trek[] = [
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp Trek',
    duration: '16 Days',
    altitude: '5,364m',
    difficulty: 'Challenging',
    description: 'The classic trek to the base camp of the world\'s highest mountain with stunning Himalayan views.',
    highlights: [
      'Everest Base Camp (5,364m)',
      'Kala Patthar viewpoint (5,545m)',
      'Sherpa culture and monasteries',
      'Namche Bazaar - gateway to Everest',
      'Sagarmatha National Park'
    ],
    image: '/api/placeholder/400/300',
    price: '$1,599',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-12 people',
    region: 'Everest Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Fly to Lukla', description: 'Scenic flight and trek to Phakding.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '3 hours' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Good fitness level', 'High altitude experience', 'Travel insurance']
  },
  {
    id: 'langtang-valley',
    name: 'Langtang Valley Trek',
    duration: '10 Days',
    altitude: '4,984m',
    difficulty: 'Moderate',
    description: 'Explore the beautiful Langtang Valley known as the "Valley of Glaciers" with stunning mountain views.',
    highlights: [
      'Langtang National Park',
      'Kyanjin Gompa monastery',
      'Langtang Lirung views',
      'Tamang culture and villages',
      'Cheese factory visit'
    ],
    image: '/api/placeholder/400/300',
    price: '$799',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-15 people',
    region: 'Langtang Region',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and trek briefing.', accommodation: 'Hotel', meals: 'Welcome Dinner' },
      { day: 2, title: 'Drive to Syabrubesi', description: 'Drive to trek starting point.', accommodation: 'Teahouse', meals: 'All meals', walkingHours: '1 hour' }
    ],
    included: ['All permits', 'Guide and porter', 'Accommodation', 'Meals during trek'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses'],
    requirements: ['Basic fitness level', 'Travel insurance', 'Appropriate gear']
  }
];

// Combine all treks
export const allTreks = [...popularTreks, ...additionalTreks];

// Regions data
export const trekRegions: Region[] = [
  {
    id: 'everest-region',
    name: 'Everest Region',
    description: 'Home to the world\'s highest peak, offering iconic treks with spectacular mountain views and rich Sherpa culture.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 3,
    popularTreks: ['Everest Base Camp Trek', 'EBC Trek via Gokyo/Cho-La', 'Everest Three Passes Trek']
  },
  {
    id: 'annapurna-region',
    name: 'Annapurna Region',
    description: 'Diverse landscapes from subtropical forests to high alpine terrain with stunning Annapurna massif views.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 2,
    popularTreks: ['Annapurna Base Camp Trek', 'Annapurna Circuit Trek']
  },
  {
    id: 'dolpo-region',
    name: 'Dolpo Region',
    description: 'Remote and pristine region offering unique Tibetan Buddhist culture and stunning trans-Himalayan landscapes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 2,
    popularTreks: ['Upper Dolpo Trek', 'Lower Dolpo Trek']
  },
  {
    id: 'manang-mustang',
    name: 'Manang | Mustang',
    description: 'Ancient kingdoms with unique culture, dramatic landscapes, and fascinating Buddhist monasteries.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 2,
    popularTreks: ['Upper Mustang Trek', 'Manang Circuit Trek']
  },
  {
    id: 'kanchenjunga-region',
    name: 'Kanchenjunga Region',
    description: 'Remote wilderness around the third highest mountain in the world with pristine biodiversity.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 1,
    popularTreks: ['Kanchenjunga Circuit Trek']
  },
  {
    id: 'langtang-region',
    name: 'Langtang Region',
    description: 'Beautiful valley known as "Valley of Glaciers" with Tamang culture and stunning mountain views.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 1,
    popularTreks: ['Langtang Valley Trek']
  },
  {
    id: 'dhaulagiri-region',
    name: 'Dhaulagiri Region',
    description: 'Challenging treks around the seventh highest mountain with dramatic landscapes and remote villages.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 1,
    popularTreks: ['Dhaulagiri Circuit Trek']
  },
  {
    id: 'manaslu-region',
    name: 'Manaslu Region',
    description: 'Off-the-beaten-path treks around the eighth highest mountain with Tibetan Buddhist culture.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    trekCount: 1,
    popularTreks: ['Manaslu Circuit Trek']
  }
];

export const services = [
  {
    title: 'Trekking',
    description: 'Professional guided treks to Nepal\'s most spectacular destinations',
    icon: '🥾'
  },
  {
    title: 'Mountaineering',
    description: 'Expedition services for peak climbing and mountaineering adventures',
    icon: '⛰️'
  },
  {
    title: 'Cultural Tours',
    description: 'Immerse yourself in Nepal\'s rich cultural heritage and traditions',
    icon: '🏛️'
  },
  {
    title: 'Custom Packages',
    description: 'Personalized itineraries tailored to your preferences and schedule',
    icon: '🎯'
  }
];
