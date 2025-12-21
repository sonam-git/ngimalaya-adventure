export interface SafariItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string;
}

export interface SafariPackage {
  id: string;
  name: string;
  location: string;
  duration: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
  badge: string;
  overview: string;
  itinerary: SafariItineraryDay[];
  included: string[];
  excluded: string[];
  requirements: string[];
  bestTime: string;
  wildlife: string[];
  activities: string[];
}

export const safariPackages: SafariPackage[] = [
  {
    id: 'chitwan-national-park',
    name: 'Chitwan National Park',
    location: 'Chitwan, Nepal',
    duration: '2-4 Days',
    type: 'UNESCO Site',
    image: './assets/images/chitawan.jpg',
    description: 'Home to the rare one-horned rhinoceros and Bengal tigers. Experience jungle safaris, canoe rides, and cultural programs.',
    highlights: ['Jungle Safari', 'Canoe Ride', 'Elephant Ride', 'Cultural Programs', 'Bird Watching'],
    badge: 'Family Friendly',
    overview: `Chitwan National Park, a UNESCO World Heritage Site, is Nepal's first national park and one of the best wildlife viewing destinations in Asia. Covering 932 square kilometers of forests, grasslands, and rivers in the subtropical lowlands, Chitwan is home to an incredible variety of wildlife including the endangered one-horned rhinoceros, Bengal tigers, leopards, and over 500 species of birds.

The park offers a perfect blend of wildlife encounters, cultural experiences, and adventure activities. Stay in comfortable lodges, explore the jungle on elephant back or in open jeeps, glide silently down the Rapti River in dugout canoes, and immerse yourself in the rich Tharu culture.

Whether you're a wildlife enthusiast, photographer, or family looking for an exciting adventure, Chitwan offers an unforgettable safari experience just a short distance from Kathmandu or Pokhara.`,
    bestTime: 'October to March for best wildlife viewing. April-May good for bird watching. Avoid June-September monsoon.',
    wildlife: [
      'One-horned Rhinoceros',
      'Bengal Tiger',
      'Leopard',
      'Sloth Bear',
      'Wild Elephant',
      'Gharial Crocodile',
      'Gangetic Dolphin',
      'Four species of Deer',
      'Wild Boar',
      'Monkey species',
      'Over 500 bird species'
    ],
    activities: [
      'Jeep Safari',
      'Elephant Safari',
      'Canoe Ride',
      'Jungle Walk',
      'Bird Watching',
      'Tharu Cultural Program',
      'Village Tour',
      'Elephant Breeding Center Visit',
      'Sunset Views'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Jungle Activities',
        description: 'Drive or fly from Kathmandu to Chitwan. Check-in at lodge. Briefing about the park and activities.',
        activities: [
          'Arrival and welcome drink',
          'Park briefing',
          'Village walk to learn about Tharu culture',
          'Sunset view from Rapti River bank',
          'Tharu cultural program and stick dance'
        ],
        meals: 'L, D'
      },
      {
        day: 2,
        title: 'Full Day Safari Activities',
        description: 'Full day of exciting jungle activities to explore the diverse wildlife and nature of Chitwan.',
        activities: [
          'Early morning bird watching walk',
          'Breakfast at lodge',
          'Full day jungle safari by jeep (4-5 hours)',
          'Picnic lunch in the jungle',
          'Visit to elephant breeding center',
          'Canoe ride on Rapti River to spot crocodiles and birds',
          'Jungle walk with naturalist guide'
        ],
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Morning Safari and Departure',
        description: 'Final morning activities before departure.',
        activities: [
          'Early morning elephant safari (optional)',
          'Breakfast',
          'Visit to Tharu village',
          'Departure to Kathmandu or Pokhara'
        ],
        meals: 'B, L'
      },
      {
        day: 4,
        title: 'Extended Safari Option',
        description: 'For those taking the 4-day package, additional activities and more time for wildlife viewing.',
        activities: [
          'Early morning tiger tracking walk',
          'Bird watching tour',
          'Jeep safari to different zones',
          'Photography session',
          'Relaxation at lodge',
          'Evening nature walk'
        ],
        meals: 'B, L, D'
      }
    ],
    included: [
      'Transport from/to Kathmandu or Pokhara',
      'Full board accommodation in jungle lodge',
      'All meals (breakfast, lunch, dinner)',
      'All mentioned safari activities',
      'Jeep safari',
      'Canoe ride',
      'Jungle walks',
      'Village tour',
      'Tharu cultural program',
      'Experienced naturalist guide',
      'National park entrance fees',
      'Government taxes'
    ],
    excluded: [
      'Personal expenses',
      'Beverages (alcoholic and non-alcoholic)',
      'Travel insurance',
      'Tips for guide and staff',
      'Optional elephant safari ($20-30 per person)',
      'Camera fees if applicable',
      'Any activities not mentioned in itinerary'
    ],
    requirements: [
      'Suitable for all ages and fitness levels',
      'No special skills required',
      'Comfortable walking shoes',
      'Light, breathable clothing',
      'Sun protection (hat, sunscreen)',
      'Insect repellent',
      'Camera and binoculars recommended',
      'Follow guide instructions during activities',
      'Respect wildlife and maintain safe distance'
    ]
  },
  {
    id: 'bardia-national-park',
    name: 'Bardia National Park',
    location: 'Bardia, Nepal',
    duration: '3-5 Days',
    type: 'Wild Tiger',
    image: '/assets/images/bardia.jpg',
    description: "Nepal's largest and most pristine wilderness area. Best chances to spot wild tigers, elephants, and dolphins.",
    highlights: ['Tiger Tracking', 'Jungle Safari', 'Dolphin Watching', 'Nature Walks', 'Wildlife Photography'],
    badge: 'Adventure',
    overview: `Bardia National Park, located in Nepal's far western Terai, is the country's largest and most pristine wilderness area. Covering 968 square kilometers of sal forest, grasslands, and riverine forest, Bardia offers the best chance in Nepal to spot wild Bengal tigers in their natural habitat.

Less crowded than Chitwan, Bardia provides a more authentic and wild jungle experience. The park is home to endangered species including tigers, Asian elephants, one-horned rhinoceros, and the rare Gangetic dolphin. The diverse ecosystem supports over 400 bird species, making it a paradise for bird watchers.

The Karnali River flowing through the park adds to its beauty and biodiversity. Activities include tiger tracking on foot, jeep safaris, dolphin watching, and visiting local Tharu communities. For those seeking a true wilderness adventure away from crowds, Bardia is the perfect destination.`,
    bestTime: 'October to April. March-April best for tiger sighting. May can be hot. Avoid June-September monsoon.',
    wildlife: [
      'Bengal Tiger',
      'Asian Elephant',
      'One-horned Rhinoceros',
      'Gangetic Dolphin',
      'Swamp Deer',
      'Wild Boar',
      'Crocodiles (Gharial and Mugger)',
      'Leopard',
      'Various Deer species',
      'Blue Bull',
      'Over 400 bird species'
    ],
    activities: [
      'Tiger Tracking on Foot',
      'Jeep Safari',
      'Dolphin Watching',
      'Nature Walks',
      'Bird Watching',
      'River Rafting',
      'Village Tour',
      'Elephant Safari',
      'Fishing (catch and release)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Bardia',
        description: 'Arrive at Bardia National Park and settle into your wilderness lodge.',
        activities: [
          'Pick up from Nepalgunj airport or bus park',
          'Drive to Bardia (2 hours)',
          'Check-in at jungle lodge',
          'Park orientation and briefing',
          'Sunset walk along Karnali River',
          'Tharu cultural program'
        ],
        meals: 'D'
      },
      {
        day: 2,
        title: 'Full Day Tiger Tracking',
        description: 'Exciting full day dedicated to tracking wild tigers on foot with experienced guides.',
        activities: [
          'Early morning tiger tracking walk (4-5 hours)',
          'Breakfast in jungle (packed)',
          'Continue tiger tracking',
          'Lunch at lodge',
          'Afternoon jeep safari to different zone',
          'Visit to crocodile breeding center',
          'Evening nature walk'
        ],
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Jungle Safari and Dolphin Watching',
        description: 'Explore different areas of the park and search for rare Gangetic dolphins.',
        activities: [
          'Morning bird watching walk',
          'Breakfast',
          'Full day jeep safari',
          'Dolphin watching from river bank',
          'Picnic lunch',
          'Visit to Tharu village',
          'Sunset view from watchtower'
        ],
        meals: 'B, L, D'
      },
      {
        day: 4,
        title: 'Rafting and Nature Walk',
        description: 'Experience the Karnali River and explore more of the wilderness.',
        activities: [
          'Morning nature walk',
          'Breakfast',
          'River rafting on Karnali River (2-3 hours)',
          'Lunch',
          'Afternoon jungle walk',
          'Wildlife photography session',
          'Cultural interaction with Tharu community'
        ],
        meals: 'B, L, D'
      },
      {
        day: 5,
        title: 'Final Morning and Departure',
        description: 'Last wildlife activities before departure.',
        activities: [
          'Early morning elephant safari (optional)',
          'Final bird watching',
          'Breakfast',
          'Departure to Nepalgunj'
        ],
        meals: 'B'
      }
    ],
    included: [
      'Airport/bus park pick up and drop',
      'All ground transportation',
      'Full board accommodation',
      'All mentioned activities',
      'Experienced naturalist guide',
      'National park fees',
      'Jeep safari',
      'River activities',
      'Village tours',
      'Government taxes'
    ],
    excluded: [
      'Transport to/from Nepalgunj',
      'Travel insurance',
      'Personal expenses',
      'Beverages',
      'Tips for guide and staff',
      'Optional activities',
      'Camera fees if applicable'
    ],
    requirements: [
      'Good fitness level for tiger tracking walks',
      'Comfortable with walking 3-4 hours',
      'Follow guide instructions strictly',
      'Maintain silence during wildlife tracking',
      'Appropriate clothing (earth tone colors)',
      'Good walking shoes',
      'Sun protection and insect repellent',
      'Binoculars and camera recommended',
      'Respect for wildlife and nature'
    ]
  },
  {
    id: 'koshi-tappu-reserve',
    name: 'Koshi Tappu Reserve',
    location: 'Koshi, Nepal',
    duration: '2-3 Days',
    type: 'Bird Paradise',
    image: '/assets/images/koshi.webp',
    description: 'Premier bird watching destination with over 500 species. Perfect for wildlife photography and nature enthusiasts.',
    highlights: ['Bird Watching', 'Wildlife Photography', 'Wetland Safari', 'Nature Walks', 'Buffalo Herds'],
    badge: 'Bird Watching',
    overview: `Koshi Tappu Wildlife Reserve, located in the eastern Terai, is Nepal's premier bird watching destination and a paradise for ornithologists and nature photographers. This wetland reserve covers 175 square kilometers and is home to over 500 bird species, making it one of the most important bird areas in Nepal.

The reserve sits at the confluence of the Sapt Koshi River and is characterized by extensive wetlands, grasslands, and mudflats. It's famous for hosting huge flocks of migratory waterfowl during winter months, including endangered species like the Bengal Florican and Swamp Francolin.

Besides birds, the reserve is home to the last remaining population of wild water buffalo (Arna) in Nepal, along with other wildlife like wild boar, spotted deer, and blue bull. The open landscape and wetland habitat provide excellent opportunities for wildlife viewing and photography.`,
    bestTime: 'October to March for migratory birds. December-February peak for waterfowl. April-September for resident species.',
    wildlife: [
      'Over 500 bird species',
      'Wild Water Buffalo (Arna)',
      'Spotted Deer',
      'Blue Bull',
      'Wild Boar',
      'Gangetic Dolphin',
      'Gharial Crocodile',
      'Various Snake species',
      'Butterflies',
      'Fish species'
    ],
    activities: [
      'Bird Watching',
      'Wildlife Photography',
      'Boat Safari',
      'Wetland Walks',
      'Buffalo Tracking',
      'Sunrise/Sunset Viewing',
      'Village Tours',
      'Nature Documentation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Bird Watching',
        description: 'Arrive at Koshi Tappu and begin your bird watching adventure.',
        activities: [
          'Pick up from Biratnagar or Itahari',
          'Drive to Koshi Tappu (2 hours)',
          'Check-in at lodge',
          'Reserve briefing',
          'Afternoon bird watching walk',
          'Sunset viewing from observation platform',
          'Bird identification session'
        ],
        meals: 'L, D'
      },
      {
        day: 2,
        title: 'Full Day Bird Watching Safari',
        description: 'Extensive bird watching in various habitats of the reserve.',
        activities: [
          'Early morning bird watching walk (5:00 AM)',
          'Breakfast',
          'Boat safari on Sapt Koshi River',
          'Wetland exploration',
          'Wild buffalo tracking',
          'Picnic lunch in nature',
          'Afternoon photography session',
          'Visit to different bird habitats',
          'Evening bird count'
        ],
        meals: 'B, L, D'
      },
      {
        day: 3,
        title: 'Morning Safari and Departure',
        description: 'Final bird watching before departure.',
        activities: [
          'Dawn bird watching',
          'Breakfast',
          'Visit to nearby villages',
          'Final photography opportunity',
          'Departure'
        ],
        meals: 'B, L'
      }
    ],
    included: [
      'All ground transportation',
      'Full board accommodation',
      'All meals',
      'Boat safaris',
      'Bird watching guide',
      'Nature walks',
      'Reserve entry fees',
      'Bird checklist',
      'Government taxes'
    ],
    excluded: [
      'Transport to/from Biratnagar',
      'Travel insurance',
      'Personal expenses',
      'Beverages',
      'Tips',
      'Camera equipment rental',
      'Optional activities'
    ],
    requirements: [
      'Interest in birds and nature',
      'Early morning wake ups',
      'Patience for wildlife observation',
      'Comfortable with basic accommodation',
      'Good walking shoes',
      'Sun protection',
      'Insect repellent essential',
      'Binoculars and camera highly recommended',
      'Field guide book helpful',
      'Quiet and respectful behavior'
    ]
  }
];
