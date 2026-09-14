// Culinaria Nigerian Food, Restaurant & Recipe Dataset

export const CITIES = [
  { id: 'lagos', name: 'Lagos', country: 'Nigeria', code: 'LOS', symbol: '₦' },
  { id: 'abuja', name: 'Abuja', country: 'Nigeria', code: 'ABJ', symbol: '₦' },
  { id: 'phc', name: 'Port Harcourt', country: 'Nigeria', code: 'PHC', symbol: '₦' },
  { id: 'ibadan', name: 'Ibadan', country: 'Nigeria', code: 'IBA', symbol: '₦' }
];

export const NEIGHBORHOODS = {
  lagos: ['All Neighborhoods', 'Victoria Island', 'Ikoyi', 'Lekki Phase 1', 'Ikeja', 'Yaba', 'Surulere'],
  abuja: ['All Neighborhoods', 'Maitama', 'Wuse II', 'Garki', 'Jabi', 'Asokoro'],
  phc: ['All Neighborhoods', 'GRA Phase 2', 'Old GRA', 'Trans Amadi'],
  ibadan: ['All Neighborhoods', 'Bodija', 'Agodi GRA', 'Ring Road']
};

export const DIETARY_OPTIONS = [
  { id: 'all', label: 'All Diets' },
  { id: 'halal', label: 'Halal Certified' },
  { id: 'pescatarian', label: 'Pescatarian' },
  { id: 'vegetarian', label: 'Vegetarian Friendly' },
  { id: 'gluten-free', label: 'Gluten-Free' }
];

export const MOOD_OPTIONS = [
  { id: 'all', label: 'Any Vibe' },
  { id: 'buka-spot', label: 'Local Bukka' },
  { id: 'date-night', label: 'Fine Dining / Date Night' },
  { id: 'casual-quick', label: 'Quick Bite' },
  { id: 'group-feast', label: 'Family Feast' },
  { id: 'late-night', label: 'Late Night Suya' }
];

