import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import recipesData from '../data/recipes.json';
function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecipes(recipesData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading delicious recipes...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <h2>Discover the taste of authentic Filipino Recipes</h2>
          <p>Explore the traditional island dishes of the Philippines with our curated collection of traditional family recipes</p>
        </div>
      </section>

      <section className="search-section">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search for recipes like Adobo or Kare-Kare...?" />
      </section>

      <section className="recipes-section">
        {filteredRecipes.length > 0 ? (
          <>
            <h3 className="section-title">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Recipes'}
            </h3>
            <div className="recipes-grid">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <h3>No recipes found for "{searchTerm}"</h3>
            <p>Try searching for something else or browse all recipes</p>
            <button
              className="cta-button"
              onClick={() => setSearchTerm('')}
            >
              View All Recipes
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;