import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <div className="page-header">
        <h2>Your Favorite Recipes</h2>
        <p>All your saved Filipino recipes in one place</p>
      </div>

      {favorites.length > 0 ? (
        <div className="recipes-grid">
          {favorites.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <div className="no-favorites-content">
            <h3>No favorites yet</h3>
            <p>You haven't saved any recipes to your favorites.</p>
            <p>Browse recipes and click the heart icon to save them here!</p>
            <Link to="/" className="cta-button">
              Explore Recipes
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;