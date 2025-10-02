import type { Trek } from '../treks';
import abcImage from '../../assets/images/abc.jpeg';
import thoranglaPassImage from '../../assets/images/thorangla-pass.jpeg';

export const annapurnaRegionTreks: Trek[] = [
  {
    id: 'abc-trek',
    name: 'Annapurna Base Camp Trek',
    duration: '14 Days',
    altitude: '4,130m (13,549ft)',
    difficulty: 'Moderate',
    description: 'Journey into the heart of the Annapurna massif through diverse landscapes and traditional Gurung villages. Experience the spectacular amphitheater of towering peaks at Annapurna Base Camp.',
    highlights: [
      'Annapurna Base Camp (4,130m) - Natural amphitheater',
      'Machapuchare (Fishtail) - Sacred unclimbed peak',
      'Diverse ecosystems from subtropical to alpine',
      'Traditional Gurung and Magar villages',
      'Rhododendron forests in spring season',
      'Annapurna Sanctuary - natural amphitheater',
      'Hot springs at Jhinu Danda',
      'Panoramic views of Annapurna massif'
    ],
    image: abcImage,
    price: '$1,350',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '1-12 people',
    region: 'Annapurna Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m)',
        description: 'Arrive at Tribhuvan International Airport, transfer to hotel. Welcome dinner with trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner',
        walkingHours: 'Airport transfer'
      },
      {
        day: 2,
        title: 'Drive to Pokhara (823m)',
        description: 'Scenic 6-7 hour drive to the beautiful lakeside city of Pokhara. Rest and prepare for the trek.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Drive to Nayapul, Trek to Ulleri (2,050m)',
        description: 'Drive to Nayapul (1.5 hours) and begin trekking. Climb the famous stone steps to Ulleri village.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 4,
        title: 'Ulleri to Ghorepani (2,874m)',
        description: 'Trek through beautiful rhododendron forests and charming villages to reach Ghorepani.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 5,
        title: 'Ghorepani to Tadapani via Poon Hill (3,210m)',
        description: 'Early morning hike to Poon Hill for spectacular sunrise views over Annapurna and Dhaulagiri ranges.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Tadapani to Chhomrong (2,170m)',
        description: 'Descend through rhododendron forests with excellent views of Machapuchare. Gateway to Annapurna Sanctuary.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Chhomrong to Dovan (2,600m)',
        description: 'Steep descent to Chhomrong Khola, then climb through bamboo and rhododendron forests.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Dovan to Machapuchare Base Camp (3,700m)',
        description: 'Trek through the narrowing valley with spectacular mountain views. Enter the Annapurna Sanctuary.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'MBC to Annapurna Base Camp (4,130m) and back to MBC',
        description: 'Early morning trek to ABC for incredible 360-degree mountain views. Return to MBC for overnight.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 10,
        title: 'MBC to Bamboo (2,345m)',
        description: 'Begin descent from the sanctuary, retracing steps through Dovan.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 11,
        title: 'Bamboo to Jhinu Danda (1,760m)',
        description: 'Continue descent to Jhinu Danda. Relax in natural hot springs.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 12,
        title: 'Jhinu Danda to Nayapul, Drive to Pokhara',
        description: 'Final trekking day to Nayapul. Drive back to Pokhara and celebrate.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '5-6 hours + 1.5 hours drive'
      },
      {
        day: 13,
        title: 'Drive to Kathmandu',
        description: 'Scenic drive back to Kathmandu. Rest, shopping, or explore the city.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to airport for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu and Pokhara (twin sharing basis)',
      'Teahouse accommodation during trek (twin sharing basis)',
      'All meals during trekking days (breakfast, lunch, dinner)',
      'Professional English-speaking licensed trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (ACAP, TIMS)',
      'Transportation (Kathmandu-Pokhara-Nayapul-Pokhara)',
      'First aid kit and emergency arrangements',
      'Welcome and farewell dinners',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees (USD 30 for 15 days, USD 50 for 30 days)',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet, etc.)',
      'Tips for guide and porter (customary but optional)',
      'Extra meals in Kathmandu and Pokhara',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Ability to walk 5-7 hours daily for multiple days',
      'Previous hiking experience recommended but not mandatory',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Appropriate trekking gear and clothing',
      'Positive attitude and flexibility for mountain conditions',
      'No severe medical conditions (heart, lung problems)'
    ]
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit Trek',
    duration: '17 Days',
    altitude: '5,416m (17,769ft)',
    difficulty: 'Challenging',
    description: 'The classic circuit trek offering incredibly diverse landscapes from subtropical forests to high alpine terrain. Cross the famous Thorong La Pass and experience both Hindu and Buddhist cultures.',
    highlights: [
      'Thorong La Pass (5,416m) - High altitude pass crossing',
      'Muktinath Temple - Sacred pilgrimage site',
      'Diverse ecosystems and climate zones',
      'Traditional Gurung, Manangi, and Thakali cultures',
      'Ancient trade route through Mustang',
      'Dramatic landscape changes daily',
      'Tilicho Lake (optional) - Highest lake in the world',
      'Views of Annapurna, Dhaulagiri, and Manaslu ranges'
    ],
    image: thoranglaPassImage,
    price: '$1,299',
    season: 'Oct-Nov, Mar-Apr (Best: Oct-Nov)',
    groupSize: '2-10 people',
    region: 'Annapurna Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m)',
        description: 'Airport transfer and trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Drive to Besisahar (823m)',
        description: 'Drive to the starting point of the circuit trek.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Besisahar to Chame (2,710m)',
        description: 'Begin circuit trek, following Marsyangdi River through terraced fields.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 4,
        title: 'Chame to Pisang (3,300m)',
        description: 'Enter pine forests with first views of Annapurna range.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Pisang to Manang (3,519m)',
        description: 'Choice of upper or lower trail to historic Manang village.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Manang - Acclimatization Day',
        description: 'Rest day for altitude acclimatization. Explore ancient village and optional hikes.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours (optional hikes)'
      },
      {
        day: 7,
        title: 'Manang to Yak Kharka (4,110m)',
        description: 'Continue higher into alpine zone with spectacular mountain views.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Yak Kharka to Thorong Phedi (4,600m)',
        description: 'Prepare for pass crossing. Short day to preserve energy.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '3-4 hours'
      },
      {
        day: 9,
        title: 'Thorong Phedi to Muktinath via Thorong La Pass (5,416m)',
        description: 'Epic pass crossing day! Early start essential for this challenging but rewarding day.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '8-10 hours'
      },
      {
        day: 10,
        title: 'Muktinath to Jomsom (2,720m)',
        description: 'Visit sacred Muktinath Temple, then descend through dramatic landscape to Jomsom.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 11,
        title: 'Jomsom to Tatopani (1,200m)',
        description: 'Descend through Kali Gandaki gorge, deepest in the world.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 12,
        title: 'Tatopani to Sikha (1,935m)',
        description: 'Relax in natural hot springs, then climb through rhododendron forests.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 13,
        title: 'Sikha to Ghorepani (2,874m)',
        description: 'Climb to famous Ghorepani with views of Dhaulagiri and Annapurna.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 14,
        title: 'Ghorepani to Nayapul via Poon Hill (3,210m)',
        description: 'Sunrise at Poon Hill, then descend to complete the circuit.',
        accommodation: 'Hotel in Pokhara',
        meals: 'Breakfast, Lunch',
        walkingHours: '6-7 hours + drive'
      },
      {
        day: 15,
        title: 'Pokhara to Kathmandu',
        description: 'Drive back to Kathmandu or optional flight.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 16,
        title: 'Kathmandu Free Day',
        description: 'Shopping, sightseeing, or relaxation. Farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner'
      },
      {
        day: 17,
        title: 'Departure',
        description: 'Transfer to airport for international departure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu and Pokhara',
      'Teahouse accommodation during trek',
      'All meals during trekking days',
      'Professional English-speaking trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (ACAP, TIMS)',
      'Transportation as per itinerary',
      'First aid kit and emergency arrangements',
      'Welcome and farewell dinners',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses',
      'Tips for guide and porter',
      'Extra meals in cities',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Ability to walk 6-8 hours daily',
      'Previous trekking experience recommended',
      'Comprehensive travel and medical insurance',
      'Valid passport with at least 6 months validity',
      'Appropriate high-altitude trekking gear',
      'Mental preparedness for pass crossing',
      'No severe medical conditions'
    ]
  },
  {
    id: 'khopra-ridge',
    name: 'Khopra Ridge Community Trek',
    duration: '12 Days',
    altitude: '4,500m (14,765ft)',
    difficulty: 'Moderate',
    description: 'Drift away from the main trails of the Annapurna region and enjoy walking on the solitary trails of the Khopra Ridge trek. This unique and less crowded experience offers stunning views of the Himalayas and includes a visit to the holy Kaire Lake.',
    highlights: [
      'Khopra Ridge - Panoramic mountain viewpoint at 3,660m',
      'Kaire Lake (4,500m) - Sacred Hindu and Buddhist pilgrimage site',
      'Spectacular views of Dhaulagiri, Annapurna South, Fang, and Nilgiri',
      'Off-the-beaten-path trails with fewer crowds',
      'Community-based tourism supporting local villages',
      'Diverse flora and fauna in pristine forests',
      'Traditional Gurung and Magar cultural experiences',
      'Alpine meadows and pastures above tree line',
      'Ghandruk village - Major Gurkha recruitment center',
      'Spiritual journey combining mountain adventure with pilgrimage',
      'Rhododendron forests and wildlife spotting opportunities',
      'Authentic teahouse accommodation experience'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$1,299',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-12 people',
    region: 'Annapurna Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Upon arrival at Tribhuvan International Airport, transfer to hotel. Evening welcome dinner with excellent Nepalese cuisine and trek briefing.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Sightseeing in Kathmandu (1,350m/4,429ft)',
        description: 'Guided tour to UNESCO World Heritage sites including Durbar Square, Pashupatinath Temple, Swayambhunath (Monkey Temple), and Bouddhanath Stupa.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Fly to Pokhara, Drive to Syauli Bazaar, Trek to Ghandruk (1,940m/6,365ft)',
        description: 'Early morning flight to Pokhara with Himalayan views. Drive to Syauli Bazaar and begin trek to Ghandruk, major Gurkha recruitment center and ACAP hub.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3 hours trek + 2 hours drive + 30 min flight'
      },
      {
        day: 4,
        title: 'Ghandruk to Tadapani (2,700m/8,859ft)',
        description: 'Enjoy astonishing views of Machapuchare, Annapurna South, and Hiunchuli. Ascend through Deurali and dense rhododendron forests to reach Tadapani.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 5,
        title: 'Tadapani to Dobato (3,350m/10,991ft)',
        description: 'Leave main trail and enter remote area of Annapurna region. Trek through diverse flora and fauna with magnificent views of Dhaulagiri and Annapurna South.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 6,
        title: 'Dobato to Upper Chistibung (2,975m/9,761ft)',
        description: 'Descend through open ground and beautiful forest to Lower Chistibung, then ascend to Upper Chistibung herder settlement. Possible wildlife spotting including Danphe and Himalayan thar.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 7,
        title: 'Trek to Khopra Ridge (3,660m/12,008ft)',
        description: 'Steady climb above tree line through alpine meadows to reach Khopra Ridge. Stunning mountain panorama including Dhaulagiri, Nilgiri, and Annapurna South.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 8,
        title: 'Rest Day - Kaire Lake Excursion (4,500m/14,765ft)',
        description: 'Early morning trek to sacred Kaire Lake with excellent views of Fang and surrounding mountains. Hindu and Buddhist shrines adorn the lakeside. Packed lunch provided.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '10-11 hours'
      },
      {
        day: 9,
        title: 'Khopra Ridge to Swanta Village (2,200m/7,218ft)',
        description: 'Descend from Khopra Ridge on steep trail with views of Mount Dhaulagiri providing backdrop to terraced fields and traditional houses.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Swanta to Ulleri (2,050m/6,726ft)',
        description: 'Descend through village fields to small river, cross suspension bridge, and ascend to Chittre village. Join main trekking trail at Ghorepani and descend to Ulleri.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 11,
        title: 'Ulleri to Nayapul, Drive to Pokhara (827m/2,713ft)',
        description: 'Final trekking day to Nayapul enjoying hill landscapes of western Nepal. Drive to beautiful Pokhara for rest and city exploration.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch',
        walkingHours: '5-6 hours trek + 1 hour drive'
      },
      {
        day: 12,
        title: 'Pokhara Sightseeing, Fly to Kathmandu (1,350m/4,429ft)',
        description: 'Early visit to Shanti Stupa for sunrise views, explore Davis Falls, Shiva Cave, International Mountain Museum, and Phewa Lake boating. Afternoon flight to Kathmandu with farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '30 min flight'
      }
    ],
    included: [
      'Airport transfers in Kathmandu and Pokhara',
      'Domestic flights (Kathmandu-Pokhara-Kathmandu)',
      'Accommodation in Kathmandu and Pokhara',
      'Tea house accommodation during trek',
      'All meals during trekking days',
      'Professional English-speaking trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (ACAP, TIMS)',
      'Transportation as per itinerary',
      'Kathmandu and Pokhara sightseeing with entrance fees',
      'Welcome and farewell dinners',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet)',
      'Tips for guide and porter',
      'Extra meals in cities',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Single supplement charges'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Ability to walk 5-6 hours daily for multiple days',
      'Previous trekking experience recommended',
      'Comprehensive travel and medical insurance',
      'Valid passport with at least 6 months validity',
      'Appropriate trekking gear for moderate altitudes',
      'Mental preparedness for community-based tourism',
      'Respect for local culture and traditions',
      'Flexibility for weather conditions'
    ]
  },
  {
    id: 'mardi-himal',
    name: 'Mardi Himal Trek',
    duration: '10 Days',
    altitude: '4,500m (14,765ft)',
    difficulty: 'Moderate',
    description: 'The Mardi Himal Trek offers a unique and less-traveled trekking experience in the serene corners of Nepal\'s Annapurna region. This trek stands out as an \'off the beaten path\' adventure with a circular route eliminating the need to retrace steps.',
    highlights: [
      'Mardi Himal Base Camp - Less frequented trekking peak',
      'Circular route with no retracing of steps',
      'Spectacular views of Annapurna, Machapuchare (Fishtail), and Hiunchuli',
      'Upper Viewpoint (4,500m) with stunning Himalayan panorama',
      'Lush forests, quaint villages, and fertile valleys',
      'Traditional teahouse accommodation and local culture',
      'Pristine rivers and terraced farms',
      'Dense rhododendron forests (Nepal\'s national flower)',
      'Wildlife spotting including Danphe (national bird)',
      'Solitary trails away from crowded routes',
      'Views of multiple 6000m+ peaks including Tent Peak and Singhachuli',
      'Cultural immersion in local Gurung and Magar communities'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$1,199',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-12 people',
    region: 'Annapurna Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Representative pickup from Tribhuvan International Airport and transfer to hotel. Visit Ngimalaya Adventure office for trek discussion. Evening welcome dinner with Nepalese cuisine.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Drive to Pokhara (827m/2,713ft)',
        description: 'Scenic drive enjoying terraced farms, roadside shops, and raging Trishuli River to the \'City of Lakes.\' Great Himalayan views including Dhaulagiri, Manaslu, Machapuchare, and Annapurna peaks.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Drive to Phedi, Trek to Deurali (2,100m/6,890ft)',
        description: 'Early morning drive to Phedi and begin trekking on stone steps through terraced fields, villages, and forests. Lunch at Dhampus, continue to Deurali with views of Annapurna South, Mardi Himal, and Machapuchare.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '4-5 hours trek + 30 min drive'
      },
      {
        day: 4,
        title: 'Deurali to Forest Camp (2,520m/8,268ft)',
        description: 'Trek through lush forest dotted with red rhododendrons (Nepal\'s national flower). Quiet trail through dense forest to reach Forest Camp clearing, locally known as Kokar.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Forest Camp to Low Camp (2,970m/9,745ft)',
        description: 'Continue through dense forests admiring Nepal\'s rich biodiversity. Reach Low Camp with fantastic views of Mt. Machapuchare (Fishtail) up the valley. Observe local lifestyle.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Low Camp to High Camp (3,540m/11,615ft)',
        description: 'Trek uphill alongside ridge towards Mardi Himal and Machapuchare. Tree lines thin out with shrubs and isolated rhododendron bushes. Possible Danphe (national bird) sighting.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 7,
        title: 'High Camp to Upper Viewpoint, Return to High Camp (4,500m/14,765ft)',
        description: 'Trek to Upper Viewpoint via steep, narrow trail through pastures and along narrow ridge. Astonishing Himalayan vista including Mardi Himal, Annapurna I, Annapurna South, Hiunchuli, Baraha Shikhar, Tent Peak, Singhachuli, and Machapuchare.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '2-3 hours'
      },
      {
        day: 8,
        title: 'High Camp to Sidhing Village (1,700m/5,578ft)',
        description: 'Take different route to Sidhing instead of retracing steps, making trek exciting. Sidhing offers quiet stay tucked away from busier trails, providing unique cultural experience.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 9,
        title: 'Trek to Lumre, Drive to Pokhara, Fly to Kathmandu (1,350m/4,429ft)',
        description: 'Early breakfast and walk to Lumre to reach road. Drive to Pokhara and continue to domestic airport for flight to Kathmandu. Airport pickup and transfer to hotel. Evening farewell dinner.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '2-3 hours trek + 2 hours drive + 25 min flight'
      },
      {
        day: 10,
        title: 'Final Departure',
        description: 'Representative will provide airport transfer. We hope this trek inspires you to visit Nepal again and choose us for your next adventure.',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu and Pokhara',
      'Domestic flights (Kathmandu-Pokhara-Kathmandu)',
      'Accommodation in Kathmandu and Pokhara',
      'Tea house accommodation during trek',
      'All meals during trekking days',
      'Professional English-speaking trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'All necessary permits (ACAP, TIMS)',
      'Transportation as per itinerary',
      'Welcome and farewell dinners',
      'First aid kit and emergency arrangements',
      'Government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees',
      'Travel and rescue insurance (mandatory)',
      'Personal expenses (laundry, phone calls, internet)',
      'Tips for guide and porter',
      'Extra meals in cities',
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Single supplement charges'
    ],
    requirements: [
      'Good physical fitness and stamina',
      'Ability to walk 4-7 hours daily for multiple days',
      'Basic trekking experience helpful but not mandatory',
      'Comprehensive travel and medical insurance',
      'Valid passport with at least 6 months validity',
      'Appropriate trekking gear for moderate altitudes',
      'Mental preparedness for teahouse accommodation',
      'Respect for local culture and environment',
      'Flexibility for weather and trail conditions'
    ]
  }
];