export const MOCK_DISHES = [
  // 1. SMOKEY PARTY JOLLOF RICE
  {
    id: 'dish-ng-1',
    cityId: 'lagos',
    name: 'Smokey Party Jollof Rice with Fried Plantain & Goat Meat',
    restaurantId: 'rest-ng-1',
    restaurantName: 'Terra Kulture Restaurant',
    neighborhood: 'Victoria Island',
    price: 7500,
    signatureScore: 9.9,
    dietary: ['halal'],
    mealType: 'Lunch & Dinner',
    mood: 'date-night',
    description: 'Aromatic long-grain parboiled rice cooked in rich rodo-tatashe pepper blend, wood-smoke seasoned, served with golden dodo and tender fried goat meat.',
    chefNote: 'Infused with natural firewood smoke aroma using authentic cast-iron pots.',
    image: '/images/jollof_rice_dodo_1789406504058.png',
    mapCoords: { x: 42, y: 58 },
    recipe: {
      prepTime: '25 mins',
      cookTime: '45 mins',
      difficulty: 'Intermediate',
      servings: '6 servings',
      ingredients: [
        '4 cups Long Grain Parboiled Rice',
        '8 Red Bell Peppers (Tatashe)',
        '5 Scotch Bonnet Peppers (Rodo)',
        '2 large Red Onions (sliced)',
        '1 cup Quality Red Palm Oil or Vegetable Oil',
        '3 tbsp Tomato Paste',
        '2 cups Rich Beef / Goat Meat Stock',
        '1 tbsp Thyme & Curry Powder',
        '3 Bay Leaves & Seasoning Cubes',
        '1 kg Soft Goat Meat (boiled and lightly fried)',
        '3 Ripe Yellow Plantains (sliced for Dodo)'
      ],
      instructions: [
        'Blend the red bell peppers, scotch bonnets, fresh tomatoes, and one onion until smooth. Boil off excess water in a pot until thick.',
        'Heat oil in a heavy-bottomed pot. Fry sliced onions and tomato paste for 5 minutes until fragrance deepens.',
        'Pour in the boiled pepper blend and fry for 15 minutes until oil separates to the top.',
        'Add meat stock, bay leaves, thyme, curry, and seasoning cubes. Bring to a rolling boil.',
        'Wash parboiled rice thoroughly and add to the simmering sauce. Stir once, cover with foil paper and tight lid.',
        'Cook on low heat for 30 minutes. Once soft, turn heat to high for 5 minutes to trap that signature party smokey aroma!'
      ],
      proTip: 'Never stir Jollof rice repeatedly while cooking; let the steam cook the grains evenly under sealed foil.'
    }
  },

  // 2. POUNDED YAM & EGUSI SOUP
  {
    id: 'dish-ng-2',
    cityId: 'lagos',
    name: 'Pounded Yam with Authentic Egusi Soup & Stockfish',
    restaurantId: 'rest-ng-2',
    restaurantName: 'Yellow Chilli',
    neighborhood: 'Ikoyi',
    price: 9500,
    signatureScore: 9.8,
    dietary: ['halal', 'gluten-free'],
    mealType: 'Dinner',
    mood: 'group-feast',
    description: 'Silky smooth hand-pounded white yam paired with rich melon seed soup braised with dried stockfish head, bitter leaf, crayfish, and assorted meats.',
    chefNote: 'Ground melon seeds pan-roasted before simmer for deep nutty richness.',
    image: '/images/egusi_pounded_yam_1789406535718.png',
    mapCoords: { x: 55, y: 48 },
    recipe: {
      prepTime: '30 mins',
      cookTime: '50 mins',
      difficulty: 'Master Chef',
      servings: '4 servings',
      ingredients: [
        '3 cups Ground Melon Seeds (Egusi)',
        '1 medium Tuber White Pona Yam',
        '1 cup Bleached Palm Oil',
        '2 cups Ground Crayfish',
        '1 Deboned Stockfish Head (Okporoko)',
        '1 large Dried Catfish (washed in hot salt water)',
        'Fresh Ugu leaves or Bitterleaf (finely chopped)',
        '2 tbsp Locust Beans (Iru)',
        '1 kg Assorted Meat (Shaki, Kpomo, Beef)'
      ],
      instructions: [
        'Boil assorted meat and stockfish with onions and seasoning until tender. Reserve rich broth.',
        'Mix ground Egusi with a little warm water and chopped onions to form thick paste balls.',
        'Heat palm oil in pot, add iru (locust beans). Drop egusi paste balls into hot oil and fry gently without stirring for 8 mins.',
        'Add meat stock, crayfish, and peppers. Simmer for 20 mins until egusi thickens and oils rise.',
        'Stir in dried fish and chopped ugu leaves. Simmer for 5 minutes.',
        'Peel and boil yam chunks until soft. Pound in mortar or food processor until stretchy and smooth.'
      ],
      proTip: 'Frying the egusi paste balls undisturbed creates delicious chunky morsels in the soup.'
    }
  },

  // 3. SPICY BEEF SUYA
  {
    id: 'dish-ng-3',
    cityId: 'lagos',
    name: 'Spicy Beef Suya with Yaji Pepper & Sliced Onions',
    restaurantId: 'rest-ng-3',
    restaurantName: 'University of Suya',
    neighborhood: 'Ikeja',
    price: 4500,
    signatureScore: 9.7,
    dietary: ['halal', 'gluten-free'],
    mealType: 'Late-Night',
    mood: 'late-night',
    description: 'Thinly sliced tender beef skewered over open charcoal grill, heavily coated in authentic Northern Yaji spice (kuli-kuli, ginger, chili, garlic).',
    chefNote: 'Grilled over embers made from hardwood timber for crisp caramelized edges.',
    image: '/images/beef_suya_1789406566456.png',
    mapCoords: { x: 30, y: 25 },
    recipe: {
      prepTime: '20 mins',
      cookTime: '15 mins',
      difficulty: 'Easy',
      servings: '4 servings',
      ingredients: [
        '700g Flank Steak or Beef Tenderloin (sliced paper thin)',
        '1 cup Yaji Spice Blend (Ground Kuli-Kuli peanut cake, ginger, cayenne, garlic powder, onion powder, salt)',
        '3 tbsp Peanut Oil or Vegetable Oil',
        '1 Red Onion (sliced into rings)',
        '2 Fresh Tomatoes (sliced)',
        'Wooden Skewers (soaked in water for 30 mins)'
      ],
      instructions: [
        'Thread paper-thin beef strips tightly onto soaked wooden skewers.',
        'Generously coat skewers with peanut oil, then press heavily into the dry Yaji spice blend until fully covered.',
        'Preheat charcoal grill or oven broiler to high (220°C / 425°F).',
        'Grill skewers for 6-8 minutes per side, brushing lightly with oil and flipping until edges turn crisp and fragrant.',
        'Serve hot wrapped in old-school newspaper lined foil with fresh onion rings, tomatoes, and extra extra Yaji powder!'
      ],
      proTip: 'Always slice meat against the grain when semi-frozen for razor thin suya strips.'
    }
  },

  // 4. AMALA, EWEDU & GBEGIRI
  {
    id: 'dish-ng-4',
    cityId: 'lagos',
    name: 'Amala, Ewedu & Gbegiri (Lapo-Lapo Combo with Goat Meat)',
    restaurantId: 'rest-ng-4',
    restaurantName: 'Amala Shitta',
    neighborhood: 'Surulere',
    price: 5000,
    signatureScore: 9.8,
    dietary: ['halal'],
    mealType: 'Lunch',
    mood: 'buka-spot',
    description: 'Fluffy dark yam flour (Amala isu), vibrant slimy Ewedu jute leaf, silky yellow Gbegiri bean soup, and hot spicy buka stew with soft goat meat.',
    chefNote: 'Ewedu whisked traditionally with Ijabe wooden broom for light airy texture.',
    image: '/images/amala_ewedu_1789406591510.png',
    mapCoords: { x: 38, y: 68 },
    recipe: {
      prepTime: '25 mins',
      cookTime: '40 mins',
      difficulty: 'Intermediate',
      servings: '4 servings',
      ingredients: [
        '2 cups Quality Dark Yam Flour (Elubo Amala)',
        '2 cups Peeled Brown Beans (for Gbegiri yellow bean soup)',
        '2 cups Fresh Jute Leaves (Ewedu)',
        '1 tbsp Kaun (Potash or Baking soda pinch)',
        '1 cup Palm Oil',
        '2 tbsp Ground Crayfish & Iru (Locust Beans)',
        'Fried Goat Meat & Buka Pepper Stew'
      ],
      instructions: [
        'Boil peeled beans with water until mushy. Blend and sieve through mesh into smooth yellow paste. Simmer paste with palm oil, iru, and seasoning for Gbegiri.',
        'Pick Ewedu leaves, boil in small water with kaun pinch until soft. Whisk vigorously with wooden broom or quick pulse blend.',
        'Boil water in pot, gradually whisk in Elubo powder until smooth dark Amala forms. Steam on low heat for 5 mins.',
        'Ladle piping hot Amala into bowl, top with Gbegiri, poured Ewedu, and spoonful of spicy buka stew!'
      ],
      proTip: 'Serve piping hot; the magic of Amala is eating it immediately after turning.'
    }
  },

  // 5. OFADA RICE & AYAMASE
  {
    id: 'dish-ng-5',
    cityId: 'lagos',
    name: 'Ofada Rice with Ayamase (Green Pepper Stew & Boiled Egg)',
    restaurantId: 'rest-ng-5',
    restaurantName: 'Bukka Hut',
    neighborhood: 'Lekki Phase 1',
    price: 6500,
    signatureScore: 9.6,
    dietary: ['halal'],
    mealType: 'Lunch',
    mood: 'buka-spot',
    description: 'Unpolished short-grain fermented local Ofada rice served in green plantain leaves with fiery bleached palm oil green pepper stew, assorted meat chunks, and hardboiled egg.',
    chefNote: 'Palm oil bleached in covered pot until translucent brown for distinctive nutty flavor.',
    image: '/images/ofada_rice_1789406623409.png',
    mapCoords: { x: 72, y: 52 },
    recipe: {
      prepTime: '20 mins',
      cookTime: '50 mins',
      difficulty: 'Intermediate',
      servings: '4 servings',
      ingredients: [
        '3 cups Local Ofada Rice (washed thoroughly)',
        '10 Green Bell Peppers (Green Tatashe)',
        '6 Green Scotch Bonnets (Rodo)',
        '1.5 cups Red Palm Oil (for bleaching)',
        '3 tbsp Locust Beans (Iru woro)',
        '2 cups Chopped Boiled Assorted Meats (Kpomo, Shaki, Beef)',
        '4 Hard-boiled Eggs'
      ],
      instructions: [
        'Coarsely blend green peppers and onions. Boil off excess liquid.',
        'Pour palm oil into pot, cover with tight lid, bleach on medium heat for 10-12 mins until smokey brown. Let cool slightly before opening!',
        'Fry sliced onions and iru in bleached oil until golden.',
        'Add green pepper paste, crayfish, and seasoning. Fry for 20 mins until oil floats.',
        'Stir in boiled meats and hardboiled eggs. Simmer for 10 mins.',
        'Serve hot over steamed Ofada rice lined inside fresh green Uma leaves.'
      ],
      proTip: 'Always let bleached palm oil cool covered before lifting lid to avoid smoke flare-ups.'
    }
  },

  // 6. FISHERMAN SOUP
  {
    id: 'dish-ng-6',
    cityId: 'abuja',
    name: 'Fisherman Soup with Fresh Catfish, Sea Prawns & Periwinkle',
    restaurantId: 'rest-ng-6',
    restaurantName: 'Nkoyo Restaurant',
    neighborhood: 'Maitama',
    price: 13500,
    signatureScore: 9.9,
    dietary: ['pescatarian', 'gluten-free'],
    mealType: 'Dinner',
    mood: 'date-night',
    description: 'Rich Coastal Niger-Delta seafood broth simmered with fresh live catfish chunks, giant tiger prawns, unshelled periwinkles, fresh pepper, and oziza leaves.',
    chefNote: 'Thickened naturally with cocoyam paste for velvet mouthfeel.',
    image: '/images/fisherman_soup_1789406664662.png',
    mapCoords: { x: 38, y: 32 },
    recipe: {
      prepTime: '20 mins',
      cookTime: '30 mins',
      difficulty: 'Master Chef',
      servings: '4 servings',
      ingredients: [
        '1 large Fresh Live Catfish (cleaned with hot water & lemon)',
        '8 Giant Tiger Prawns (deveined)',
        '1 cup Periwinkles in Shells',
        '3 Boiled Cocoyams (pounded into smooth paste)',
        '1/2 cup Palm Oil',
        '3 tbsp Ground Crayfish',
        '2 Fresh Yellow Pepper / Rodo',
        '1 handful Fresh Uziza Leaves (chiffonade)'
      ],
      instructions: [
        'Boil 4 cups water in pot with palm oil, yellow pepper, crayfish, and seasoning.',
        'Add small cocoyam paste balls to thicken the broth gently.',
        'Carefully add catfish steaks, prawns, and periwinkles.',
        'Simmer gently on medium heat for 12-15 minutes without aggressive stirring so catfish stays intact.',
        'Stir in fresh uziza leaves, turn off heat, and let residual steam infuse herbs!'
      ],
      proTip: 'Do not over-stir fresh catfish; shake the pot gently by handles to mix.'
    }
  },

  // 7. BOLI & ROASTED TILAPIA FISH
  {
    id: 'dish-ng-7',
    cityId: 'abuja',
    name: 'Boli (Roasted Plantain) & Charcoal Roasted Tilapia Fish',
    restaurantId: 'rest-ng-7',
    restaurantName: 'Bantu Delicacies & Lounge',
    neighborhood: 'Jabi',
    price: 7500,
    signatureScore: 9.7,
    dietary: ['pescatarian', 'gluten-free'],
    mealType: 'Dinner',
    mood: 'casual-quick',
    description: 'Charcoal roasted ripe plantain fingers paired with whole grilled spiced Tilapia fish, palm oil pepper dip, and roasted peanuts.',
    chefNote: 'Fish marinated in ground scotch bonnet, ginger, garlic, and utazi herbs.',
    image: '/images/boli_fish_1789406721483.png',
    mapCoords: { x: 58, y: 48 },
    recipe: {
      prepTime: '20 mins',
      cookTime: '30 mins',
      difficulty: 'Intermediate',
      servings: '2 servings',
      ingredients: [
        '2 semi-ripe Yellow Plantains (peeled)',
        '1 Whole Tilapia Fish (scored along flanks)',
        '1/3 cup Palm Oil',
        '4 Fresh Scotch Bonnet Peppers (blended)',
        '2 Garlic Cloves & 1 inch Ginger (grated)',
        '1 Red Onion (sliced)',
        '1 tbsp Crayfish Powder'
      ],
      instructions: [
        'Mix blended peppers, garlic, ginger, crayfish, salt, and half palm oil into rub paste.',
        'Coat Tilapia fish thoroughly inside cavity and outside cuts. Roast on medium charcoal wire rack for 25 mins.',
        'Place peeled plantains directly on grill wire. Turn every 4 mins until roasted golden yellow with dark blister spots.',
        'Warm remaining palm oil with chopped onions and pepper sauce for dipping.'
      ],
      proTip: 'Semi-ripe yellow plantains give the ideal balance of natural sweetness and firm texture.'
    }
  },

  // 8. NKWOBI IN WOODEN MORTAR BOWL
  {
    id: 'dish-ng-8',
    cityId: 'abuja',
    name: 'Nkwobi (Spicy Cow Foot Delicacy in Wooden Mortar Bowl)',
    restaurantId: 'rest-ng-8',
    restaurantName: 'Jovinik Bukka',
    neighborhood: 'Wuse II',
    price: 8000,
    signatureScore: 9.6,
    dietary: ['halal', 'gluten-free'],
    mealType: 'Late-Night',
    mood: 'group-feast',
    description: 'Tender cow foot cooked in thick golden potash-emulsified palm oil sauce, garnished with Utazi leaf chiffonade and raw onion rings.',
    chefNote: 'Palm oil emulsified with Akanwu (potash liquid) into rich golden cream.',
    image: '/images/nkwobi_mortar_1789406779375.png',
    mapCoords: { x: 45, y: 22 },
    recipe: {
      prepTime: '15 mins',
      cookTime: '60 mins',
      difficulty: 'Intermediate',
      servings: '4 servings',
      ingredients: [
        '1 kg Cow Foot (chopped into small bite-size cubes)',
        '1/2 cup Red Palm Oil',
        '1 tsp Edible Potash Liquid (Akanwu or Ngu)',
        '2 tbsp Ground Ehuru (African Nutmeg)',
        '2 tbsp Crayfish Powder',
        '2 Yellow Scotch Bonnet Peppers',
        'Fresh Utazi Leaves (sliced thin)',
        '1 Red Onion (sliced into rings for garnish)'
      ],
      instructions: [
        'Pressure cook cow foot with onions and seasoning cubes until soft and gelatinous.',
        'In a bowl, pour palm oil. Slowly add clear potash liquid while stirring until oil turns thick yellow paste.',
        'Stir in ground Ehuru, crayfish, blended yellow pepper, and cooked cow foot pieces.',
        'Mix thoroughly until meat is thoroughly coated in yellow cream sauce.',
        'Serve in traditional carved wooden bowl (Akwa), topped with Utazi slices and onion rings.'
      ],
      proTip: 'Ehuru (calabash nutmeg) roasted over flame before grinding gives Nkwobi its unmistakable aroma.'
    }
  },

  // 9. EWA AGANYIN WITH AGEGE BREAD
  {
    id: 'dish-ng-9',
    cityId: 'lagos',
    name: 'Ewa Aganyin with Spicy Dark Pepper Sauce & Agege Bread',
    restaurantId: 'rest-ng-5',
    restaurantName: 'Bukka Hut',
    neighborhood: 'Yaba',
    price: 3500,
    signatureScore: 9.5,
    dietary: ['vegetarian', 'halal'],
    mealType: 'Breakfast & Lunch',
    mood: 'casual-quick',
    description: 'Soft mashed honey beans (Ewa Oloyin) smothered in iconic dark fried palm oil pepper sauce made with caramelized onions and dry chili peppers, served with warm Agege bread.',
    chefNote: 'Onions caramelized in palm oil until deep mahogany brown for authentic Aganyin flavor.',
    image: '/images/ewa_aganyin_bread_1789406842679.png',
    mapCoords: { x: 48, y: 42 },
    recipe: {
      prepTime: '15 mins',
      cookTime: '55 mins',
      difficulty: 'Easy',
      servings: '4 servings',
      ingredients: [
        '3 cups Honey Beans (Ewa Oloyin)',
        '1.5 cups Red Palm Oil',
        '3 large Red Onions (sliced thinly)',
        '1/2 cup Dried Shombo / Chili Peppers (soaked and blended coarse)',
        '2 tbsp Crayfish Powder',
        '1 Loaf Fresh Soft Agege Bread'
      ],
      instructions: [
        'Pressure cook beans with salt until ultra-soft and mashable. Mash lightly with wooden spoon.',
        'Heat palm oil in pot. Add sliced onions and fry on medium-low for 20 mins until dark brown (almost blackened).',
        'Add coarse dried pepper paste and crayfish. Fry continuously on low heat until oil turns dark brown and separates.',
        'Ladle piping hot mashed beans into plate, top with dark Aganyin sauce, and enjoy with thick slices of Agege bread.'
      ],
      proTip: 'Caramelizing the onions slowly until deep brown is the absolute secret to authentic Aganyin taste.'
    }
  },

  // 10. CATFISH PEPPER SOUP
  {
    id: 'dish-ng-10',
    cityId: 'lagos',
    name: 'Catfish Pepper Soup (Point & Kill) with Fresh Scent Leaves',
    restaurantId: 'rest-ng-3',
    restaurantName: 'University of Suya',
    neighborhood: 'Ikeja',
    price: 8500,
    signatureScore: 9.7,
    dietary: ['pescatarian', 'gluten-free', 'halal'],
    mealType: 'Late-Night',
    mood: 'late-night',
    description: 'Steaming fresh catfish steaks cooked in traditional spicy herbal clear broth infused with Uda pods, Utazi, fresh scent leaves (Efirin), and yellow scotch bonnets.',
    chefNote: 'Cooked fresh on order from live aquarium tanks.',
    image: '/images/catfish_peppersoup_1789406922178.png',
    mapCoords: { x: 32, y: 28 },
    recipe: {
      prepTime: '15 mins',
      cookTime: '20 mins',
      difficulty: 'Easy',
      servings: '2 servings',
      ingredients: [
        '1 Medium Fresh Live Catfish (sliced into steaks, washed with lime)',
        '2 tbsp Pepper Soup Spice Blend (Uda, Gbafilo, Umilo, Ehuru)',
        '3 Yellow Scotch Bonnet Peppers (chopped)',
        '1 handful Fresh Scent Leaves (Efirin / African Basil)',
        '1 medium Red Onion (chopped)',
        '2 tbsp Ground Crayfish'
      ],
      instructions: [
        'Place catfish steaks in pot. Add 4 cups water, onions, pepper soup spice blend, crayfish, and chopped peppers.',
        'Bring to boil on medium heat for 12-15 minutes until fish turns opaque white.',
        'Toss in fresh scent leaves, adjust salt, simmer for 2 minutes and serve hot in a black clay bowl.'
      ],
      proTip: 'Washing catfish with hot water or fresh lime removes all slipperiness before cooking.'
    }
  }
];

