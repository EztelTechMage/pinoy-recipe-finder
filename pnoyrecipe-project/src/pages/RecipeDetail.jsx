import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import recipesData from '../data/recipes.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Recipe not found</h2>
          <p>The recipe you're looking for doesn't exist.</p>
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    );
  }

  const favorite = isFavorite(recipe.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-button">
        ← Back to Recipes
      </Link>

      <article className="recipe-detail">
        <header className="recipe-header">
          <div className="recipe-image-detail">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = '/assets/placeholder.jpg';
              }}
              className={imageLoaded ? 'loaded' : 'loading'}
            />
            {!imageLoaded && <div className="image-loading">Loading image...</div>}
            
            <button 
              className={`favorite-btn ${favorite ? 'active' : ''}`}
              onClick={handleFavoriteClick}
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {favorite ? '❤️' : '🤍'} 
            </button>
          </div>

          <div className="recipe-info">
            <h1>{recipe.name}</h1>
            <p className="recipe-description">{recipe.description}</p>
            
            <div className="recipe-meta-grid">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span className="meta-label">Prep Time</span>
                <span className="meta-value">{recipe.prepTime || 'N/A'}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-icon">🔥</span>
                <span className="meta-label">Cook Time</span>
                <span className="meta-value">{recipe.cookingTime || 'N/A'}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-icon">👨‍👩‍👧‍👦</span>
                <span className="meta-label">Servings</span>
                <span className="meta-value">{recipe.servings || 'N/A'}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-icon">🍽️</span>
                <span className="meta-label">Difficulty</span>
                <span className="meta-value">Easy</span>
              </div>
            </div>
          </div>
        </header>

        <div className="recipe-tabs">
          <button 
            className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button 
            className={`tab-btn ${activeTab === 'instructions' ? 'active' : ''}`}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'ingredients' && (
            <div className="ingredients-list">
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'instructions' && (
            <div className="instructions-list">
              <h3>Instructions</h3>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default RecipeDetail;