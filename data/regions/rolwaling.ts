import type { Trek } from '../treks';

export const rolwalingRegionTreks: Trek[] = [
  {
    id: 'tashi-lapcha-pass',
    name: 'Tashi Lapcha Pass Trek',
    duration: '17 Days',
    altitude: '5,755m | 18,882ft',
    difficulty: 'Strenuous',
    description: 'Rolwaling Tashi Lapcha Pass Trek is a striking journey that combines the beauty of both the Rolwaling valley and the Khumbu region of Nepal. This thrilling and inspiring trek leads you to a remote location and lets you experience the lovely views of the Himalayas with the challenges of crossing the high-mountain pass of Tashi Lapcha (5,755m). An amazing mixture of the quiet and quaint paths of the remote Rolwaling region with the bustling trails of the Khumbu region.',
    highlights: [
      'Tashi Lapcha Pass (5,755m) - Technical high-altitude pass crossing',
      'Remote Rolwaling Valley - Off-the-beaten-path adventure',
      'Tsho Rolpa Lake - Stunning glacial lake',
      'Gaurishankar Conservation Area',
      'Connection between Rolwaling and Khumbu regions',
      'Sherpa culture in Thame and Namche Bazaar',
      'Rock climbing and glacier crossing experience',
      'Views of Gaurishankar, Melungtse, and other peaks',
      'Traditional Tibetan Buddhist villages',
      'Combination of camping and lodge accommodation'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$2,499',
    season: 'Spring/Autumn (Best: Apr-May, Oct-Nov)',
    groupSize: '2-10 people',
    region: 'Rolwaling Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m/4,593ft)',
        description: 'Arrive at Tribhuvan International Airport and transfer to hotel. Rest and prepare for the trek.',
        accommodation: 'Hotel',
        meals: 'Breakfast'
      },
      {
        day: 2,
        title: 'Sightseeing around Kathmandu Valley and Trip Briefing',
        description: 'Guided tour of UNESCO World Heritage sites including Swayambhunath, Pashupatinath, Boudhanath, and Kathmandu Durbar Square. Comprehensive trek briefing and equipment check.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Drive from Kathmandu to Gonggar Khola (1,440m/4,724ft)',
        description: 'Scenic drive through countryside, terraced fields, and traditional villages to reach Gonggar Khola. Begin the journey towards the remote Rolwaling valley.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours drive'
      },
      {
        day: 4,
        title: 'Trek from Gonggar Khola to Simigaon (2,000m/6,562ft)',
        description: 'Begin trekking through lush forests and traditional Sherpa villages. First day of walking acclimatizes you to the trail.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Trek from Simigaon to Dongkang (3,010m/9,875ft)',
        description: 'Continue ascending through rhododendron and pine forests with increasing mountain views. Enter the Gaurishankar Conservation Area.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Trek from Dongkang to Beding (3,693m/12,116ft)',
        description: 'Trek deeper into the Rolwaling valley with spectacular views of surrounding peaks. Reach the traditional village of Beding.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Trek from Beding to Na Gaon (4,200m/13,780ft)',
        description: 'Continue to the last permanent settlement in the Rolwaling valley. Spectacular views of Gaurishankar and other peaks. Important acclimatization day approaching.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Acclimatization at Na (Rest Day)',
        description: 'Crucial rest day for altitude acclimatization. Optional hike to Tsho Rolpa Lake or surrounding viewpoints. Explore the village and interact with locals.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional hikes)'
      },
      {
        day: 9,
        title: 'Trek from Na to Chugima (4,920m/16,142ft)',
        description: 'Trek into the high-altitude zone. The trail becomes more challenging as you approach the glacier area. Camping begins as you leave permanent settlements.',
        accommodation: 'Tent',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Trek from Chugima to Jaboo Glacier',
        description: 'Continue through high-altitude terrain and reach the glacier camp. Prepare equipment for the technical pass crossing tomorrow.',
        accommodation: 'Tent',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 11,
        title: 'Trek from Jaboo Glacier to Tashi Phuk (5,110m/16,765ft) crossing Tashi Lapcha Pass (5,755m/18,882ft)',
        description: 'The most challenging and rewarding day! Early morning start to cross the technical Tashi Lapcha Pass. Involves steep climbing, glacier crossing, and rock climbing. Fixed ropes may be used. Spectacular views from the pass before descending to Tashi Phuk.',
        accommodation: 'Tent',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-10 hours'
      },
      {
        day: 12,
        title: 'Trek from Tashi Phuk to Thengbo (4,230m/13,878ft)',
        description: 'Descend from high camp into the Khumbu region. Join the popular Everest Base Camp trekking route. Return to lodge accommodation.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 13,
        title: 'Trek from Thengba to Thame (3,800m/12,467ft)',
        description: 'Trek to the historic Sherpa village of Thame. Visit the famous Thame Monastery, birthplace of many legendary Everest climbers including Tenzing Norgay.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 14,
        title: 'Trek from Thame to Namche Bazaar (3,750m/12,303ft)',
        description: 'Trek to the bustling Sherpa capital of Namche Bazaar. Enjoy the contrast of civilization after the remote Rolwaling trek. Explore markets and bakeries.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Trek from Namche Bazaar to Lukla (2,860m/9,383ft)',
        description: 'Final trekking day descending through familiar Khumbu villages back to Lukla. Celebration dinner with the trekking crew.',
        accommodation: 'Lodge',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 16,
        title: 'Fly from Lukla to Kathmandu & Transfer to Hotel',
        description: 'Scenic mountain flight back to Kathmandu. Transfer to hotel, rest, shopping, or optional activities. Farewell dinner in the evening.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch',
        walkingHours: 'Flight day'
      },
      {
        day: 17,
        title: 'Transfer to International Airport for Final Departure',
        description: 'Transfer to Tribhuvan International Airport for your international departure. End of an epic Himalayan adventure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All airport transfers in Kathmandu',
      'Accommodation in Kathmandu (twin sharing basis)',
      'Lodge and camping accommodation during trek',
      'All meals during trekking days (breakfast, lunch, dinner)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'Technical climbing guide for pass crossing',
      'All necessary permits (Gaurishankar Conservation Area, Sagarmatha National Park, TIMS)',
      'Domestic flight (Lukla-Kathmandu)',
      'Complete camping equipment (tents, sleeping bags, mattresses)',
      'Technical equipment for pass crossing (ropes, ice axes, crampons)',
      'Comprehensive first aid kit and emergency arrangements',
      'Welcome and farewell dinners',
      'Kathmandu valley sightseeing with guide',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees (USD 30 for 15 days, USD 50 for 30 days)',
      'Travel and rescue insurance (mandatory - must cover high altitude)',
      'Personal expenses (laundry, phone calls, internet, etc.)',
      'Tips for guide, porter, and staff (customary but optional)',
      'Extra meals in Kathmandu',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking and climbing equipment',
      'Emergency evacuation costs (helicopter rescue)',
      'Single supplement charges',
      'Items not mentioned in the included section'
    ],
    requirements: [
      'Excellent physical fitness and stamina',
      'Previous high-altitude trekking experience mandatory',
      'Basic rock climbing and mountaineering skills required',
      'Ability to walk 5-10 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including high-altitude rescue',
      'Valid passport with at least 6 months validity',
      'Complete high-altitude trekking and technical climbing gear',
      'Mental preparedness for technical pass crossing',
      'Experience with crampons and ice axe recommended',
      'No severe medical conditions (heart, lung, or blood pressure issues)',
      'Willingness to use fixed ropes and technical equipment',
      'Team spirit and flexibility for challenging conditions'
    ],
    adventureType: 'trekking'
  }
];