export const MOCK_RESTAURANTS = [
  {
    id: 'rest-ng-1',
    cityId: 'lagos',
    name: 'Terra Kulture Restaurant',
    cuisine: 'Authentic Nigerian Fine Dining',
    neighborhood: 'Victoria Island',
    priceRange: '$$$',
    rating: 4.9,
    address: '137B Tiamiyu Savage St, Victoria Island, Lagos',
    signatureDish: 'Smokey Party Jollof Rice with Fried Plantain & Goat Meat',
    hours: '10:00 AM – 10:00 PM Daily',
    vibe: 'Cultural arts hub with bamboo wooden ceiling, original Nigerian paintings, high-end traditional cuisine, and live theater.',
    dietaryOptions: ['Halal Certified', 'Vegetarian Friendly'],
    image: '/images/jollof_rice_dodo_1789406504058.png',
    mapCoords: { x: 42, y: 58 },
    travelInfo: {
      distanceKm: '8.4 km',
      travelTimeMinutes: 22,
      primaryRoute: 'via Ozumba Mbadiwe Ave & Ahmadu Bello Way',
      uberFare: '₦3,800 - ₦4,500',
      brtOption: 'Take VI Direct Bus from CMS Terminal'
    }
  },
  {
    id: 'rest-ng-2',
    cityId: 'lagos',
    name: 'Yellow Chilli',
    cuisine: 'Modern Pan-Nigerian Cuisine',
    neighborhood: 'Ikoyi',
    priceRange: '$$$',
    rating: 4.8,
    address: '27 Oju Olobun Cl, Victoria Island / Ikoyi, Lagos',
    signatureDish: 'Pounded Yam with Authentic Egusi Soup & Stockfish',
    hours: '12:00 PM – 11:00 PM Daily',
    vibe: 'Sophisticated contemporary Nigerian restaurant featuring gourmet seafood okro, egusi, and fine cocktails.',
    dietaryOptions: ['Gluten-Free Options', 'Halal Meat'],
    image: '/images/egusi_pounded_yam_1789406535718.png',
    mapCoords: { x: 55, y: 48 },
    travelInfo: {
      distanceKm: '6.2 km',
      travelTimeMinutes: 18,
      primaryRoute: 'via Alfred Rewane Rd & Kingsway',
      uberFare: '₦3,000 - ₦3,800',
      brtOption: 'Ikoyi Link Bridge Shuttle'
    }
  },
  {
    id: 'rest-ng-3',
    cityId: 'lagos',
    name: 'University of Suya',
    cuisine: 'Northern Suya Spot & Grill',
    neighborhood: 'Ikeja',
    priceRange: '$',
    rating: 4.9,
    address: 'Allen Avenue, Ikeja, Lagos',
    signatureDish: 'Spicy Beef Suya with Yaji Pepper & Sliced Onions',
    hours: '4:00 PM – 2:00 AM Daily',
    vibe: 'Legendary late-night Suya spot with glowing charcoal grills, paper wrapped beef, chicken suya, and Masa cakes.',
    dietaryOptions: ['100% Halal Beef'],
    image: '/images/beef_suya_1789406566456.png',
    mapCoords: { x: 30, y: 25 },
    travelInfo: {
      distanceKm: '14.5 km',
      travelTimeMinutes: 35,
      primaryRoute: 'via Mobolaji Bank Anthony Way',
      uberFare: '₦4,500 - ₦5,800',
      brtOption: 'Ikeja Bus Terminal Route 2'
    }
  },
  {
    id: 'rest-ng-4',
    cityId: 'lagos',
    name: 'Amala Shitta',
    cuisine: 'Heritage Amala Joint',
    neighborhood: 'Surulere',
    priceRange: '$',
    rating: 4.8,
    address: 'Shitta Roundabout, Surulere, Lagos',
    signatureDish: 'Amala, Ewedu & Gbegiri (Lapo-Lapo Combo)',
    hours: '8:00 AM – 8:00 PM Mon-Sat',
    vibe: 'Historic Lagos Buka loved by locals, celebrities, and food enthusiasts for smooth Amala and spicy Ogunfe goat meat.',
    dietaryOptions: ['Traditional Halal'],
    image: '/images/amala_ewedu_1789406591510.png',
    mapCoords: { x: 38, y: 68 },
    travelInfo: {
      distanceKm: '11.0 km',
      travelTimeMinutes: 28,
      primaryRoute: 'via Western Ave & Funsho Williams Ave',
      uberFare: '₦3,200 - ₦4,000',
      brtOption: 'Surulere Local Bus'
    }
  },
  {
    id: 'rest-ng-5',
    cityId: 'lagos',
    name: 'Bukka Hut',
    cuisine: 'Contemporary Nigerian Buka',
    neighborhood: 'Lekki Phase 1',
    priceRange: '$$',
    rating: 4.7,
    address: '69 Admiralty Way, Lekki Phase 1, Lagos',
    signatureDish: 'Ofada Rice with Ayamase Green Pepper Stew',
    hours: '9:00 AM – 10:00 PM Daily',
    vibe: 'Clean, air-conditioned modern Buka serving home-style Ofada, Ewa Aganyin, and pounded yam with swift service.',
    dietaryOptions: ['Halal', 'Pescatarian'],
    image: '/images/ofada_rice_1789406623409.png',
    mapCoords: { x: 72, y: 52 },
    travelInfo: {
      distanceKm: '4.8 km',
      travelTimeMinutes: 14,
      primaryRoute: 'via Admiralty Way Lekki',
      uberFare: '₦2,500 - ₦3,200',
      brtOption: 'Lekki Shuttle Bus'
    }
  },
  {
    id: 'rest-ng-6',
    cityId: 'abuja',
    name: 'Nkoyo Restaurant',
    cuisine: 'Fine Nigerian & Seafood',
    neighborhood: 'Maitama',
    priceRange: '$$$$',
    rating: 4.9,
    address: '1 Landbridge Ave, Bathex Plaza, Maitama, Abuja',
    signatureDish: 'Fisherman Soup with Fresh Catfish & Sea Prawns',
    hours: '11:30 AM – 10:30 PM Daily',
    vibe: 'Elegantly lit restaurant with carved dark mahogany wood, warm African brass motifs, and flawless traditional service.',
    dietaryOptions: ['Halal', 'Pescatarian', 'Gluten-Free'],
    image: '/images/fisherman_soup_1789406664662.png',
    mapCoords: { x: 38, y: 32 },
    travelInfo: {
      distanceKm: '7.1 km',
      travelTimeMinutes: 15,
      primaryRoute: 'via Shehu Shagari Way & Transcorp Hilton Drive',
      uberFare: '₦2,800 - ₦3,500',
      brtOption: 'Maitama Express Shuttle'
    }
  }
];

