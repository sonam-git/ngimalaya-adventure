// Import trek images
import abcImage from '../assets/images/abc.jpeg';
import ebcImage from '../assets/images/ebc.jpeg';
import gokyoImage from '../assets/images/gokyo.jpeg';
import threePassesImage from '../assets/images/threepasses.jpeg';
import kanchenjungaImage from '../assets/images/kanchanjungabc.jpg';
import thoranglaPassImage from '../assets/images/thorangla-pass.jpeg';
import bhimthangImage from '../assets/images/bhimthang.jpeg';

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
    altitude: '4,130m (13,549ft)',
    difficulty: 'Moderate',
    description: 'A breathtaking journey through diverse landscapes including terraced fields, picturesque Gurung villages, and rich flora and fauna. The trek offers spectacular views of Mt. Annapurna (8091m) and the unique Mt. Machhapuchhre (Fishtail Mountain), providing an immersive cultural experience in the heart of the Annapurna massif.',
    highlights: [
      'Spectacular views of Annapurna I (8,091m) and surrounding peaks',
      'Machapuchare (Fishtail) mountain views - one of Nepal\'s most beautiful peaks',
      'Cultural immersion in traditional Gurung and Magar villages',
      'Diverse landscapes from terraced fields to alpine terrain',
      'Rich biodiversity and rhododendron forests',
      'Annapurna Sanctuary - a natural amphitheater of towering peaks',
      'Traditional teahouse accommodation experience',
      'Views of Annapurna South, Hiunchuli, and Tent Peak'
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
        description: 'Arrive at Tribhuvan International Airport, transfer to hotel in Kathmandu. Meet your guide for trek briefing and equipment check.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner',
        walkingHours: 'Airport transfer'
      },
      {
        day: 2,
        title: 'Drive to Pokhara (823m)',
        description: 'Scenic 6-7 hour drive to the beautiful lakeside city of Pokhara. Rest and prepare for the trek. Optional visit to Phewa Lake.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: '6-7 hours drive'
      },
      {
        day: 3,
        title: 'Drive to Nayapul, Trek to Ulleri (2,050m)',
        description: 'Drive to Nayapul (1.5 hours) and begin trekking. Pass through Birethanti and climb the famous stone steps to reach Ulleri village.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 4,
        title: 'Ulleri to Ghorepani (2,874m)',
        description: 'Trek through beautiful rhododendron forests and charming villages. Ghorepani offers stunning mountain views and is famous for sunrise views.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 5,
        title: 'Ghorepani to Tadapani via Poon Hill (3,210m)',
        description: 'Early morning hike to Poon Hill for spectacular sunrise views over the Annapurna and Dhaulagiri ranges. Continue to Tadapani.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Tadapani to Chhomrong (2,170m)',
        description: 'Descend through rhododendron forests with excellent views of Machapuchare. Chhomrong is the gateway to Annapurna Sanctuary.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Chhomrong to Dovan (2,600m)',
        description: 'Steep descent to Chhomrong Khola, then climb through bamboo and rhododendron forests to reach Dovan.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Dovan to Machapuchare Base Camp (3,700m)',
        description: 'Trek through the narrowing valley with spectacular mountain views. Enter the Annapurna Sanctuary and reach MBC.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '5-6 hours'
      },
      {
        day: 9,
        title: 'MBC to Annapurna Base Camp (4,130m) and back to MBC',
        description: 'Early morning trek to ABC for incredible 360-degree mountain views including Annapurna I, South, and Machapuchare. Return to MBC.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '4-5 hours'
      },
      {
        day: 10,
        title: 'MBC to Bamboo (2,345m)',
        description: 'Begin descent from the sanctuary, retracing steps through Dovan and continuing to Bamboo lodge.',
        accommodation: 'Teahouse',
        meals: 'All meals',
        walkingHours: '6-7 hours'
      },
      {
        day: 11,
        title: 'Bamboo to Nayapul, Drive to Pokhara',
        description: 'Final day of trekking to Nayapul via Chhomrong. Drive back to Pokhara and celebrate the successful completion of the trek.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Farewell Dinner',
        walkingHours: '5-6 hours + 1.5 hours drive'
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
      'Comprehensive travel and medical insurance (including helicopter evacuation)',
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
    image: thoranglaPassImage,
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
    altitude: '5,545m (18,193ft)',
    difficulty: 'Strenuous',
    description: 'Embark on the Everest Base Camp Trek via Gokyo Lakes, a breathtaking adventure through spectacular scenery featuring the serene turquoise Gokyo Lakes and the iconic Cho La Pass. This extraordinary journey guides you through the prominent landmarks of the Khumbu region, surrounded by majestic mountains, amiable Sherpas, vibrant monasteries, Namche Bazaar, and the scenic Sagarmatha National Park, ultimately reaching the base of Everest. The trek unveils breathtaking panoramas from renowned viewpoints like Gokyo Ri and Kala Patthar, offering stunning views of the Khumbu Icefall and showcasing captivating sights of Mt. Cho Oyu, Everest, Lhotse, Makalu, Nuptse, Amadablam, Pumori, and Tengboche Monastery—the largest in Nepal\'s Khumbu region. Tailored for adventurous hikers seeking a challenging path away from the usual routes, this trek promises a lifelong experience combining the classic Everest Base Camp route with the pristine beauty of the Gokyo Valley.',
    highlights: [
      'Explore the foothills of the world\'s highest mountain, Mt. Everest',
      'Immerse in the beauty of the shimmering turquoise lakes in the Gokyo Valley',
      'Get lost in the panoramic views of Everest, Lhotse, and Nuptse from Kala Patthar',
      'Savor the magnificent views of the Khumbu Icefall',
      'Cross the nerve-racking Cho La Pass (5,420m)',
      'Get religious in the colorful monasteries in the backyards of the Sherpas',
      'Witness four of the world\'s highest peaks: Cho Oyu, Everest, Lhotse, and Makalu',
      'Experience the longest glacier in the Himalayas - Ngozumba Glacier',
      'Visit Tengboche Monastery, the largest in Nepal\'s Khumbu region',
      'Journey through Sagarmatha National Park\'s diverse ecosystems',
      'Experience authentic Sherpa culture in traditional villages',
      'Challenge yourself with high-altitude technical pass crossing'
    ],
    image: gokyoImage,
    price: '$2,299',
    season: 'Oct-Nov, Mar-May (Best: Oct-Nov)',
    groupSize: '2-8 people',
    region: 'Everest Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Upon landing at Tribhuwan International Airport (TIA) in Kathmandu, a Ngimalaya Adventure representative will warmly welcome you and facilitate transfer to the hotel. Following check-in, rest or visit our office. Evening welcome dinner at a traditional Nepali restaurant, offering authentic Nepali cuisine accompanied by a brief cultural program.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'After breakfast, embark on a guided tour to explore Kathmandu\'s most historical and spiritual landmarks, all UNESCO World Heritage sites. Visit historic Durbar Square, sacred Hindu temple of Pashupatinath, renowned Swayambhunath (Monkey Temple), and colossal Buddhist shrine Bouddhanath. Afternoon equipment checks with climbing leader, meet fellow participants, and engage in trip discussion.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Fly to Lukla, Trek to Phakding (2,800m/9,187ft)',
        description: 'The 40-minute flight from Kathmandu to Lukla treats you to one of the world\'s most stunning air routes, surrounded by high mountain peaks. Upon landing in Lukla, meet crew members and organize belongings. Begin trek with gradual descent to Cheplung village, offering glimpse of sacred Mt. Khumbila (18,900 ft). Continue descent to reach Phakding.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Phakding to Namche Bazaar (3,438m/11,280ft)',
        description: 'Traverse picturesque pine forest, journey north through Benkar valley. Cross Dudh Koshi River, pass Chumoa and reach Monjo, gateway to Everest National Park. Cross suspension bridge, continue past Jorsale village, following Dudh Koshi and Bhote Koshi rivers. Invigorating steep ascent brings you to the heart of Sherpa culture – Namche Bazaar. Weather permitting, catch glimpses of majestic Mt. Everest and Mt. Lhotse.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 5,
        title: 'Acclimatization Day – Namche Bazaar (3,790m/12,475ft)',
        description: 'Namche Bazaar offers array of activities for acclimatization. As primary center of Khumbu region, Namche boasts government offices, ATMs, Internet cafes, shops, restaurants, and vibrant market. Hike to Sagarmatha National Park provides sunrise panorama and stunning views of Mount Everest, Lhotse, Nuptse, Ama Dablam, Thamserku, Kongde. Optional day hike to Khumjung village unveils beautiful Sherpa settlement. Immerse in traditional Sherpa life, visit Khumjung Hillary School.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 6,
        title: 'Namche Bazaar to Phortse Thanga (3,680m/12,074ft)',
        description: 'Trek up Khumjung hill, descend to east of village, enter broad valley leading to Dudh Koshi. Head north, guide chooses optimal trail from two available options. At 3973m elevation, chorten on ridge top descending from Mt. Khumbila (5761m). Visit Mohang, birthplace of re-incarnated Lama of Rongbuk Monastery in Tibet. Trail descends through steep switchbacks on sandy slope to reach Dudh Koshi. Overnight near river at Phortse Thanga.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Phortse Thanga to Machhermo (4,470m/14,666ft)',
        description: 'Uphill climb from Phortse Thanga to Machhermo. Trail meanders through rhododendron forest, offering picturesque walk, passes waterfall before reaching Tongba Village. Ascent continues through Dole, Labarma, and Luza villages, with notable Chhorten marking approach to Luza. Throughout journey, accompanied by Dudh Koshi River.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 8,
        title: 'Machhermo to Gokyo (4,800m/15,749ft)',
        description: 'Day begins with climb to ridge, providing excellent views down valley to Kangtaiga and upwards towards Cho Oyu (8153m). Valley widens, pass through Phangkha. Descend to riverbank, ascend terminal moraine of Ngazumpa Glacier on steep trail. Cross iron bridge over stream, trail levels out, pass first lake Longpongo (4690m). Advance to second lake Taboche Tsho, captivated by shimmering turquoise blue water. Reach third lake with Gokyo village by its side and Cho-Oyu Mountain backdrop. After lunch, explore around third lake Dudh Pokhari.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 9,
        title: 'Gokyo Valley: Acclimatization Day – Optional Hike to Gokyo Ri (5,357m/17,576ft)',
        description: 'Morning hike to Gokyo Ri, small peak above Gokyo village, to relish breathtaking views of entire Khumbu region. Panoramic views become spectacular, offering sights of four of seven highest peaks of Nepal: Cho Oyu, Everest, Lhotse, and Makalu. Reach fourth lake Thonak Tsho, take pleasure in serene beauty. If time permits, additional hike up to fifth lake Ngozumba Tsho, where view of Ngozumba Glacier—longest glacier in Himalayas—is truly captivating.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 10,
        title: 'Gokyo to Thagnak (4,750m/15,585ft)',
        description: 'If didn\'t ascend Gokyo Ri previous day, can undertake climb today. Ascent to top of Gokyo Ri is challenging, featuring steep climb taking 3-4 hours to reach summit. Scenery from Gokyo Ri is magnificent, with Gokyo village perched on edge of third lake, overlooked by Cholatse and expansive Nogzumpa Glacier. Panoramic views include Kusum Kanguru, Thamserku, Kangtega, Taboche, Cholatse, Makalu, Lhotse, Nuptse, Everest, Changtse, and Pumori. Trek continues through Ngazumpa Glacier, traverse along mountain edge and descend into Thagnak.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Thagnak to Cho La Pass to Dzongla (5,420m/17,783ft)',
        description: 'One of most challenging days as tackle formidable Cho La pass. While pass not inherently difficult, steep incline and glacier traverse on eastern side demand caution. Trail is steep and icy, navigate carefully to avoid slipping on glazed rocks. Trek from Phedi ascends through ravine and rocky trail. Traverse side of frozen lake, reach top of pass adorned with prayer flags. Pyramidal Ama Dablam commands attention, Cholatse soars to west, Lobuche East and Baruntse rise sharply. Negotiate through crevasses, finally reach Dzongla Village with magnificent views of Cholatse, Ama Dablam, Lobuche mountains.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 12,
        title: 'Dzongla to Lobuche (4,940m/16,208ft)',
        description: 'Relatively short trek, allowing ample time to relax and appreciate surrounding beauty. Descend from Dzongla, traverse grassy trail, soak in view of Lobuche Peak. Trail meanders through wide river bed before leading to Lobuche. Remainder of day spent resting, preparing for upcoming longer trek on following day.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '2-3 hours'
      },
      {
        day: 13,
        title: 'Lobuche to Gorak Shep, Visit Everest Base Camp (5,364m/17,599ft)',
        description: 'Embark on trail to Everest Base Camp, navigate through once vast Gorak Shep Lake. Continue straight, encounter Indian army mountaineers\' memorials. Trek is demanding due to thin air at high altitude, leading through rocky dunes, moraine, and streams before arriving at Everest Base Camp. Vibrant tents of mountaineers stand out against gray surroundings. Marvel at views of Nuptse, Khumbuste, and Pumori. Return to Gorak Shep. Optional sunset view from Kala Patthar more commendable than sunrise view.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 14,
        title: 'Gorak Shep to Kala Patthar to Pheriche (5,545m/18,193ft)',
        description: 'Prepare for early morning departure amid pre-dawn darkness and cold temperatures ranging from -10 to -14 degrees Celsius. Chilly winds quite common. Familiar peaks like Lingtren, Khumbutse, and Changtse emerge to east, Everest begins to reveal itself. Upon reaching Kala Patthar, treated to 360-degree, up-close, formidable views of Mt. Everest. Capture photographs and savor magnificent mountain panorama. Afternoon descent to Pheriche for restful night.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 15,
        title: 'Pheriche to Namche Bazaar (3,438m/11,280ft)',
        description: 'Descend through hillside adorned with rhododendron and juniper trees, traverse landscape rich with natural beauty. Cross prayer-flag festooned bridge over Dudh Koshi River, trail follows Dudh Koshi gorge, descending rapidly through pine forests. Within forested expanse, may encounter colorful pheasants and mountain goats. Path leads to Sansa, offering panoramic views of Ama Dablam, Thamserku, and Nuptse mountains. Pass through winding trails and forested stretch to reach Namche Bazaar.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 16,
        title: 'Namche Bazaar to Lukla (2,800m/9,187ft)',
        description: 'Trail descends steeply, requiring careful navigation as fatigued legs contend with rocky terrain. Cross suspension bridges over fast-flowing Dudh Koshi and its tributaries, trail gradually levels out. Upon reaching Lukla, finally stretch sore legs and reflect on experiences of last couple of days.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Fly to Kathmandu (1,350m/4,429ft)',
        description: 'Board early morning flight to Kathmandu, concluding long mountain journey. Upon arrival in Kathmandu, option to rest or engage in souvenir shopping. For those interested in exploring other areas of Kathmandu, today provides opportunity to do so. Guides available to assist with souvenir shopping and sightseeing. Evening farewell dinner organized to celebrate successful completion of journey.',
        accommodation: 'Hotel',
        meals: 'Breakfast and Dinner',
        walkingHours: 'Flight day'
      },
      {
        day: 18,
        title: 'Final Departure',
        description: 'Your adventure in Nepal concludes today! Day involves exchanging emails with travel companions and organizing photos. Representative from Ngimalaya Adventure will accompany you to airport approximately 3 hours before scheduled flight. As you journey home, ample time to reflect on experiences and plan next adventure in wonderful country of Nepal. Safe travels!',
        accommodation: 'Airport',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All required permits (Sagarmatha National Park, TIMS)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'All accommodation during trek (tea houses/lodges)',
      'All meals during trek (breakfast, lunch, dinner)',
      'Lukla-Kathmandu round-trip flights',
      'Airport transfers in Kathmandu',
      'Welcome and farewell dinners',
      'Comprehensive pre-trek briefing',
      'Trekking equipment (duffel bag, sleeping bag, down jacket)',
      'First aid kit and emergency oxygen',
      'All government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees ($30-50 USD)',
      'Travel and rescue insurance (mandatory)',
      'Personal trekking equipment and clothing',
      'Personal expenses (laundry, phone calls, wifi)',
      'Alcoholic beverages and soft drinks',
      'Tips for guide and porter',
      'Extra accommodation in Kathmandu',
      'Emergency helicopter evacuation',
      'Meals in Kathmandu (except welcome/farewell dinners)'
    ],
    requirements: [
      'Excellent physical fitness and cardiovascular conditioning',
      'Previous high-altitude trekking experience (above 4,000m)',
      'Ability to walk 6-8 hours daily in challenging terrain',
      'Experience with technical pass crossings preferred',
      'Strong mental determination and positive attitude',
      'Comprehensive travel and evacuation insurance',
      'Medical clearance for high-altitude activities',
      'Proper high-altitude trekking equipment',
      'Flexibility for weather-related delays and itinerary changes',
      'Good health and average fitness level minimum'
    ]
  },
  {
    id: 'everest-three-passes',
    name: 'Everest Three Passes Trek',
    duration: '20 Days',
    altitude: '5,545m (18,192ft)',
    difficulty: 'Strenuous',
    description: 'Embark on the ultimate Everest region adventure, conquering three legendary high-altitude passes: Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,545m). This extraordinary 20-day expedition represents the pinnacle of Himalayan trekking, combining the classic Everest Base Camp experience with the pristine beauty of the Gokyo Valley and the technical challenge of high-altitude pass crossings. Journey through the heart of Sherpa homeland, witnessing ancient Buddhist monasteries, traditional villages, and some of the world\'s most spectacular mountain scenery. Experience unparalleled views of four 8,000m peaks: Everest (8,849m), Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m), along with countless other towering giants. This challenging trek requires excellent physical fitness, previous high-altitude experience, and mental determination to navigate demanding terrain, unpredictable weather, and extreme altitudes.',
    highlights: [
      'Cross three legendary high passes: Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,545m)',
      'Reach Everest Base Camp (5,364m) and summit Kala Patthar (5,545m) for ultimate Everest views',
      'Explore pristine Gokyo Valley with its sacred turquoise lakes and climb Gokyo Ri (5,357m)',
      'Witness spectacular views of four 8,000m peaks: Everest, Lhotse, Makalu, and Cho Oyu',
      'Immerse in authentic Sherpa culture at Namche Bazaar, Tengboche, and traditional villages',
      'Visit ancient Tengboche Monastery with monks\' blessing ceremonies',
      'Experience diverse ecosystems from subtropical forests to glacial moraines',
      'Navigate technical terrain including glacier crossings and rocky scrambles',
      'Enjoy panoramic mountain views from multiple high-altitude viewpoints',
      'Challenge yourself with the most comprehensive Everest region circuit',
      'Experience solitude and pristine wilderness in less-traveled valleys',
      'Witness the dynamic Khumbu Icefall and glacial landscapes'
    ],
    image: threePassesImage,
    price: '$2,899',
    season: 'Oct-Nov, Apr-May (Best: Oct-Nov)',
    groupSize: '2-8 people',
    region: 'Everest Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu and Trip Preparation (1,350m/4,429ft)',
        description: 'Upon arrival at Kathmandu International Airport, a Ngimalaya Adventure representative will provide transportation to the designated hotel in the vibrant Thamel district. Evening welcome dinner featuring authentic Nepalese cuisine, complete trek briefing, equipment check, and final preparations for the adventure ahead.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'Guided tour of UNESCO World Heritage sites including historic Durbar Square with ancient palaces and temples, sacred Pashupatinath Temple (Hindu\'s most sacred site), Swayambhunath Stupa (Monkey Temple) with panoramic valley views, and massive Bouddhanath Stupa (Buddhist pilgrimage center). Final equipment check, permit verification, and trek briefing with detailed route discussion.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Fly to Lukla and Trek to Phakding (2,652m/8,700ft)',
        description: 'Early morning scenic flight to Lukla (2,860m), one of the world\'s most exciting airports with dramatic mountain views. Meet your trekking crew, organize equipment, and begin trekking through traditional Sherpa villages. Descend through pine forests, cross several suspension bridges over the Dudh Koshi River, pass Chaurikharka village, and arrive at Phakding.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '3-4 hours'
      },
      {
        day: 4,
        title: 'Phakding to Namche Bazaar (3,440m/11,286ft)',
        description: 'Cross multiple suspension bridges over roaring Dudh Koshi River, including the famous Hillary Suspension Bridge. Enter Sagarmatha National Park at Monjo checkpoint. Steep ascent through pine forests with first glimpses of Everest, Lhotse, and Nuptse peaks. Arrive at Namche Bazaar, the vibrant Sherpa capital and gateway to Everest region.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Namche Bazaar: Acclimatization Day (3,440m/11,286ft)',
        description: 'Essential acclimatization day exploring Namche Bazaar. Visit Sherpa Culture Museum, Everest Photo Gallery, and traditional Saturday market. Optional hike to Everest View Hotel (3,880m) for spectacular mountain panoramas including Everest, Lhotse, Nuptse, and Ama Dablam. Explore Hillary School and Sagarmatha National Park Visitor Center.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '3-4 hours (optional hikes)'
      },
      {
        day: 6,
        title: 'Namche Bazaar to Tengboche (3,867m/12,687ft)',
        description: 'Spectacular trail with panoramic mountain views through rhododendron forests. Cross Dudh Koshi River, ascend to Tengboche Monastery (3,867m), the most important monastery in the Khumbu region. Attend evening prayer ceremony with monks\' chanting. Magnificent views of Everest, Nuptse, Lhotse, and the sacred Ama Dablam.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Tengboche to Dingboche (4,410m/14,468ft)',
        description: 'Descend through rhododendron forests to Deboche, cross Imja Khola River, and ascend through Pangboche village. Visit ancient Pangboche Monastery, one of the oldest in the region. Continue ascending through alpine terrain with stunning views of Island Peak, Lhotse, and Makalu. Arrive at Dingboche, a summer settlement with extensive barley fields.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Dingboche: Acclimatization Day (4,410m/14,468ft)',
        description: 'Crucial acclimatization day with optional hikes. Climb Nangkartshang Peak (5,083m) for incredible panoramic views of Makalu, Lhotse, Chalotse, Tawache, and Cholatse peaks. Alternative shorter hike to Chukhung village (4,730m) with views of Island Peak and surrounding summits. Rest and prepare for higher altitudes ahead.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-6 hours (optional hikes)'
      },
      {
        day: 9,
        title: 'Dingboche to Lobuche (4,940m/16,207ft)',
        description: 'Gradual ascent through alpine terrain with increasing barren landscape. Pass memorial stupas dedicated to climbers who lost their lives on Everest. Cross the moraine of Khumbu Glacier with views of Pumori and other peaks. Arrive at Lobuche, situated in a valley surrounded by massive peaks with Nuptse towering above.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Lobuche to Everest Base Camp to Gorak Shep (5,164m/16,942ft)',
        description: 'Early morning trek across Khumbu Glacier moraine to reach Everest Base Camp (5,364m). Experience the legendary base camp with colorful expedition tents (during climbing season), prayer flags, and the imposing Khumbu Icefall. Return to Gorak Shep for overnight stay, the highest overnight stop on the trek.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 11,
        title: 'Gorak Shep to Kala Patthar to Dzongla (4,830m/15,846ft)',
        description: 'Pre-dawn ascent of Kala Patthar (5,545m), the trek\'s highest point, for spectacular sunrise views over Everest, Nuptse, Changtse, and Lhotse. Return to Gorak Shep for breakfast, then descend and traverse to Dzongla, crossing moraine terrain with views of Cholatse and Taboche peaks.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '7-8 hours'
      },
      {
        day: 12,
        title: 'Dzongla to Thagnak via Cho La Pass (5,420m/17,782ft)',
        description: 'Technical and challenging day crossing Cho La Pass (5,420m), one of the three legendary passes. Early start for steep rocky ascent, possible glacier crossing with crampons, and navigation of loose scree. Spectacular views of Lobuche Peak, Cholatse, and distant peaks. Descend carefully to Thagnak beside Ngozumpa Glacier.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 13,
        title: 'Thagnak to Gokyo (4,790m/15,715ft)',
        description: 'Follow the lateral moraine of Ngozumpa Glacier, the longest glacier in Nepal. Pass the first and second Gokyo Lakes with their stunning turquoise colors. Gradual ascent to Gokyo village beside the sacred third lake. Afternoon rest and acclimatization with views of Cho Oyu, the world\'s sixth-highest mountain.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 14,
        title: 'Gokyo: Explore Gokyo Ri (5,357m/17,575ft)',
        description: 'Early morning ascent of Gokyo Ri (5,357m) for one of the Himalayas\' most spectacular viewpoints. Incredible panoramic views of Everest, Lhotse, Makalu, Cho Oyu, and dozens of other peaks. View all six sacred Gokyo Lakes from above. Afternoon rest or optional exploration of fourth and fifth Gokyo Lakes.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 15,
        title: 'Gokyo to Marlung via Renjo La Pass (5,360m/17,585ft)',
        description: 'Cross the second of three high passes, Renjo La (5,360m). Steep ascent from Gokyo with spectacular views back to Gokyo Lakes and forward to Everest massif. Technical descent on loose scree to Marlung in the remote Bhote Koshi valley. Views of Tenzing Peak and other remote summits.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 16,
        title: 'Marlung to Namche Bazaar (3,440m/11,286ft)',
        description: 'Long descent through the remote Bhote Koshi valley with traditional Sherpa villages and extensive yak grazing areas. Pass through Thame village, known for famous Sherpa mountaineers. Rejoin the main Everest Base Camp trail and arrive back at familiar Namche Bazaar. Celebration dinner with trekking crew.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Namche Bazaar to Chukhung via Kongma La Pass (5,545m/18,192ft)',
        description: 'Final and highest pass crossing, Kongma La (5,545m), the most technical of the three passes. Early start for long day traversing high-altitude terrain. Cross glacier sections and rocky terrain with spectacular views of Makalu, Baruntse, and other peaks. Descend to Chukhung village in the Imja Valley.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '9-10 hours'
      },
      {
        day: 18,
        title: 'Chukhung to Tengboche (3,867m/12,687ft)',
        description: 'Descend through familiar terrain back to Tengboche Monastery. Pass through Dingboche and Pangboche villages, retracing steps through alpine landscape. Arrive at Tengboche for final night at high altitude. Optional evening visit to monastery for prayers and reflection on the incredible journey.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 19,
        title: 'Tengboche to Namche Bazaar (3,440m/11,286ft)',
        description: 'Final descent through beautiful rhododendron forests with familiar mountain views. Cross suspension bridges over Dudh Koshi River and arrive back at Namche Bazaar. Final evening celebration with trekking crew, sharing stories and memories of the incredible three-pass adventure.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 20,
        title: 'Namche Bazaar to Lukla (2,860m/9,383ft)',
        description: 'Final day of trekking retracing steps through familiar Sherpa villages. Cross multiple suspension bridges, pass through Monjo checkpoint, and arrive at Lukla. Final celebration dinner with entire trekking crew. Preparation for morning flight back to Kathmandu and conclusion of the epic three-pass adventure.',
        accommodation: 'Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 21,
        title: 'Fly to Kathmandu and Departure',
        description: 'Morning flight from Lukla to Kathmandu with final views of the Himalayas. Transfer to hotel for rest and souvenir shopping in Thamel. Optional farewell dinner. Airport transfer for international departure or extend stay to explore more of Nepal.',
        accommodation: 'Hotel or Airport',
        meals: 'Breakfast',
        walkingHours: 'Flight day'
      }
    ],
    included: [
      'All required permits (Sagarmatha National Park, TIMS)',
      'Professional English-speaking trekking guide',
      'Experienced porter service (1 porter for 2 trekkers)',
      'All accommodation during trek (tea houses/lodges)',
      'All meals during trek (breakfast, lunch, dinner)',
      'Lukla-Kathmandu round-trip flights',
      'Airport transfers in Kathmandu',
      'Welcome and farewell dinners',
      'Comprehensive pre-trek briefing',
      'Trekking equipment (duffel bag, sleeping bag, down jacket)',
      'First aid kit and emergency oxygen',
      'All government taxes and service charges'
    ],
    excluded: [
      'International flights to/from Nepal',
      'Nepal visa fees ($30-50 USD)',
      'Travel and rescue insurance (mandatory)',
      'Personal trekking equipment and clothing',
      'Personal expenses (laundry, phone calls, wifi)',
      'Alcoholic beverages and soft drinks',
      'Tips for guide and porter',
      'Extra accommodation in Kathmandu',
      'Emergency helicopter evacuation',
      'Meals in Kathmandu (except welcome/farewell dinners)'
    ],
    requirements: [
      'Excellent physical fitness and cardiovascular conditioning',
      'Previous high-altitude trekking experience (above 4,000m)',
      'Technical mountaineering experience preferred',
      'Ability to walk 8-10 hours daily in challenging terrain',
      'Experience with crampons and basic mountaineering equipment',
      'Strong mental determination and positive attitude',
      'Comprehensive travel and evacuation insurance',
      'Medical clearance for high-altitude activities',
      'Proper high-altitude mountaineering equipment',
      'Flexibility for weather-related delays and itinerary changes'
    ]
  },
  {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    duration: '18 Days',
    altitude: '5,160m (16,930ft)',
    difficulty: 'Challenging',
    description: 'Embark on an extraordinary journey around Manaslu, the eighth highest mountain in the world at 8,163m. This spectacular off-the-beaten-path trek offers an authentic Himalayan experience through diverse landscapes, from subtropical forests to high alpine terrain. The adventure takes you through remote valleys, traditional Tibetan Buddhist villages, and across the challenging Larkya La Pass at 5,160m. Experience rich Sherpa and Gurung cultures, ancient monasteries, and pristine wilderness in one of Nepal\'s most restricted trekking regions, requiring special permits and offering unparalleled solitude compared to other popular circuits.',
    highlights: [
      'Cross the spectacular Larkya La Pass (5,160m/16,930ft)',
      'Stunning views of Manaslu (8,163m) - world\'s eighth highest peak',
      'Restricted area permits required - limited trekkers ensure pristine trails',
      'Rich Tibetan Buddhist culture and ancient monasteries',
      'Remote mountain villages with authentic cultural experiences',
      'Diverse ecosystems from tropical forests to alpine terrain',
      'Views of Himlung Himal, Cheo Himal, and Annapurna II from the pass',
      'Traditional Sherpa and Gurung villages with centuries-old traditions',
      'Pristine wilderness with minimal commercial development',
      'Historic Pungyen Gompa monastery with glacier views',
      'Natural hot springs at Tatopani for relaxation',
      'Connects with Annapurna Circuit at Dharapani'
    ],
    image: bhimthangImage,
    price: '$1,699',
    season: 'Sep-Nov, Mar-May (Best: Oct-Nov, Mar-Apr)',
    groupSize: '2-10 people',
    region: 'Manaslu Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu and Trip Preparation (1,350m/4,429ft)',
        description: 'Upon arrival at Kathmandu International Airport, a Ngimalaya Adventure representative will provide transportation to the designated hotel. A welcome dinner, showcasing authentic Nepalese cuisine, will be hosted by Ngimalaya Adventure in the evening, offering an introduction to the country\'s culinary culture.',
        accommodation: 'Hotel',
        meals: 'Welcome Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'After breakfast, embark on a guided tour to explore some of Kathmandu\'s most historical and spiritual landmarks, all UNESCO World Heritage sites. Visit historic Durbar Square, sacred Pashupatinath Temple, renowned Swayambhunath (Monkey Temple), and colossal Bouddhanath Stupa. Conduct equipment checks and trip briefing.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        walkingHours: 'Sightseeing tour'
      },
      {
        day: 3,
        title: 'Drive from Kathmandu to Soti Khola (710m/2,330ft)',
        description: 'Commence your journey early towards Soti Khola. Revel in picturesque landscapes of Nepalese countryside and breathtaking mountain scenery. Drive from Kathmandu to Dhading Bensi on paved road, then navigate rough road from Dhading Bensi to Arughat, continuing to Soti Khola.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '8-9 hours drive (138 km)'
      },
      {
        day: 4,
        title: 'Soti Khola to Maccha Khola (900m/2,953ft)',
        description: 'Embark on adventurous trek crossing bridge through enchanting Sal forests. Ascend to ridge with panoramic views of Budhi Gandaki\'s turbulent rapids. Continue to Khursane through rocky path with steep ascents and descents, witnessing two tropical waterfalls. Traverse rice terraces and witness Gurung village of Labubesi.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Maccha Khola to Jagat (1,410m/4,626ft)',
        description: 'The narrow trail makes minor ups and downs, crossing Tharo Khola to reach Khorlabesi. Encounter small hot spring at Tatopani. Climb over ridge, cross Budhi Gandaki on suspension bridge, climb wide stone staircase across landslide to Dobhan. Cross Yaru Khola suspension bridge to reach Jagat village.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 6,
        title: 'Jagat to Deng (1,804m/5,919ft)',
        description: 'Begin by climbing over rocky ridge to Salleri, then descend to Sirdibas. Valley widens as trail continues to Ghatta Khola. Walk upstream to long suspension bridge in Philim, a large Gurung village. Enter steep, uninhabited gorge, cross Budhi Gandaki multiple times, pass through bamboo forests to reach tiny village of Deng.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 7,
        title: 'Deng to Namrung (2,630m/8,629ft)',
        description: 'After brief walk beyond Deng, cross Budhi Gandaki and climb to Rana (1,910m). Head west up Budhi Gandaki valley through forests and mani walls to Ghap. Take route through Prok village with viewpoint for beautiful Siringi Himal. Cross river several times, pass gompas en route, walk through dense forest to reach Namrung.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 8,
        title: 'Namrung to Samagaon (3,530m/11,582ft)',
        description: 'Namrung village offers good viewpoint for Siring and Ganesh Himal, with Mt. Himal Chuli visible in south. Climb steadily through forests to reach Lihi village with chortens and barley terraces. Pass through Sho, Lho, and Shyala villages. Enjoy extraordinary Mt. Manaslu views from Lho village and explore famous Ribung Gompa.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 9,
        title: 'Samagaon - Pungyen Gompa - Samagaon (3,530m/11,582ft)',
        description: 'Spend day at Samagaon for rest and acclimatization. Experience rich Sherpa culture, see thousands of mani stones with Buddhist texts and pictures, observe Sherpa women in traditional clothes. Visit old Pungyen Gompa monastery on little hill near Sama village with great glacier views. Learn about monastery\'s history related to Manaslu climbing attempts.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: 'Acclimatization day'
      },
      {
        day: 10,
        title: 'Samagaon to Samdo (3,860m/12,665ft)',
        description: 'Descend to Budhi Gandaki River, now turned north, follow to bridge over side stream. Trail to left leads to Manaslu Base Camp. Larkya La trail passes several mani walls as valley widens. Easy trail on shelf above river through juniper and birch forests of Kermo Kharka. Cross wooden bridge and climb to promontory, pass through stone kani to reach Samdo.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 11,
        title: 'Rest Day in Samdo (3,860m/12,665ft)',
        description: 'Important acclimatization day in Samdo. Explore the village, interact with local people, and prepare for the challenging pass crossing ahead. Optional short hikes around the area for further acclimatization. Rest and enjoy the mountain views while preparing mentally and physically for Larkya La Pass.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: 'Rest day'
      },
      {
        day: 12,
        title: 'Samdo to Dharamsala/Larkya Base Camp (4,460m/14,633ft)',
        description: 'Continue walk down edge, cross wooden bridge over Budhi Gandaki and begin walking upward. Cross two streams, witness Larkya Glacier, go around Salka Khola valley and climb to stone guest house (4,450m) - a shelter called Dharmshala, also known as Larke Phedi. Short walk allows plenty of time for acclimatization and afternoon rest.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '4-5 hours'
      },
      {
        day: 13,
        title: 'Dharamsala - Larkya La Pass - Bimthang (5,160m/16,930ft)',
        description: 'After short climb, reach valley on north side of Larkya Glaciers with great views of Cho Danda and Larkya Peak. Walk across glacier moraines with gradual ascent, becoming steeper near pass. From pass, outstanding views of Himlung Himal, Cheo Himal, Kangguru, and huge Annapurna II. Long day to Bimtang through low pastures with Mt. Manaslu looming nearby.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '8-9 hours'
      },
      {
        day: 14,
        title: 'Bimthang to Tilije (2,300m/7,546ft)',
        description: 'From ridge at Bimtang, enjoy great views of Mt. Manaslu, Lamjung Himal, Himlung Himal, and Cheo Himal. Descend further, cross high pasture (Sangure Kharka), bridge over Dudh Khola. Walk through rhododendron forest, follow trail through narrow valley to highest cultivated land at Karche (2,785m). Pass fields, steep climb over ridge to reach Tilije village.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 15,
        title: 'Tilije to Tal (1,700m/5,578ft)',
        description: 'Climb over small ridge, enjoy stone-paved trail through beautiful village. Cross bridge over Dudh Khola, climb through chorten-shaped arch, pass mani wall to reach Thonje village. Go through police checkpoint, continue to Dharapani where you enter Annapurna Circuit section. Pass Karte village, cross bridge over Marshyangdi Khola, reach Tal village at foot of large waterfall.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5-6 hours'
      },
      {
        day: 16,
        title: 'Tal to Syange (1,080m/3,543ft)',
        description: 'Follow trail to Chyamje village crossing Marshyangdi Khola once again. Marsyandi valley opens with terrace fields and villages clinging high to hillsides. Trail descends through rhododendron and pine forests to reach Syange, completing the circuit portion of the trek.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '6-7 hours'
      },
      {
        day: 17,
        title: 'Syange to Kathmandu (1,350m/4,429ft)',
        description: 'Drive from Syange to Kathmandu via Besi Sahar offers opportunity to enjoy both hill and mountain landscapes. Drive often along banks of Marsyangdi and Trishuli rivers, pass beautiful villages with farming terraces. In Kathmandu, escorted to hotel. Day can be spent in leisure or last-minute shopping. Farewell dinner to celebrate successful completion.',
        accommodation: 'Hotel',
        meals: 'Breakfast, Lunch, and Farewell Dinner',
        walkingHours: '7 hours drive'
      },
      {
        day: 18,
        title: 'Final Departure',
        description: 'Today marks the conclusion of our memorable journey in Nepal. A representative from Ngimalaya Adventure will ensure timely arrival at airport, approximately 3 hours before scheduled departure flight. Extension stays available for additional adventure activities with Ngimalaya Adventure assistance.',
        accommodation: 'Airport Transfer',
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
      'All necessary permits (Restricted Area Permit, ACAP, MCAP)',
      'Transportation (Kathmandu-Soti Khola and Syange-Kathmandu)',
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
    id: 'kanchenjunga-circuit',
    name: 'Kanchenjunga Circuit Trek',
    duration: '25 Days',
    altitude: '5,143m (16,874ft)',
    difficulty: 'Strenuous',
    description: 'Embark on the mesmerizing Kanchenjunga Circuit Trek, a unique opportunity to reach the base camp of the world\'s third tallest mountain through a remote and tranquil mountain trail. Nestled in the far north-eastern corner of Nepal, Mt. Kanchenjunga boasts the title of one of the most stunning mountain massifs globally, with its name meaning "Five Treasures of the Great Snow," symbolizing its five majestic summits.',
    highlights: [
      'Reach the base camp of world\'s third highest mountain (8,586m)',
      'Experience the meaning of "Five Treasures of the Great Snow"',
      'Trek through remote and less-traveled paths in eastern Nepal',
      'Unique insight into rural Nepalese lifestyle',
      'Marvel at breathtaking mountain massifs of Mt. Kanchenjunga',
      'Visit both North and South Base Camps',
      'Cross challenging high-altitude passes including Sele La',
      'Pristine wilderness and untouched natural beauty',
      'Authentic cultural experiences with local communities',
      'Views of Kumbakarna (Jannu), Nyukla Lachung, and other peaks',
      'Yalung and Kanchenjunga Glacier experiences',
      'Diverse ecosystems from subtropical to alpine'
    ],
    image: kanchenjungaImage,
    price: '$2,799',
    season: 'Oct-Nov, Mar-May',
    groupSize: '2-8 people',
    region: 'Kanchenjunga Region',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,350m/4,429ft)',
        description: 'Upon arrival at Tribhuwan International Airport in Kathmandu, complete custom formalities, and meet the Ngimalaya Adventure representative who will escort you to Yatri Suites and Spa. Rest and enjoy Nepalese cuisine at a welcome dinner.',
        accommodation: 'Hotel',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Kathmandu: Sightseeing and Trek Preparation (1,350m/4,429ft)',
        description: 'Explore UNESCO World Heritage Sites—Swayambhunath Stupa, Pashupatinath Temple, Kathmandu Durbar Square, and Bauddhanath Stupa. Meet the trekking team for a briefing.',
        accommodation: 'Hotel (Yatri Suites and Spa)',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Fly from Kathmandu to Bhadrapur, Drive to Taplejung (1,442m/4,731ft)',
        description: 'Take an early morning flight to Bhadrapur and drive to Taplejung, experiencing both air and road travel.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 4,
        title: 'Taplejung to Lalikharka (2,265m/7,431ft)',
        description: 'Trek for 5 hours to Lalikharka, a beautiful village in the Mechi Zone, through lush green forests. Simultaneous ascent and descent with scenic views.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '5 hours'
      },
      {
        day: 5,
        title: 'Lalikharka to Khesewa (2,120m/6,956ft)',
        description: 'Trek to Khesewa after an easy descent until Phundrawa, followed by a steep climb and ascent through forests and small villages.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 6,
        title: 'Khesewa to Mamankhe (1,785m/5,857ft)',
        description: 'Start the trek to Kabeli Khola, passing through forests, crossing a small stream, and enjoying views of the Himalayan peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 7,
        title: 'Mamankhe to Yamphudin (2,080m/6,824ft)',
        description: 'Trek uphill alongside Kabeli Khola, passing small settlements, a beautiful ridge, and a waterfall before reaching Yamphudin.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 8,
        title: 'Yamphudin to Tortong (2,995m/9,827ft)',
        description: 'Uphill trek to Cheram through terraced farms, green meadows, and beautiful views of the Himalayas. Cross Lassiya Bhanjyang pass before reaching Tortong.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 9,
        title: 'Tortong to Cheram (3,870m/12,697ft)',
        description: 'Steady climb to Cheram with views of the Simbuwa Khola and Yalung Glacier. Walk through thick rhododendron forest and enjoy the Yalung Glacier\'s magnificence.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 10,
        title: 'Cheram: Acclimatization and Rest (3,870m/12,697ft)',
        description: 'Acclimatization day in Cheram, exploring the Yalung Glacier areas and enjoying views of Kabaru and Rathong peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 11,
        title: 'Cheram to Ramchaur (Ramche) (4,580m/15,027ft)',
        description: 'Short trek from Cheram to Ramche, ascending to the Yalung Glacier\'s snout. Walk through a beautiful valley with views of several Himalayan peaks.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 12,
        title: 'Ramchaur to Yalung Base Camp, back to Cheram (4,580m/15,027ft)',
        description: 'Trek to Yalung Base Camp, witness extraordinary views of Kumbakarna (Jannu), Nyukla Lachung, and other Himalayan peaks. Descend to Cheram for overnight stay.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 13,
        title: 'Cheram to Sele La (4,290m/14,075ft)',
        description: 'Trek to Sele La, crossing four passes, including Sele La pass. Experience prayer flags and stunning views on this challenging day.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 14,
        title: 'Sele La to Ghunsa (3,595m/11,795ft)',
        description: 'Trek towards Ghunsa, passing Tangbgharma Danda, crossing a chorten marked by prayer flags, and descending through forests.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 15,
        title: 'Ghunsa to Kambachen (4,050m/13,288ft)',
        description: 'Trek north along the river bank, passing meadows, wildflowers, and crossing a bridge at Rampuk Kharka to reach Kambachen.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 16,
        title: 'Kambachen to Lhonak (4,778m/15,677ft)',
        description: 'Challenging day trekking through rocky fields and boulders, passing a waterfall, and reaching Lhonak.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 17,
        title: 'Kanchenjunga Base Camp, overnight at Pangpema (5,143m/16,874ft)',
        description: 'Trek to Kanchenjunga Base Camp, alongside the Kanchenjunga Glacier, with extraordinary views. Descend to spend the night at Pangpema.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 18,
        title: 'Pangpema to Lhonak (4,778m/15,677ft)',
        description: 'Trace back to Lhonak from Pangpema.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 19,
        title: 'Lhonak to Ghunsa (3,595m/11,795ft)',
        description: 'Descend to Ghunsa via Kambachen, retracing the route taken during the ascent.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 20,
        title: 'Ghunsa to Amjilosa (2,308m/7,573ft)',
        description: 'Descend to Amjilosa, passing through Juniper forests, crossing suspension bridges, and enjoying the scenery.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 21,
        title: 'Amjilosa to Chirwa (1,270m/4,167ft)',
        description: 'Trek through waterfalls, small settlements, and quaint villages to reach Chirwa.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner'
      },
      {
        day: 22,
        title: 'Chirwa to Taplejung via Mitlung (1,442m/4,731ft)',
        description: 'Trek for 8 hours to Taplejung via Mitlung, experiencing greenery, quaint villages, and warm welcomes.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '8 hours'
      },
      {
        day: 23,
        title: 'Taplejung to Bhadrapur (2,419m/7,937ft)',
        description: 'Drive from Taplejung to Bhadrapur by bus, a 9-hour journey.',
        accommodation: 'Hotel/Tea House',
        meals: 'Breakfast, Lunch, and Dinner',
        walkingHours: '9 hours drive'
      },
      {
        day: 24,
        title: 'Fly to Kathmandu (1,350m/4,429ft)',
        description: 'Conclude the Kanchenjunga Circuit Trek with a flight from Bhadrapur to Kathmandu. Enjoy a farewell dinner hosted by Ngimalaya Adventure.',
        accommodation: 'Hotel',
        meals: 'Breakfast and Dinner'
      },
      {
        day: 25,
        title: 'Final Departure',
        description: 'Check belongings, and a Ngimalaya Adventure representative will transfer you to the airport for your departure, three hours before the scheduled flight.',
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
      'Mental preparedness for remote and challenging conditions',
      'No severe medical conditions (heart, lung, or blood pressure issues)',
      'Positive attitude and flexibility for extreme mountain conditions'
    ]
  },
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
    image: ebcImage,
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
