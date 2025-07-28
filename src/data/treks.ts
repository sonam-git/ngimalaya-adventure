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
    groupSize: '2-12 people'
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
    groupSize: '2-10 people'
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
    groupSize: '2-8 people'
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
    groupSize: '2-6 people'
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
    groupSize: '2-10 people'
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
    groupSize: '2-8 people'
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