export const EDITORIAL_GUIDES = [
  {
    id: 'guide-ng-1',
    cityId: 'lagos',
    title: 'The Legendary Amala & Buka Spots of Lagos',
    subtitle: 'From Surulere Shitta to Victoria Island: where to find silky dark Amala, piping hot Ewedu, and tender Ogunfe goat meat.',
    curator: 'Tunde Bakare, Lagos Food Critic',
    dishCount: 6,
    readTime: '4 min read',
    coverImage: '/images/amala_ewedu_1789406591510.png',
    featuredDishIds: ['dish-ng-4', 'dish-ng-5']
  },
  {
    id: 'guide-ng-2',
    cityId: 'lagos',
    title: 'Mastering the Art of Smokey Party Jollof Rice',
    subtitle: 'Secrets of firewood smoke, tatashe pepper reduction, and perfect parboiled long-grain rice.',
    curator: 'Chef Yemisi Lawson',
    dishCount: 4,
    readTime: '5 min read',
    coverImage: '/images/jollof_rice_dodo_1789406504058.png',
    featuredDishIds: ['dish-ng-1', 'dish-ng-3']
  },
  {
    id: 'guide-ng-3',
    cityId: 'abuja',
    title: 'Abuja Seafood & Niger-Delta Delicacies Guide',
    subtitle: 'Fresh live catfish fisherman soups, pounded yam egusi, and charcoal roasted Boli fish spots in Maitama & Jabi.',
    curator: 'Amina Bello, Abuja Taste Journal',
    dishCount: 5,
    readTime: '4 min read',
    coverImage: '/images/fisherman_soup_1789406664662.png',
    featuredDishIds: ['dish-ng-6', 'dish-ng-7', 'dish-ng-8']
  }
];
