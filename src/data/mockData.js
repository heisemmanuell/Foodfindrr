// FoodFindrr - Comprehensive Authentic Nigerian Food, Restaurant & Recipe Dataset

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
  { id: 'all', label: 'All Categories' },
  { id: 'rice-grains', label: 'Rice & Grains' },
  { id: 'swallow-soups', label: 'Swallow & Soups' },
  { id: 'pepper-soups', label: 'Pepper Soups & Grills' },
  { id: 'snacks-street', label: 'Snacks & Street Food' },
  { id: 'drinks-beverages', label: 'Drinks & Beverages' }
];

export const MOCK_DISHES = [
  // 1. SMOKEY PARTY JOLLOF RICE
  {
    id: 'dish-ng-1',
    cityId: 'lagos',
    category: 'rice-grains',
    name: 'Smokey Party Jollof Rice with Fried Plantain & Goat Meat',
    restaurantId: 'rest-ng-1',
    restaurantName: 'Terra Kulture Restaurant',
    neighborhood: 'Victoria Island',
    price: 7500,
    signatureScore: 9.9,
    dietary: ['rice-grains', 'halal'],
    mealType: 'Lunch & Dinner',
    mood: 'date-night',
    description: 'Aromatic long-grain parboiled rice cooked in rich rodo-tatashe pepper reduction, wood-smoke seasoned, served with golden dodo and tender fried goat meat.',
    chefNote: 'Infused with natural firewood smoke aroma using authentic cast-iron pots.',
    image: '/images/jollof_rice_dodo_1789406504058.png',
    mapCoords: { x: 42, y: 58 },
    recipe: {
      prepTime: '25 mins', cookTime: '45 mins', difficulty: 'Intermediate', servings: '6 servings',
      ingredients: [
        '4 cups Long Grain Parboiled Rice', '8 Red Bell Peppers (Tatashe)', '5 Scotch Bonnet Peppers (Rodo)',
        '2 large Red Onions', '1 cup Palm Oil / Vegetable Oil', '3 tbsp Tomato Paste', '2 cups Beef/Goat Meat Stock',
        '1 tbsp Thyme & Curry', '3 Bay Leaves & Seasoning', '1 kg Soft Goat Meat', '3 Ripe Plantains'
      ],
      instructions: [
        'Blend peppers and onions, boil off excess water.', 'Fry sliced onions and tomato paste in oil for 5 mins.',
        'Add blended pepper reduction and fry for 15 mins until oil rises.', 'Pour in rich goat broth, thyme, curry, and bay leaves.',
        'Add washed rice, cover with foil and seal pot lid.', 'Cook low heat 30 mins, then turn heat high 5 mins to trap firewood smoke aroma.'
      ],
      proTip: 'Sealing the pot with foil paper traps steam and guarantees perfect non-soggy party Jollof rice.'
    }
  },

  // 2. NIGERIAN FRIED RICE
  {
    id: 'dish-ng-2',
    cityId: 'lagos',
    category: 'rice-grains',
    name: 'Special Nigerian Fried Rice with Fried Chicken & Dodo',
    restaurantId: 'rest-ng-2',
    restaurantName: 'Yellow Chilli',
    neighborhood: 'Ikoyi',
    price: 8000,
    signatureScore: 9.8,
    dietary: ['rice-grains', 'halal'],
    mealType: 'Lunch',
    mood: 'date-night',
    description: 'Savory turmeric rice stir-fried with diced carrots, sweet peas, liver chunks, sweet corn, and green peppers, paired with crispy seasoned chicken leg.',
    chefNote: 'Stir-fried in small batches on high heat wok for crisp fresh vegetable bite.',
    image: '/images/fried_rice_1789414447905.png',
    mapCoords: { x: 55, y: 48 },
    recipe: {
      prepTime: '20 mins', cookTime: '30 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: [
        '3 cups Long Grain Parboiled Rice', '2 cups Rich Chicken Stock', '1 tbsp Curry Powder & Turmeric',
        '1 cup Diced Carrots & Sweet Peas', '1/2 cup Sweet Corn', '200g Boiled Liver (diced)', '4 Seasoned Chicken Legs'
      ],
      instructions: [
        'Parboil rice in rich seasoned chicken stock with curry and turmeric until 80% soft.',
        'Heat vegetable oil in wok or wide pan.', 'Stir fry liver and chopped vegetables for 3 mins.',
        'Add cooked rice in small batches, tossing continuously for 5 mins until fragrant.', 'Serve hot with deep-fried golden chicken leg and dodo.'
      ],
      proTip: 'Cool boiled rice completely before stir-frying to prevent grains from sticking together.'
    }
  },

  // 3. POUNDED YAM & EGUSI SOUP
  {
    id: 'dish-ng-3',
    cityId: 'lagos',
    category: 'swallow-soups',
    name: 'Pounded Yam with Authentic Egusi Soup & Stockfish',
    restaurantId: 'rest-ng-2',
    restaurantName: 'Yellow Chilli',
    neighborhood: 'Ikoyi',
    price: 9500,
    signatureScore: 9.8,
    dietary: ['swallow-soups', 'halal'],
    mealType: 'Dinner',
    mood: 'group-feast',
    description: 'Silky smooth hand-pounded white yam paired with rich melon seed soup braised with dried stockfish head, bitter leaf, crayfish, and assorted meats.',
    chefNote: 'Ground melon seeds pan-roasted before simmer for deep nutty richness.',
    image: '/images/egusi_pounded_yam_1789406535718.png',
    mapCoords: { x: 50, y: 50 },
    recipe: {
      prepTime: '30 mins', cookTime: '50 mins', difficulty: 'Master Chef', servings: '4 servings',
      ingredients: [
        '3 cups Ground Melon Seeds (Egusi)', '1 medium Tuber White Yam', '1 cup Bleached Palm Oil',
        '2 cups Ground Crayfish', '1 Stockfish Head', 'Fresh Ugu leaves', '2 tbsp Locust Beans (Iru)'
      ],
      instructions: [
        'Boil assorted meats and stockfish until tender.', 'Mix ground egusi with warm water to form paste balls.',
        'Fry egusi paste balls in hot palm oil with iru for 8 mins undisturbed.', 'Add broth, crayfish, and peppers; simmer 20 mins.',
        'Stir in fresh ugu leaves.', 'Pound boiled yam until smooth and stretchy.'
      ],
      proTip: 'Frying egusi paste undisturbed creates delicious chunky morsels in the soup.'
    }
  },

  // 4. EFO RIRO & POUNDED YAM
  {
    id: 'dish-ng-4',
    cityId: 'lagos',
    category: 'swallow-soups',
    name: 'Efo Riro (Yoruba Spinach Stew) with Assorted Meats',
    restaurantId: 'rest-ng-4',
    restaurantName: 'Amala Shitta',
    neighborhood: 'Surulere',
    price: 7000,
    signatureScore: 9.7,
    dietary: ['swallow-soups', 'halal'],
    mealType: 'Lunch & Dinner',
    mood: 'buka-spot',
    description: 'Vibrant Nigerian spinach stew cooked in palm oil, locust beans (iru), smoked shawa fish, dried crayfish, ponmo, and tender beef chunks.',
    chefNote: 'Blanched spinach squeezed dry before adding to stew to preserve crisp texture.',
    image: '/images/efo_riro_1789414560759.png',
    mapCoords: { x: 38, y: 68 },
    recipe: {
      prepTime: '20 mins', cookTime: '35 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: [
        '2 bunches Fresh Spinach / Shoko / Tete', '1 cup Palm Oil', '2 tbsp Locust Beans (Iru)',
        '6 Coarsely Blended Tatashe & Rodo Peppers', '2 cups Ground Crayfish', 'Assorted Meat & Ponmo'
      ],
      instructions: [
        'Blanch spinach in hot water for 2 mins, shock in cold water and squeeze dry.',
        'Fry sliced onions and iru in palm oil for 5 mins.', 'Add pepper reduction and fry 15 mins until oil floats.',
        'Stir in meats, stockfish, crayfish, then fold in spinach for final 3 minutes.'
      ],
      proTip: 'Never overcook Efo Riro after adding vegetables to keep green color and vitamins intact.'
    }
  },

  // 5. AMALA, EWEDU & GBEGIRI
  {
    id: 'dish-ng-5',
    cityId: 'lagos',
    category: 'swallow-soups',
    name: 'Amala, Ewedu & Gbegiri (Lapo-Lapo Combo with Goat Meat)',
    restaurantId: 'rest-ng-4',
    restaurantName: 'Amala Shitta',
    neighborhood: 'Surulere',
    price: 5000,
    signatureScore: 9.8,
    dietary: ['swallow-soups', 'halal'],
    mealType: 'Lunch',
    mood: 'buka-spot',
    description: 'Fluffy dark yam flour (Amala isu), vibrant slimy Ewedu jute leaf, silky yellow Gbegiri bean soup, and hot spicy buka stew with soft goat meat.',
    chefNote: 'Ewedu whisked traditionally with Ijabe wooden broom for light airy texture.',
    image: '/images/amala_ewedu_1789406591510.png',
    mapCoords: { x: 38, y: 68 },
    recipe: {
      prepTime: '25 mins', cookTime: '40 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: [
        '2 cups Dark Yam Flour (Elubo Amala)', '2 cups Peeled Brown Beans (for Gbegiri)', '2 cups Fresh Jute Leaves (Ewedu)',
        '1 cup Palm Oil', '2 tbsp Crayfish & Iru', 'Fried Goat Meat & Buka Pepper Stew'
      ],
      instructions: [
        'Boil peeled beans until mushy, blend & sieve for yellow Gbegiri.', 'Whisk boiled Ewedu leaves with broom.',
        'Whisk Elubo powder into boiling water for dark smooth Amala.', 'Serve hot with Gbegiri, Ewedu, and buka stew.'
      ],
      proTip: 'Serve piping hot; Amala is best enjoyed immediately after turning.'
    }
  },

  // 6. OFADA RICE & AYAMASE
  {
    id: 'dish-ng-6',
    cityId: 'lagos',
    category: 'rice-grains',
    name: 'Ofada Rice with Ayamase (Green Pepper Stew & Boiled Egg)',
    restaurantId: 'rest-ng-5',
    restaurantName: 'Bukka Hut',
    neighborhood: 'Lekki Phase 1',
    price: 6500,
    signatureScore: 9.6,
    dietary: ['rice-grains', 'halal'],
    mealType: 'Lunch',
    mood: 'buka-spot',
    description: 'Unpolished short-grain fermented local Ofada rice served in green plantain leaves with fiery bleached palm oil green pepper stew, assorted meat chunks, and hardboiled egg.',
    chefNote: 'Palm oil bleached in covered pot until translucent brown for distinctive nutty flavor.',
    image: '/images/ofada_rice_1789406623409.png',
    mapCoords: { x: 72, y: 52 },
    recipe: {
      prepTime: '20 mins', cookTime: '50 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: [
        '3 cups Local Ofada Rice', '10 Green Tatashe Peppers', '6 Green Rodo Peppers', '1.5 cups Red Palm Oil',
        '3 tbsp Iru', 'Assorted Meats & Hard-boiled Eggs'
      ],
      instructions: [
        'Bleach palm oil covered for 10 mins until clear brown.', 'Fry onions and iru in oil.',
        'Add green pepper paste and fry 20 mins until oil floats.', 'Fold in boiled meats and hard-boiled eggs.'
      ],
      proTip: 'Always let bleached palm oil cool covered before opening to avoid smoke.'
    }
  },

  // 7. FISHERMAN SOUP
  {
    id: 'dish-ng-7',
    cityId: 'abuja',
    category: 'swallow-soups',
    name: 'Fisherman Soup with Fresh Catfish, Sea Prawns & Periwinkle',
    restaurantId: 'rest-ng-6',
    restaurantName: 'Nkoyo Restaurant',
    neighborhood: 'Maitama',
    price: 13500,
    signatureScore: 9.9,
    dietary: ['swallow-soups', 'pescatarian'],
    mealType: 'Dinner',
    mood: 'date-night',
    description: 'Rich Coastal Niger-Delta seafood broth simmered with fresh live catfish chunks, giant tiger prawns, unshelled periwinkles, fresh pepper, and oziza leaves.',
    chefNote: 'Thickened naturally with cocoyam paste for velvet mouthfeel.',
    image: '/images/fisherman_soup_1789406664662.png',
    mapCoords: { x: 38, y: 32 },
    recipe: {
      prepTime: '20 mins', cookTime: '30 mins', difficulty: 'Master Chef', servings: '4 servings',
      ingredients: [
        '1 Fresh Live Catfish', '8 Tiger Prawns', '1 cup Periwinkles', '3 Boiled Cocoyams (pounded paste)',
        '1/2 cup Palm Oil', '3 tbsp Crayfish', 'Uziza Leaves'
      ],
      instructions: [
        'Boil water with palm oil, pepper, crayfish, and cocoyam paste balls.',
        'Add fresh catfish, prawns, and periwinkles gently.', 'Simmer low heat 15 mins without stirring aggressively.',
        'Stir in fresh uziza leaves.'
      ],
      proTip: 'Shake the pot gently by handles rather than stirring catfish to keep steaks intact.'
    }
  },

  // 8. BOLI & ROASTED TILAPIA FISH
  {
    id: 'dish-ng-8',
    cityId: 'abuja',
    category: 'pepper-soups',
    name: 'Boli (Roasted Plantain) & Charcoal Roasted Tilapia Fish',
    restaurantId: 'rest-ng-7',
    restaurantName: 'Bantu Delicacies & Lounge',
    neighborhood: 'Jabi',
    price: 7500,
    signatureScore: 9.7,
    dietary: ['pepper-soups', 'pescatarian'],
    mealType: 'Dinner',
    mood: 'casual-quick',
    description: 'Charcoal roasted ripe plantain fingers paired with whole grilled spiced Tilapia fish, palm oil pepper dip, and roasted peanuts.',
    chefNote: 'Fish marinated in ground scotch bonnet, ginger, garlic, and utazi herbs.',
    image: '/images/boli_fish_1789406721483.png',
    mapCoords: { x: 58, y: 48 },
    recipe: {
      prepTime: '20 mins', cookTime: '30 mins', difficulty: 'Intermediate', servings: '2 servings',
      ingredients: ['2 Yellow Plantains', '1 Tilapia Fish', '1/3 cup Palm Oil', '4 Scotch Bonnets', 'Ginger & Garlic'],
      instructions: [
        'Marinate fish in spiced rub, roast on charcoal wire rack 25 mins.',
        'Roast peeled plantains directly on grill wire until golden with blister spots.',
        'Serve with spicy palm oil onion dipping sauce.'
      ],
      proTip: 'Semi-ripe yellow plantains give the ideal sweetness and firm grill texture.'
    }
  },

  // 9. NKWOBI IN WOODEN MORTAR
  {
    id: 'dish-ng-9',
    cityId: 'abuja',
    category: 'pepper-soups',
    name: 'Nkwobi (Spicy Cow Foot Delicacy in Wooden Mortar Bowl)',
    restaurantId: 'rest-ng-8',
    restaurantName: 'Jovinik Bukka',
    neighborhood: 'Wuse II',
    price: 8000,
    signatureScore: 9.6,
    dietary: ['pepper-soups', 'halal'],
    mealType: 'Late-Night',
    mood: 'group-feast',
    description: 'Tender cow foot cooked in thick golden potash-emulsified palm oil sauce, garnished with Utazi leaf chiffonade and raw onion rings.',
    chefNote: 'Palm oil emulsified with Akanwu (potash liquid) into rich golden cream.',
    image: '/images/nkwobi_mortar_1789406779375.png',
    mapCoords: { x: 45, y: 22 },
    recipe: {
      prepTime: '15 mins', cookTime: '60 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: ['1 kg Cow Foot', '1/2 cup Palm Oil', '1 tsp Potash Liquid (Akanwu)', '2 tbsp Ground Ehuru', 'Utazi Leaves & Red Onion'],
      instructions: [
        'Pressure cook cow foot until tender.', 'Stir clear potash liquid into palm oil until yellow cream paste forms.',
        'Mix in ehuru nutmeg, pepper, crayfish, and tender cow foot.', 'Serve in carved wooden mortar bowl with utazi.'
      ],
      proTip: 'Flame-roasting Ehuru nutmeg before grinding unleashes its full aromatic oil.'
    }
  },

  // 10. SPICY BEEF SUYA
  {
    id: 'dish-ng-10',
    cityId: 'lagos',
    category: 'pepper-soups',
    name: 'Spicy Beef Suya with Yaji Pepper & Sliced Onions',
    restaurantId: 'rest-ng-3',
    restaurantName: 'University of Suya',
    neighborhood: 'Ikeja',
    price: 4500,
    signatureScore: 9.7,
    dietary: ['pepper-soups', 'halal'],
    mealType: 'Late-Night',
    mood: 'late-night',
    description: 'Thinly sliced tender beef skewered over open charcoal grill, heavily coated in authentic Northern Yaji spice (kuli-kuli, ginger, chili, garlic).',
    chefNote: 'Grilled over hardwood embers for crisp caramelized spice crust.',
    image: '/images/beef_suya_1789406566456.png',
    mapCoords: { x: 30, y: 25 },
    recipe: {
      prepTime: '20 mins', cookTime: '15 mins', difficulty: 'Easy', servings: '4 servings',
      ingredients: ['700g Beef Tenderloin (thin strips)', '1 cup Yaji Spice Blend (Kuli-kuli, ginger, chili)', 'Peanut Oil', 'Red Onions'],
      instructions: [
        'Thread beef strips onto wooden skewers.', 'Coat with oil and press heavily into Yaji spice blend.',
        'Grill over high heat 6-8 mins per side.', 'Serve in foil with sliced onions and extra Yaji powder.'
      ],
      proTip: 'Slice beef against the grain while semi-frozen for paper-thin tender strips.'
    }
  },

  // 11. PEPPERED SNAIL
  {
    id: 'dish-ng-11',
    cityId: 'lagos',
    category: 'pepper-soups',
    name: 'Spicy Peppered Snails (Giant African Land Snail)',
    restaurantId: 'rest-ng-1',
    restaurantName: 'Terra Kulture Restaurant',
    neighborhood: 'Victoria Island',
    price: 11000,
    signatureScore: 9.8,
    dietary: ['pepper-soups', 'halal'],
    mealType: 'Late-Night',
    mood: 'date-night',
    description: 'Crunchy jumbo African land snails sauteed in fiery coarse red rodo-tatashe pepper sauce, onions, and aromatic herbs.',
    chefNote: 'Washed thoroughly with alum and lemon juice to remove all slime.',
    image: '/images/peppered_snail_1789425119819.png',
    mapCoords: { x: 42, y: 58 },
    recipe: {
      prepTime: '30 mins', cookTime: '25 mins', difficulty: 'Intermediate', servings: '3 servings',
      ingredients: ['6 Jumbo Giant Snails', '5 Scotch Bonnets', '4 Red Bell Peppers', '1 cup Vegetable Oil', '1 Red Onion'],
      instructions: [
        'Clean snails with lime/alum, boil with seasoning for 15 mins.',
        'Coarsely blend peppers and onions.', 'Fry pepper sauce in oil for 15 mins.',
        'Toss boiled snails into hot pepper sauce for 8 mins until coated and glossy.'
      ],
      proTip: 'Boiling snails with onions and garlic before stir-frying infuses savory depth.'
    }
  },

  // 12. STEAMED MOI MOI
  {
    id: 'dish-ng-12',
    cityId: 'lagos',
    category: 'snacks-street',
    name: 'Steamed Leaf Moi Moi (Bean Pudding with Boiled Egg & Fish)',
    restaurantId: 'rest-ng-5',
    restaurantName: 'Bukka Hut',
    neighborhood: 'Lekki Phase 1',
    price: 2500,
    signatureScore: 9.6,
    dietary: ['snacks-street', 'halal'],
    mealType: 'Breakfast & Lunch',
    mood: 'casual-quick',
    description: 'Velvety steamed brown bean pudding seasoned with crayfish, peppers, and palm oil, wrapped inside Ewe Eran leaves with quartered hardboiled egg and mackerel flakes.',
    chefNote: 'Wrapped in native green leaves for authentic earthen aroma.',
    image: '/images/moi_moi_1789425190764.png',
    mapCoords: { x: 72, y: 52 },
    recipe: {
      prepTime: '30 mins', cookTime: '45 mins', difficulty: 'Intermediate', servings: '4 servings',
      ingredients: ['3 cups Peeled Brown Beans', '3 Red Bell Peppers', '1/2 cup Vegetable/Palm Oil', 'Crayfish', 'Hard-boiled Eggs', 'Smoked Fish'],
      instructions: [
        'Blend peeled beans with peppers and onions into smooth batter.',
        'Whisk in oil, warm water, crayfish, and seasoning until fluffy.',
        'Pour into washed green leaves or foil ramekins, add boiled egg slice and fish flakes.',
        'Steam in covered pot over medium heat for 45 mins.'
      ],
      proTip: 'Whisking air into the bean batter before wrapping ensures a light soufflé-like texture.'
    }
  },

  // 13. EWA AGANYIN & AGEGE BREAD
  {
    id: 'dish-ng-13',
    cityId: 'lagos',
    category: 'beans-yam',
    name: 'Ewa Aganyin with Spicy Dark Pepper Sauce & Agege Bread',
    restaurantId: 'rest-ng-5',
    restaurantName: 'Bukka Hut',
    neighborhood: 'Yaba',
    price: 3500,
    signatureScore: 9.5,
    dietary: ['beans-yam', 'vegetarian'],
    mealType: 'Breakfast & Lunch',
    mood: 'casual-quick',
    description: 'Soft mashed honey beans (Ewa Oloyin) smothered in iconic dark fried palm oil pepper sauce made with caramelized onions and dry chili peppers, served with warm Agege bread.',
    chefNote: 'Onions caramelized in palm oil until deep mahogany brown for authentic Aganyin flavor.',
    image: '/images/ewa_aganyin_bread_1789406842679.png',
    mapCoords: { x: 48, y: 42 },
    recipe: {
      prepTime: '15 mins', cookTime: '55 mins', difficulty: 'Easy', servings: '4 servings',
      ingredients: ['3 cups Honey Beans', '1.5 cups Palm Oil', '3 Red Onions', '1/2 cup Dried Chili Peppers', 'Agege Bread'],
      instructions: [
        'Pressure cook beans until ultra-soft and mash lightly.',
        'Fry sliced onions in palm oil for 20 mins until dark brown.',
        'Add coarse pepper paste and crayfish, fry low heat until oil turns dark brown.',
        'Ladle over hot beans and serve with Agege bread.'
      ],
      proTip: 'Slow caramelizing onions until deep brown is the secret to authentic Aganyin taste.'
    }
  },

  // 14. CATFISH PEPPER SOUP
  {
    id: 'dish-ng-14',
    cityId: 'lagos',
    category: 'pepper-soups',
    name: 'Catfish Pepper Soup (Point & Kill) with Fresh Scent Leaves',
    restaurantId: 'rest-ng-3',
    restaurantName: 'University of Suya',
    neighborhood: 'Ikeja',
    price: 8500,
    signatureScore: 9.7,
    dietary: ['pepper-soups', 'pescatarian'],
    mealType: 'Late-Night',
    mood: 'late-night',
    description: 'Steaming fresh catfish steaks cooked in traditional spicy herbal clear broth infused with Uda pods, Utazi, fresh scent leaves (Efirin), and yellow scotch bonnets.',
    chefNote: 'Cooked fresh on order from live aquarium tanks.',
    image: '/images/catfish_peppersoup_1789406922178.png',
    mapCoords: { x: 32, y: 28 },
    recipe: {
      prepTime: '15 mins', cookTime: '20 mins', difficulty: 'Easy', servings: '2 servings',
      ingredients: ['1 Fresh Catfish', '2 tbsp Pepper Soup Spice', '3 Yellow Bonnets', 'Scent Leaves (Efirin)', 'Crayfish'],
      instructions: [
        'Place catfish steaks in pot with water, onions, spices, and peppers.',
        'Boil medium heat 15 mins until fish turns opaque.',
        'Toss in scent leaves, simmer 2 mins and serve hot.'
      ],
      proTip: 'Washing catfish with hot water or fresh lime removes all slipperiness.'
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
      distanceKm: '8.4 km', travelTimeMinutes: 22, primaryRoute: 'via Ozumba Mbadiwe Ave & Ahmadu Bello Way',
      uberFare: '₦3,800 - ₦4,500', brtOption: 'Take VI Direct Bus from CMS Terminal'
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
      distanceKm: '6.2 km', travelTimeMinutes: 18, primaryRoute: 'via Alfred Rewane Rd & Kingsway',
      uberFare: '₦3,000 - ₦3,800', brtOption: 'Ikoyi Link Bridge Shuttle'
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
      distanceKm: '14.5 km', travelTimeMinutes: 35, primaryRoute: 'via Mobolaji Bank Anthony Way',
      uberFare: '₦4,500 - ₦5,800', brtOption: 'Ikeja Bus Terminal Route 2'
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
      distanceKm: '11.0 km', travelTimeMinutes: 28, primaryRoute: 'via Western Ave & Funsho Williams Ave',
      uberFare: '₦3,200 - ₦4,000', brtOption: 'Surulere Local Bus'
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
      distanceKm: '4.8 km', travelTimeMinutes: 14, primaryRoute: 'via Admiralty Way Lekki',
      uberFare: '₦2,500 - ₦3,200', brtOption: 'Lekki Shuttle Bus'
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
      distanceKm: '7.1 km', travelTimeMinutes: 15, primaryRoute: 'via Shehu Shagari Way & Transcorp Hilton Drive',
      uberFare: '₦2,800 - ₦3,500', brtOption: 'Maitama Express Shuttle'
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
    dishCount: 6, readTime: '4 min read',
    coverImage: '/images/amala_ewedu_1789406591510.png',
    featuredDishIds: ['dish-ng-5', 'dish-ng-6']
  },
  {
    id: 'guide-ng-2',
    cityId: 'lagos',
    title: 'Mastering the Art of Smokey Party Jollof Rice',
    subtitle: 'Secrets of firewood smoke, tatashe pepper reduction, and perfect parboiled long-grain rice.',
    curator: 'Chef Yemisi Lawson',
    dishCount: 4, readTime: '5 min read',
    coverImage: '/images/jollof_rice_dodo_1789406504058.png',
    featuredDishIds: ['dish-ng-1', 'dish-ng-2', 'dish-ng-10']
  },
  {
    id: 'guide-ng-3',
    cityId: 'abuja',
    title: 'Abuja Seafood & Niger-Delta Delicacies Guide',
    subtitle: 'Fresh live catfish fisherman soups, pounded yam egusi, and charcoal roasted Boli fish spots in Maitama & Jabi.',
    curator: 'Amina Bello, Abuja Taste Journal',
    dishCount: 5, readTime: '4 min read',
    coverImage: '/images/fisherman_soup_1789406664662.png',
    featuredDishIds: ['dish-ng-7', 'dish-ng-8', 'dish-ng-9']
  }
];
