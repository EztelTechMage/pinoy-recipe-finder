import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="recipe-image"
          onError={(e) => {
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
        <div className="recipe-overlay">
          <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">
            View Recipe
          </Link>
        </div>
      </div>
      
      <div className="recipe-card-content">
        <h3 className="recipe-title">{recipe.name}</h3>
        <p className="recipe-description">{recipe.description}</p>
        
        <div className="recipe-meta">
          <span className="meta-item">
            <span role="img" aria-label="Preparation time">⏱️</span> {recipe.prepTime || 'N/A'}
          </span>
          <span className="meta-item">
            <span role="img" aria-label="Cooking time">🔥</span> {recipe.cookingTime || 'N/A'}
          </span>
          <span className="meta-item">
            <span role="img" aria-label="Servings">👨‍👩‍👧‍👦</span> {recipe.servings || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;