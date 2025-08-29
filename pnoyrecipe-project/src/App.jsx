import { Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './contexts/FavoritesContext'
import Header from './components/Header'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <div className="app">
        {/* Ghibli Background */}
        <img 
          src="/assets/ghibli-background.gif" 
          alt="Ghibli Style Background" 
          className="ghibli-background" 
        />
        
        {/* Nature Decorations */}
        <div className="nature-decoration leaf-1 animate-float">🍃</div>
        <div className="nature-decoration leaf-2 animate-float" style={{animationDelay: '2s'}}>🌿</div>
        <div className="nature-decoration leaf-3 animate-float" style={{animationDelay: '4s'}}>🍂</div>
        
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </FavoritesProvider>
  )
}

export default App