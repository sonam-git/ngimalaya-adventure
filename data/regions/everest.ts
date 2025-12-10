import type { Trek } from '../treks';

export const everestRegionTreks: Trek[] = [
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp Trek',
    duration: '16 Days',
    altitude: '5,364m (17,598ft)',
    difficulty: 'Challenging',
    description: 'The most iconic trek in Nepal, leading to the base camp of the world\'s highest mountain. Experience breathtaking views of Everest, Lhotse, Nuptse, and Ama Dablam while immersing yourself in rich Sherpa culture.',
    highlights: [
      'Everest Base Camp (5,364m) - Ultimate destination',
      'Kala Patthar (5,545m) - Best Everest viewpoint',
      'Sagarmatha National Park - UNESCO World Heritage Site',
      'Namche Bazaar - Sherpa capital and trading hub',
      'Tengboche Monastery - Spiritual heart of Khumbu',
      'Sherpa culture and traditional villages',
      'Stunning mountain panoramas daily',
      'Hillary Suspension Bridge crossing'
    ],
    image: '/assets/ebc.jpeg',
    price: '$1,899',
    season: 'Oct-Nov, Mar-May (Best: Oct-Nov)',
    groupSize: '2-12 people',
    region: 'Everest Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Arrive at Tribhuvan International Airport, transfer to hotel in Thamel. Welcome dinner with trek briefing and gear check.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding (2,652m/8,700ft)',
        description: 'Scenic 40-minute mountain flight to Lukla. Begin trekking through Sherpa villages, cross suspension bridges over Dudh Koshi River.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar (3,440m/11,286ft)',
        description: 'Cross Hillary Suspension Bridge, enter Sagarmatha National Park. Steep climb to Namche with first Everest views.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Namche Bazaar - Acclimatization Day',
        description: 'Explore Namche market, visit Sherpa Culture Museum. Optional hike to Everest View Hotel for mountain panoramas.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional hikes)'
      },
      {
        day: 5,
        title: 'Namche to Tengboche (3,867m/12,687ft)',
        description: 'Spectacular mountain trail through rhododendron forests. Visit famous Tengboche Monastery with evening prayers.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche (4,410m/14,468ft)',
        description: 'Continue through alpine landscapes with stunning Ama Dablam views. Enter higher altitude zone.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Dingboche - Acclimatization Day',
        description: 'Important rest day. Optional hike to Nagarjun Hill (5,100m) or Chhukung village for acclimatization.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche (4,940m/16,208ft)',
        description: 'Trek through Khumbu Glacier moraine. Pass memorials of mountaineers at Thukla Pass.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'Lobuche to Everest Base Camp to Gorak Shep (5,164m/16,942ft)',
        description: 'Historic day reaching Everest Base Camp! See expedition tents, prayer flags, and Khumbu Icefall. Return to Gorak Shep.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 10,
        title: 'Gorak Shep to Kala Patthar to Pheriche (5,545m/18,193ft)',
        description: 'Pre-dawn hike to Kala Patthar for spectacular Everest sunrise views. Descend to Pheriche.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 11,
        title: 'Pheriche to Namche Bazaar',
        description: 'Long descent back to Namche. Celebrate achievement with the team.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 12,
        title: 'Namche to Lukla',
        description: 'Final trekking day retracing steps to Lukla. Farewell dinner with trekking crew.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Rest, shopping, or explore the city.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Flight day'
      },
      {
        day: 14,
        title: 'Kathmandu Sightseeing',
        description: 'Visit UNESCO World Heritage sites: Pashupatinath, Boudhanath, Swayambhunath, and Kathmandu Durbar Square.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing'
      },
      {
        day: 15,
        title: 'Free Day in Kathmandu',
        description: 'Shopping, spa, or optional activities. Farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 16,
        title: 'Departure',
        description: 'Transfer to airport for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All domestic flights (Kathmandu-Lukla-Kathmandu)',
      'Airport transfers in Kathmandu',
      'All accommodation during trek (tea houses/lodges)',
      'All meals during trek (breakfast, lunch, dinner)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'All required permits (Sagarmatha National Park, TIMS)',
      'Welcome and farewell dinners',
      'Comprehensive pre-trek briefing',
      'Trekking equipment (duffel bag, sleeping bag, down jacket)',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees (USD 30 for 15 days, USD 50 for 30 days)',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet, etc.)',
      'Tips for guide and porter (customary but optional)',
      'Extra meals in Kathmandu',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Single supplement charges'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Ability to walk 6-8 hours daily for multiple days',
      'Previous hiking experience recommended',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Appropriate trekking gear and clothing',
      'Positive attitude and flexibility for mountain conditions',
      'No severe medical conditions (heart, lung, or blood pressure issues)'
    ]
  },
  {
    id: 'ebc-gokyo',
    name: 'EBC Trek via Gokyo/Cho-La',
    duration: '18 Days',
    altitude: '5,545m (18,193ft)',
    difficulty: 'Strenuous',
    description: 'The ultimate Everest region adventure combining Everest Base Camp with the stunning Gokyo Lakes and crossing the challenging Cho La Pass. Experience the best of Khumbu in one epic journey.',
    highlights: [
      'Everest Base Camp (5,364m) and Kala Patthar (5,545m)',
      'Pristine Gokyo Lakes - turquoise alpine jewels',
      'Gokyo Ri (5,357m) - panoramic mountain views',
      'Cho La Pass (5,420m) - technical high pass crossing',
      'Ngozumba Glacier - longest glacier in Himalayas',
      'Four of world\'s highest peaks: Everest, Lhotse, Makalu, Cho Oyu',
      'Remote and less crowded routes',
      'Ultimate Khumbu wilderness experience'
    ],
    image: '/assets/gokyo.jpeg',
    price: '$2,299',
    season: 'Oct-Nov, Mar-May (Best: Oct-Nov)',
    groupSize: '2-8 people',
    region: 'Everest Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Airport transfer, hotel check-in, welcome dinner with trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu Sightseeing and Trek Preparation',
        description: 'Visit UNESCO World Heritage sites, equipment check, and final preparations.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing'
      },
      {
        day: 3,
        title: 'Fly to Lukla, Trek to Phakding (2,652m/8,700ft)',
        description: 'Scenic mountain flight, begin trekking through Sherpa villages.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Phakding to Namche Bazaar (3,440m/11,286ft)',
        description: 'Cross suspension bridges, enter national park, steep climb to Namche.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Namche Bazaar - Acclimatization Day',
        description: 'Explore Sherpa capital, visit museum, optional hike to Everest View Hotel.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 6,
        title: 'Namche to Phortse Thanga (3,680m/12,074ft)',
        description: 'Spectacular trail with mountain views through rhododendron forests.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Phortse Thanga to Machhermo (4,470m/14,665ft)',
        description: 'Gradual ascent through Dole village with increasing mountain views.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Machhermo to Gokyo (4,790m/15,715ft)',
        description: 'Reach beautiful Gokyo village beside the first of the sacred lakes.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 9,
        title: 'Gokyo - Explore Gokyo Ri and Fourth Lake',
        description: 'Early morning climb to Gokyo Ri for spectacular sunrise views. Visit fourth and fifth lakes.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 10,
        title: 'Gokyo to Thagnak (4,750m/15,585ft)',
        description: 'Trek alongside Ngozumba Glacier with views of Cho Oyu.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Thagnak to Dzongla via Cho La Pass (5,420m/17,782ft)',
        description: 'Technical day crossing the challenging Cho La Pass. Early start essential.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 12,
        title: 'Dzongla to Lobuche (4,940m/16,208ft)',
        description: 'Shorter day to recover from pass crossing, prepare for Everest Base Camp.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 13,
        title: 'Lobuche to Everest Base Camp to Gorak Shep (5,164m/16,942ft)',
        description: 'Historic achievement reaching Everest Base Camp via Khumbu Glacier.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 14,
        title: 'Gorak Shep to Kala Patthar to Pheriche (5,545m/18,193ft)',
        description: 'Pre-dawn ascent of Kala Patthar for ultimate Everest views. Descend to Pheriche.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 15,
        title: 'Pheriche to Namche Bazaar',
        description: 'Long descent back to civilization, celebrate successful expedition.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 16,
        title: 'Namche to Lukla',
        description: 'Final trekking day, farewell celebration with crew.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Fly to Kathmandu',
        description: 'Return flight to Kathmandu, rest and optional activities.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Flight day'
      },
      {
        day: 18,
        title: 'Departure',
        description: 'Final departure or extend stay in Nepal.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All domestic flights (Kathmandu-Lukla-Kathmandu)',
      'Airport transfers in Kathmandu',
      'All accommodation during trek (tea houses/lodges)',
      'All meals during trek (breakfast, lunch, dinner)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'All required permits (Sagarmatha National Park, TIMS)',
      'Welcome and farewell dinners',
      'Comprehensive pre-trek briefing',
      'Trekking equipment (duffel bag, sleeping bag, down jacket)',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet)',
      'Tips for guide and porter',
      'Extra meals in Kathmandu',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Single supplement charges'
    ],
    requirements: [
      'Excellent physical fitness and endurance',
      'Previous high-altitude trekking experience',
      'Ability to walk 7-9 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Complete high-altitude trekking gear',
      'Mental preparedness for challenging conditions',
      'No severe medical conditions'
    ]
  },
  {
    id: 'everest-three-passes',
    name: 'Everest Three Passes Trek',
    duration: '21 Days',
    altitude: '5,545m (18,193ft)',
    difficulty: 'Strenuous',
    description: 'The ultimate Everest region challenge crossing three high-altitude passes: Kongma La, Cho La, and Renjo La. This is the most comprehensive and adventurous way to explore the Khumbu region.',
    highlights: [
      'Three high passes: Kongma La (5,535m), Cho La (5,420m), Renjo La (5,340m)',
      'Everest Base Camp and Kala Patthar',
      'Gokyo Lakes and Gokyo Ri',
      'Complete circuit of the Everest region',
      'Remote valleys and less-traveled routes',
      'Maximum mountain views and photo opportunities',
      'Ultimate trekking achievement',
      'Comprehensive Sherpa cultural experience'
    ],
    image: '/assets/threepasses.jpeg',
    price: '$2,899',
    season: 'Oct-Nov, Apr-May (Best: Oct-Nov)',
    groupSize: '2-8 people',
    region: 'Everest Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Airport transfer, hotel check-in, comprehensive trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu Sightseeing and Preparation',
        description: 'UNESCO sites tour, equipment check, final preparations.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing'
      },
      {
        day: 3,
        title: 'Fly to Lukla, Trek to Phakding (2,652m/8,700ft)',
        description: 'Mountain flight adventure begins, first day trekking.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Phakding to Namche Bazaar (3,440m/11,286ft)',
        description: 'Enter Sagarmatha National Park, climb to Sherpa capital.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Namche Bazaar - Acclimatization Day',
        description: 'Explore Namche, Sherpa museum, acclimatization hikes.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 6,
        title: 'Namche to Tengboche (3,867m/12,687ft)',
        description: 'Classic mountain trail to famous monastery.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Tengboche to Dingboche (4,410m/14,468ft)',
        description: 'Continue altitude gain through alpine landscapes.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Dingboche - Acclimatization Day',
        description: 'Rest day with optional climb to Nagarjun Hill.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 9,
        title: 'Dingboche to Chhukung (4,730m/15,518ft)',
        description: 'Side valley exploration, prepare for first pass.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 10,
        title: 'Chhukung to Lobuche via Kongma La Pass (5,535m/18,159ft)',
        description: 'First high pass crossing - technical and challenging.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 11,
        title: 'Lobuche to Everest Base Camp to Gorak Shep',
        description: 'Achieve the main goal - Everest Base Camp!',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 12,
        title: 'Gorak Shep to Kala Patthar to Dzongla',
        description: 'Sunrise at Kala Patthar, then descend to Dzongla.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 13,
        title: 'Dzongla to Thagnak via Cho La Pass (5,420m/17,782ft)',
        description: 'Second pass crossing - glacier traverse required.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 14,
        title: 'Thagnak to Gokyo (4,790m/15,715ft)',
        description: 'Reach beautiful Gokyo Lakes region.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 15,
        title: 'Gokyo - Explore Gokyo Ri and Lakes',
        description: 'Climb Gokyo Ri for spectacular mountain panorama.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Gokyo to Marlung via Renjo La Pass (5,340m/17,520ft)',
        description: 'Third and final pass crossing with stunning views.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 17,
        title: 'Marlung to Namche Bazaar',
        description: 'Long descent through remote Bhote Koshi valley.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 18,
        title: 'Namche to Lukla',
        description: 'Final trekking day, celebration with crew.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 19,
        title: 'Fly to Kathmandu',
        description: 'Return to civilization, rest and reflect.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Flight day'
      },
      {
        day: 20,
        title: 'Kathmandu Free Day',
        description: 'Shopping, spa, optional activities, farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 21,
        title: 'Departure',
        description: 'Transfer to airport for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All domestic flights (Kathmandu-Lukla-Kathmandu)',
      'Airport transfers in Kathmandu',
      'All accommodation during trek (tea houses/lodges)',
      'All meals during trek (breakfast, lunch, dinner)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'All required permits (Sagarmatha National Park, TIMS)',
      'Welcome and farewell dinners',
      'Comprehensive pre-trek briefing',
      'Trekking equipment (duffel bag, sleeping bag, down jacket)',
      'First aid kit and emergency arrangements',
      'Technical equipment for pass crossings',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet)',
      'Tips for guide and porter',
      'Extra meals in Kathmandu',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Single supplement charges'
    ],
    requirements: [
      'Excellent physical fitness and endurance',
      'Previous high-altitude trekking experience mandatory',
      'Ability to walk 8-10 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Complete high-altitude and technical trekking gear',
      'Mental preparedness for extreme challenges',
      'No severe medical conditions',
      'Experience with basic mountaineering techniques preferred'
    ]
  }
];
