import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipes';
import './App.css';

function App() {
  const APP_ID = 'a18ba466';
  const APP_KEY = '40d632499332da71df33d3b0f7de0ffa';

  // STATE HOOK
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  // [] permits useEffect to run only once when the page is mounted and not every time it's rendered.
  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="submitBtn">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
}
/**
 * useEffect() runs everytime the page re-renders
 * without '[]'
 *  */
export default App;
