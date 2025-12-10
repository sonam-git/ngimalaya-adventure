import type { Trek } from '../treks';

export const kanchenjungaRegionTreks: Trek[] = [
  {
    id: 'kanchenjunga-circuit',
    name: 'Kanchenjunga Circuit Trek',
    duration: '25 Days',
    altitude: '5,143m (16,874ft)',
    difficulty: 'Strenuous',
    description: 'The ultimate wilderness adventure to the base camps of Kanchenjunga, the third highest mountain in the world. This remote and challenging trek offers pristine natural beauty, rich biodiversity, and authentic cultural experiences in one of Nepal\'s most untouched regions.',
    highlights: [
      'Kanchenjunga (8,586m) - Third highest mountain in the world',
      'North and South Base Camp experiences',
      'Pristine wilderness and untouched natural beauty',
      'Rich biodiversity in Kanchenjunga Conservation Area',
      'Authentic cultural experiences with Limbu and Rai communities',
      'Views of Kumbakarna (Jannu), Nyukla Lachung, and other peaks',
      'Yalung and Kanchenjunga Glacier experiences',
      'Remote tea house and camping experiences',
      'Rhododendron forests and alpine meadows',
      'Traditional villages and ancient cultures'
    ],
    image: '/assets/kanchanjungabc.jpg',
    price: '$2,799',
    season: 'Oct-Nov, Mar-May (Best: Oct-Nov)',
    groupSize: '2-8 people',
    region: 'Kanchenjunga Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Upon arrival at Tribhuwan International Airport, meet Ngimalaya Adventure representative. Transfer to hotel and welcome dinner with comprehensive trek briefing.',
        accommodation: 'Hotel',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'Explore UNESCO World Heritage Sites—Swayambhunath Stupa, Pashupatinath Temple, Kathmandu Durbar Square, and Boudhanath Stupa. Meet trekking team for detailed briefing.',
        accommodation: 'Hotel',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Fly from Kathmandu to Bhadrapur, Drive to Taplejung (1,442m/4,731ft)',
        description: 'Early morning flight to Bhadrapur followed by scenic drive to Taplejung through beautiful hills and traditional villages.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Taplejung to Lalikharka (2,265m/7,431ft)',
        description: 'Begin trekking through lush green forests with simultaneous ascent and descent, experiencing scenic mountain views.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '5 hours'
      },
      {
        day: 5,
        title: 'Lalikharka to Khesewa (2,120m/6,956ft)',
        description: 'Trek through traditional villages with easy descent until Phundrawa, followed by steep climb through forests.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Khesewa to Mamankhe (1,785m/5,857ft)',
        description: 'Trek to Kabeli Khola, passing through forests, crossing streams, and enjoying first glimpses of Himalayan peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Mamankhe to Yamphudin (2,080m/6,824ft)',
        description: 'Trek uphill alongside Kabeli Khola, passing small settlements and beautiful waterfall before reaching Yamphudin.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Yamphudin to Tortong (2,995m/9,827ft)',
        description: 'Uphill trek through terraced farms and green meadows with beautiful Himalayan views. Cross Lassiya Bhanjyang pass.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 9,
        title: 'Tortong to Cheram (3,870m/12,697ft)',
        description: 'Steady climb with views of Simbuwa Khola and Yalung Glacier. Walk through thick rhododendron forest.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 10,
        title: 'Cheram: Acclimatization and Rest (3,870m/12,697ft)',
        description: 'Important acclimatization day exploring Yalung Glacier areas and enjoying views of Kabaru and Rathong peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 11,
        title: 'Cheram to Ramchaur (Ramche) (4,580m/15,027ft)',
        description: 'Short trek ascending to Yalung Glacier\'s snout. Walk through beautiful valley with several Himalayan peak views.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 12,
        title: 'Ramchaur to Yalung Base Camp, back to Cheram (4,580m/15,027ft)',
        description: 'Trek to Yalung Base Camp with extraordinary views of Kumbakarna (Jannu), Nyukla Lachung, and other peaks. Return to Cheram.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 13,
        title: 'Cheram to Sele La (4,290m/14,075ft)',
        description: 'Trek to Sele La, crossing four passes including the main Sele La pass. Experience prayer flags and stunning views.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 14,
        title: 'Sele La to Ghunsa (3,595m/11,795ft)',
        description: 'Trek towards Ghunsa, passing Tangbgharma Danda and descending through forests with mountain views.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 15,
        title: 'Ghunsa to Kambachen (4,050m/13,288ft)',
        description: 'Trek north along river bank, passing meadows and wildflowers, crossing bridge at Rampuk Kharka.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 16,
        title: 'Kambachen to Lhonak (4,778m/15,677ft)',
        description: 'Challenging day trekking through rocky fields and boulders, passing waterfall, reaching Lhonak.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 17,
        title: 'Kanchenjunga Base Camp, overnight at Pangpema (5,143m/16,874ft)',
        description: 'Trek to Kanchenjunga Base Camp alongside the glacier with extraordinary views. Descend to Pangpema for overnight.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 18,
        title: 'Pangpema to Lhonak (4,778m/15,677ft)',
        description: 'Retrace steps back to Lhonak, enjoying different perspectives of the magnificent mountain scenery.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 19,
        title: 'Lhonak to Ghunsa (3,595m/11,795ft)',
        description: 'Long descent back to Ghunsa through varied landscapes and traditional settlements.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 20,
        title: 'Ghunsa to Amjilosa (2,510m/8,235ft)',
        description: 'Continue descent through beautiful forests and traditional villages.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 21,
        title: 'Amjilosa to Chirwa (1,270m/4,167ft)',
        description: 'Trek through waterfalls, small settlements, and quaint villages to reach Chirwa.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 22,
        title: 'Chirwa to Taplejung via Mitlung (1,442m/4,731ft)',
        description: 'Final trekking day through greenery and villages with warm welcomes from locals.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '8 hours'
      },
      {
        day: 23,
        title: 'Taplejung to Bhadrapur (91m/299ft)',
        description: 'Drive from Taplejung to Bhadrapur through beautiful countryside.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, Dinner',
        walkingHours: '9 hours drive'
      },
      {
        day: 24,
        title: 'Fly to Kathmandu (1,350m/4,429ft)',
        description: 'Conclude the Kanchenjunga Circuit Trek with flight to Kathmandu. Farewell dinner hosted by Ngimalaya Adventure.',
        accommodation: 'Hotel',
        meals: 'Breakfast and Dinner'
      },
      {
        day: 25,
        title: 'Final Departure',
        description: 'Check belongings and transfer to airport three hours before scheduled flight.',
        accommodation: 'Airport Transfer',
        meals: 'Breakfast'
      }
    ],
    included: [
      'Airport transfers in Kathmandu',
      'Accommodation in Kathmandu (Yatri Suites and Spa)',
      'Tea house accommodation during trek',
      'All meals during trekking days',
      'Professional English-speaking licensed guide',
      'Porter service (1 porter for 2 trekkers)',
      'Domestic flights (Kathmandu-Bhadrapur-Kathmandu)',
      'Ground transportation (Bhadrapur-Taplejung-Bhadrapur)',
      'All necessary permits (Restricted Area Permit, ACAP, etc.)',
      'Kathmandu sightseeing with entrance fees',
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
      'Alcoholic beverages and bottled drinks',
      'Personal trekking equipment',
      'Emergency evacuation costs',
      'Extra meals in Kathmandu',
      'Single supplement charges'
    ],
    requirements: [
      'Excellent physical fitness and endurance',
      'Previous high-altitude trekking experience mandatory',
      'Ability to walk 6-8 hours daily for multiple consecutive days',
      'Comprehensive travel and medical insurance including helicopter evacuation',
      'Valid passport with at least 6 months validity',
      'Restricted area permit requirements (minimum 2 people)',
      'Complete high-altitude trekking gear',
      'Mental preparedness for remote wilderness conditions',
      'No severe medical conditions (heart, lung, or blood pressure issues)',
      'Positive attitude and flexibility for challenging mountain environment'
    ]
  }
];
