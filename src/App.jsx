import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import DishCard from './components/DishCard';
import RestaurantCard from './components/RestaurantCard';
import CuratedGuideCard from './components/CuratedGuideCard';
import CityMap from './components/CityMap';
import DetailDrawer from './components/DetailDrawer';
import DirectionsModal from './components/DirectionsModal';
import RecipeModal from './components/RecipeModal';
import RecipesView from './components/RecipesView';
import FoodDeciderModal from './components/FoodDeciderModal';
import NotebookView from './components/NotebookView';
import { MOCK_DISHES, MOCK_RESTAURANTS, EDITORIAL_GUIDES, CITIES } from './data/mockData';
import { Utensils } from 'lucide-react';

export default function App() {
  const [activeCity, setActiveCity] = useState('lagos');
  const [activeTab, setActiveTab] = useState('dishes'); // 'dishes' | 'restaurants' | 'recipes' | 'guides' | 'notebook'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All Neighborhoods');
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'

  // Modals and Drawers State
  const [activeDrawerItem, setActiveDrawerItem] = useState(null);
  const [drawerType, setDrawerType] = useState('dish');
  const [activeDirectionsItem, setActiveDirectionsItem] = useState(null);
  const [directionsType, setDirectionsType] = useState('dish');
  const [activeRecipeItem, setActiveRecipeItem] = useState(null);
  const [isDeciderOpen, setIsDeciderOpen] = useState(false);

  // Saved Items State with LocalStorage
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const stored = localStorage.getItem('culinaria_saved_ng');
      return stored ? JSON.parse(stored) : [
        { id: 'dish-ng-1', type: 'dish' },
        { id: 'rest-ng-1', type: 'restaurant' }
      ];
    } catch (e) {
      return [{ id: 'dish-ng-1', type: 'dish' }];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('culinaria_saved_ng', JSON.stringify(savedItems));
    } catch (e) {}
  }, [savedItems]);

  const handleCityChange = (cityId) => {
    setActiveCity(cityId);
    setSelectedNeighborhood('All Neighborhoods');
  };

  const handleToggleSave = (id, type) => {
    setSavedItems((prev) => {
      const exists = prev.some((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, type }];
      }
    });
  };

  const handleSelectItem = (item, type = activeTab === 'dishes' ? 'dish' : 'restaurant') => {
    setActiveDrawerItem(item);
    setDrawerType(type);
  };

  const handleOpenDirections = (item, type = 'dish') => {
    setActiveDirectionsItem(item);
    setDirectionsType(type);
  };

  const handleOpenRecipe = (dish) => {
    setActiveRecipeItem(dish);
  };

  // Filter Data Logic
  const filteredDishes = MOCK_DISHES.filter((dish) => {
    if (dish.cityId !== activeCity) return false;
    if (selectedNeighborhood !== 'All Neighborhoods' && dish.neighborhood !== selectedNeighborhood) return false;
    if (selectedDiet !== 'all' && !dish.dietary.includes(selectedDiet)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchVenue = dish.restaurantName.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      if (!matchName && !matchVenue && !matchDesc) return false;
    }
    return true;
  });

  const filteredRestaurants = MOCK_RESTAURANTS.filter((rest) => {
    if (rest.cityId !== activeCity) return false;
    if (selectedNeighborhood !== 'All Neighborhoods' && rest.neighborhood !== selectedNeighborhood) return false;
    if (selectedPrice !== 'all' && rest.priceRange !== selectedPrice) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = rest.name.toLowerCase().includes(q);
      const matchCuisine = rest.cuisine.toLowerCase().includes(q);
      const matchDish = rest.signatureDish.toLowerCase().includes(q);
      if (!matchName && !matchCuisine && !matchDish) return false;
    }
    return true;
  });

  const filteredGuides = EDITORIAL_GUIDES.filter((guide) => guide.cityId === activeCity);

  const currentCityObj = CITIES.find((c) => c.id === activeCity) || CITIES[0];

  return (
    <div className="app-container">
      {/* Header */}
      <Header
        activeCity={activeCity}
        setActiveCity={handleCityChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedItems.length}
        onOpenNotebook={() => setActiveTab('notebook')}
        onOpenDecider={() => setIsDeciderOpen(true)}
      />

      {/* Filter Bar */}
      {(activeTab === 'dishes' || activeTab === 'restaurants') && (
        <FilterBar
          activeCity={activeCity}
          selectedNeighborhood={selectedNeighborhood}
          setSelectedNeighborhood={setSelectedNeighborhood}
          selectedDiet={selectedDiet}
          setSelectedDiet={setSelectedDiet}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      )}

      {/* Main Body */}
      <main className="main-content">
        {activeTab === 'dishes' && (
          <div>
            <div className="section-header">
              <div>
                <h1 className="section-title">Iconic Nigerian Dishes in {currentCityObj.name}</h1>
                <p className="section-subtitle">
                  Discover authentic Smokey Jollof, Egusi, Suya, Amala, Ofada & Fisherman soups with live prices, maps, and cooking recipes.
                </p>
              </div>
            </div>

            {viewMode === 'grid' ? (
              filteredDishes.length === 0 ? (
                <div className="empty-state">
                  <Utensils size={32} className="empty-state-icon" />
                  <h3 className="font-serif">No Nigerian signature dishes match your filter</h3>
                  <p>Try clearing your neighborhood or dietary filter.</p>
                </div>
              ) : (
                <div className="editorial-grid">
                  {filteredDishes.map((dish) => (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      isSaved={savedItems.some((s) => s.id === dish.id)}
                      onToggleSave={handleToggleSave}
                      onClick={(item) => handleSelectItem(item, 'dish')}
                      onOpenDirections={handleOpenDirections}
                      onOpenRecipe={handleOpenRecipe}
                    />
                  ))}
                </div>
              )
            ) : (
              <CityMap
                items={filteredDishes}
                activeTab="dishes"
                activeCity={activeCity}
                savedItems={savedItems}
                onToggleSave={handleToggleSave}
                onSelectItem={(item) => handleSelectItem(item, 'dish')}
                onOpenDirections={handleOpenDirections}
                onOpenRecipe={handleOpenRecipe}
              />
            )}
          </div>
        )}

        {activeTab === 'restaurants' && (
          <div>
            <div className="section-header">
              <div>
                <h1 className="section-title">Curated Dining Venues in {currentCityObj.name}</h1>
                <p className="section-subtitle">
                  Explore top Nigerian restaurants, heritage Buka spots, suya grills, and fine dining venues.
                </p>
              </div>
            </div>

            {viewMode === 'grid' ? (
              filteredRestaurants.length === 0 ? (
                <div className="empty-state">
                  <Utensils size={32} className="empty-state-icon" />
                  <h3 className="font-serif">No restaurants found</h3>
                  <p>Try selecting another neighborhood or city.</p>
                </div>
              ) : (
                <div className="editorial-grid">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      isSaved={savedItems.some((s) => s.id === restaurant.id)}
                      onToggleSave={handleToggleSave}
                      onClick={(item) => handleSelectItem(item, 'restaurant')}
                      onOpenDirections={handleOpenDirections}
                    />
                  ))}
                </div>
              )
            ) : (
              <CityMap
                items={filteredRestaurants}
                activeTab="restaurants"
                activeCity={activeCity}
                savedItems={savedItems}
                onToggleSave={handleToggleSave}
                onSelectItem={(item) => handleSelectItem(item, 'restaurant')}
                onOpenDirections={handleOpenDirections}
                onOpenRecipe={handleOpenRecipe}
              />
            )}
          </div>
        )}

        {activeTab === 'recipes' && (
          <RecipesView
            activeCity={activeCity}
            onOpenRecipe={handleOpenRecipe}
          />
        )}

        {activeTab === 'guides' && (
          <div>
            <div className="section-header">
              <div>
                <h1 className="section-title">Editorial Food Guides for {currentCityObj.name}</h1>
                <p className="section-subtitle">
                  In-depth culinary features on Lagos Buka culture, party Jollof secrets, and Abuja seafood joints.
                </p>
              </div>
            </div>

            <div className="editorial-grid">
              {filteredGuides.map((guide) => (
                <CuratedGuideCard
                  key={guide.id}
                  guide={guide}
                  onClick={(g) => handleSelectItem(g, 'guide')}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notebook' && (
          <NotebookView
            savedItems={savedItems}
            onToggleSave={handleToggleSave}
            onSelectItem={(item) => handleSelectItem(item, item.price ? 'dish' : 'restaurant')}
          />
        )}
      </main>

      {/* Slide-over Detail Drawer */}
      <DetailDrawer
        item={activeDrawerItem}
        type={drawerType}
        isSaved={activeDrawerItem && savedItems.some((s) => s.id === activeDrawerItem.id)}
        onToggleSave={handleToggleSave}
        onClose={() => setActiveDrawerItem(null)}
        onOpenDirections={handleOpenDirections}
        onOpenRecipe={handleOpenRecipe}
      />

      {/* Directions Map Pop-Up Modal */}
      {activeDirectionsItem && (
        <DirectionsModal
          item={activeDirectionsItem}
          type={directionsType}
          onClose={() => setActiveDirectionsItem(null)}
        />
      )}

      {/* Recipe Cooking Modal */}
      {activeRecipeItem && (
        <RecipeModal
          dish={activeRecipeItem}
          onClose={() => setActiveRecipeItem(null)}
        />
      )}

      {/* Food Decider Modal */}
      {isDeciderOpen && (
        <FoodDeciderModal
          activeCity={activeCity}
          onClose={() => setIsDeciderOpen(false)}
          onSelectDish={(dish) => handleSelectItem(dish, 'dish')}
        />
      )}
    </div>
  );
}
