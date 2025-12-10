import type { Trek } from '../treks';

export const manasluRegionTreks: Trek[] = [
  {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    duration: '18 Days',
    altitude: '5,160m (16,929ft)',
    difficulty: 'Strenuous',
    description: 'Trek around the magnificent Manaslu, the eighth highest mountain in the world. This less-crowded alternative to Annapurna Circuit offers pristine wilderness, authentic Tibetan culture, and spectacular mountain views.',
    highlights: [
      'Manaslu (8,163m) - Eighth highest mountain in the world',
      'Larkya La Pass (5,160m) - Challenging high-altitude pass',
      'Pristine wilderness with minimal commercial development',
      'Authentic Tibetan Buddhist culture and monasteries',
      'Views of Himlung Himal, Cheo Himal, and Annapurna II',
      'Traditional Sherpa and Gurung villages',
      'Restricted area requiring special permits',
      'Historic Pungyen Gompa monastery',
      'Natural hot springs at Tatopani',
      'Connects with Annapurna Circuit at Dharapani'
    ],
    image: '/assets/bhimthang.jpeg',
    price: '$1,699',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-10 people',
    region: 'Manaslu Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu and Trip Preparation (1,350m/4,429ft)',
        description: 'Upon arrival at Tribhuvan International Airport, transfer to hotel. Welcome dinner and comprehensive trek briefing with permit arrangements.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'Visit UNESCO World Heritage sites including Swayambhunath, Pashupatinath, and Kathmandu Durbar Square. Final equipment check and permit verification.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Drive from Kathmandu to Soti Khola (710m/2,330ft)',
        description: 'Scenic drive through Nepalese countryside. Navigate from paved roads to rough mountain tracks as we approach trek starting point.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours drive (138 km)'
      },
      {
        day: 4,
        title: 'Soti Khola to Maccha Khola (900m/2,953ft)',
        description: 'Begin trekking through enchanting Sal forests. Cross bridges and witness tropical waterfalls while following the turbulent Budhi Gandaki River.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Maccha Khola to Jagat (1,410m/4,626ft)',
        description: 'Navigate narrow trails with ups and downs. Cross Tharo Khola and encounter small hot springs at Tatopani before reaching Jagat village.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Jagat to Deng (1,804m/5,919ft)',
        description: 'Trek through beautiful countryside crossing numerous suspension bridges. Experience the transition into Tibetan Buddhist cultural region.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 7,
        title: 'Deng to Namrung (2,630m/8,629ft)',
        description: 'Enter restricted area with first views of Siring Himal. Pass through beautiful forests and traditional villages.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 8,
        title: 'Namrung to Samagaon (3,530m/11,581ft)',
        description: 'Climb steadily with spectacular mountain views emerging. First clear views of Manaslu and surrounding peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 9,
        title: 'Samagaon: Acclimatization Day (3,530m/11,581ft)',
        description: 'Important rest day for acclimatization. Optional hike to Pungyen Gompa monastery or explore the glacier. Visit local Tibetan monastery.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional hikes)'
      },
      {
        day: 10,
        title: 'Samagaon to Samdo (3,875m/12,713ft)',
        description: 'Short trekking day to allow further acclimatization. Enjoy views of Manaslu North Face and explore traditional Tibetan village.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 11,
        title: 'Samdo: Acclimatization and Exploration Day',
        description: 'Rest day with optional hike towards Tibetan border or exploration of local area. Prepare mentally and physically for pass crossing.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 12,
        title: 'Samdo to Dharamsala/Larkya Phedi (4,460m/14,633ft)',
        description: 'Trek to high camp before pass crossing. Short but steep day to preserve energy for tomorrow\'s challenge.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 13,
        title: 'Dharamsala to Bimtang via Larkya La Pass (5,160m/16,929ft)',
        description: 'Epic pass crossing day! Early start for gradual ascent becoming steeper near pass. Outstanding views from pass of Himlung Himal, Cheo Himal, and massive Annapurna II.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 14,
        title: 'Bimtang to Tilije (2,300m/7,546ft)',
        description: 'Long descent with great views of Mt. Manaslu, Lamjung Himal, and Himlung Himal. Cross high pastures and rhododendron forests.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Tilije to Tal (1,700m/5,578ft)',
        description: 'Continue descent through villages and cultivated land. Reach Tal where we join the Annapurna Circuit route.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Tal to Syange (1,080m/3,543ft)',
        description: 'Final trekking day following the Marshyangdi River. Descent through terraced fields and traditional villages.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 17,
        title: 'Syange to Kathmandu (1,350m/4,429ft)',
        description: 'Drive back to Kathmandu through beautiful hill and mountain landscapes. Farewell dinner to celebrate successful completion.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch, Farewell Dinner',
        walkingHours: '7 hours drive'
      },
      {
        day: 18,
        title: 'Final Departure',
        description: 'Transfer to airport approximately 3 hours before scheduled departure flight. Extension stays available with Ngimalaya Adventure assistance.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu (twin sharing basis)',
      'Tea house accommodation during trek (twin sharing basis)',
      'All meals during trekking days (breakfast, lunch, dinner)',
      'Professional English-speaking licensed trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (Restricted Area Permit, ACAP, TIMS)',
      'Transportation (Kathmandu-Soti Khola and Syange-Kathmandu)',
      'Welcome and farewell dinners',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
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
      'Excellent physical fitness and endurance',
      'Previous high-altitude trekking experience recommended',
      'Ability to walk 6-8 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Restricted area permit requirements (minimum 2 people)',
      'Complete high-altitude trekking gear',
      'Mental preparedness for remote and challenging conditions',
      'No severe medical conditions (heart, lung, or blood pressure issues)',
      'Positive attitude and flexibility for extreme mountain conditions'
    ]
  },
  {
    id: 'tsum-valley',
    name: 'Tsum Valley Trek',
    duration: '19 Days',
    altitude: '3,700m (12,140ft)',
    difficulty: 'Moderate',
    description: 'Discover the hidden gem of Tsum Valley, a sacred Himalayan pilgrimage valley. This remote trek offers an authentic glimpse into traditional Tibetan Buddhist culture, ancient monasteries, and pristine natural landscapes away from the crowds.',
    highlights: [
      'Sacred Tsum Valley - Hidden Himalayan pilgrimage valley',
      'Mu Gompa - Largest monastery in the region at 3,700m',
      'Rachen Gompa - Ancient nunnery with spiritual significance',
      'Milarepa Cave - Sacred meditation cave of the famous Tibetan yogi',
      'Authentic Tibetan Buddhist culture and traditions',
      'Traditional stone-built villages with prayer flags',
      'Views of Ganesh Himal, Sringi Himal, and Himalchuli',
      'Restricted area with limited trekkers for pristine experience',
      'Ancient trade routes and traditional architecture',
      'Dhephu Doma Gompa - Historic monastery with cultural artifacts',
      'Pika Himal base camp option for adventurous trekkers',
      'Natural hot springs for relaxation'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$1,599',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-12 people',
    region: 'Manaslu Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu and Trip Preparation (1,350m/4,429ft)',
        description: 'Upon arrival at Kathmandu International Airport, a Ngimalaya Adventure representative will provide transportation to the designated hotel. Welcome dinner showcasing authentic Nepalese cuisine and comprehensive trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'Guided tour of UNESCO World Heritage sites including historic Durbar Square, sacred Pashupatinath Temple, renowned Swayambhunath (Monkey Temple), and colossal Bouddhanath Stupa. Equipment check and trip discussion.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Drive from Kathmandu to Arughat (608m/1,995ft)',
        description: '7-8 hour scenic drive through western mountains via Dhadingbesi. Enjoy beautiful views of green hills along dirt roads before reaching Arughat, a major town divided by Budhi Gandaki River.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '7-8 hours drive'
      },
      {
        day: 4,
        title: 'Trek from Arughat to Soti Khola (710m/2,330ft)',
        description: 'Cross Budhi Gandaki River and follow stone-paved street north through bazaar. Pass hydro-electric power plant and fields of rice and millet. Trek through forests and cross Arkhet Khola on suspension bridge.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Trek from Soti Khola to Maccha Khola (900m/2,953ft)',
        description: 'Trek through beautiful Sal forests, climb onto ridge above Budhi Gandaki River. Pass waterfalls and rice terraces, continue to Gurung village of Labubesi before reaching Maccha Khola.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Trek from Maccha Khola to Jagat (1,410m/4,626ft)',
        description: 'Cross Tharo Khola and reach Khorlabesi. Pass trailside hot spring and cross suspension bridges over Budhi Gandaki River. Trek through villages and ascend to Jagat.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 7,
        title: 'Trek from Jagat to Chisopani (1,660m/5,446ft)',
        description: 'Complete ACAP procedures and climb over rocky ridge to Salleri. Descend to Sirdibas and continue upstream to Philim, a large Gurung village. Trek through forests to reach Chisopani.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Trek from Chisopani to Chumling (2,386m/7,828ft)',
        description: 'Cross gorge and pass waterfalls as we descend into the sacred Tsum Valley. First glimpses of the Himalayas and reach Chumling with its ancient gompa and traditional stone streets.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 9,
        title: 'Trek from Chumling to Chokhangparo (3,010m/9,876ft)',
        description: 'Cross suspension bridge and enjoy spectacular views of Ganesh Himal. Trek through traditional villages to Chokhangparo with magnificent views of Himalchuli and Ganesh Himal ranges.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 10,
        title: 'Trek from Chokhangparo to Nile (3,361m/11,027ft)',
        description: 'Pass ancient monasteries and cross suspension bridges through increasingly Tibetan landscape. Visit Rachen Gompa, an important nunnery, and continue to village of Nile.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 11,
        title: 'Trek from Nile to Mu Gompa (3,700m/12,140ft)',
        description: 'Trek through authentic Tibetan landscapes to reach Mu Gompa, the largest and most important monastery in the Tsum Valley. Visit monastery and nearby Dhephu Doma Gompa.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3 hours'
      },
      {
        day: 12,
        title: 'Exploration Day at Mu Gompa (3,700m/12,140ft)',
        description: 'Full day to explore the monastery complex, interact with monks, and experience Tibetan Buddhist culture. Optional hike to Pika Himal base camp for those seeking additional adventure.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 13,
        title: 'Trek from Mu Gompa to Burgi Village via Milarepa Cave (3,245m/10,647ft)',
        description: 'Trek back through traditional villages and visit the sacred Milarepa Cave, where the famous Tibetan yogi meditated. Enjoy mesmerizing mountain views from this spiritual site.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5 hours'
      },
      {
        day: 14,
        title: 'Trek from Burgi Village to Chumling (2,386m/7,828ft)',
        description: 'Descend through pristine nature and traditional villages, retracing our steps through the sacred valley back to Chumling. Enjoy final views of the upper Tsum Valley.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Trek from Chumling to Philim (1,590m/5,217ft)',
        description: 'Trek back to Philim, passing beautiful Samba Falls and through traditional villages. Return to the main Budhi Gandaki valley from the sacred Tsum Valley.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 16,
        title: 'Trek from Philim to Khorlabesi (875m/2,871ft)',
        description: 'Descend through traditional villages and reach Khorlabesi. Pass the natural hot spring where you can relax tired muscles after days of trekking.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Trek from Khorlabesi to Soti Khola (710m/2,330ft)',
        description: 'Trek along the rushing Budhi Gandaki River, passing through villages and beautiful forests. Final day of trekking as we retrace our steps to Soti Khola.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 18,
        title: 'Trek to Arughat and Drive to Kathmandu (1,350m/4,429ft)',
        description: 'Short trek back to Arughat (4 hours) followed by 7-8 hour drive to Kathmandu. Enjoy scenic mountain views during the journey. Farewell dinner celebrating successful completion of the trek.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch, Farewell Dinner',
        walkingHours: '4 hours trek + 7-8 hours drive'
      },
      {
        day: 19,
        title: 'Final Departure',
        description: 'Transfer to airport approximately 3 hours before scheduled departure flight. Optional extension stays available for additional adventure activities in Nepal or neighboring countries.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu (twin sharing basis)',
      'Tea house accommodation during trek (twin sharing basis)',
      'All meals during trekking days (breakfast, lunch, dinner)',
      'Professional English-speaking licensed trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (Restricted Area Permit, ACAP, TIMS)',
      'Transportation (Kathmandu-Arughat-Kathmandu)',
      'Kathmandu sightseeing with entrance fees',
      'Welcome and farewell dinners',
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
      'Previous trekking experience recommended but not mandatory',
      'Ability to walk 5-7 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Restricted area permit requirements (minimum 2 people)',
      'Complete trekking gear appropriate for moderate altitudes',
      'Mental preparedness for remote cultural immersion',
      'Respect for local Buddhist culture and traditions',
      'Flexibility for weather conditions and cultural experiences'
    ]
  }
];
