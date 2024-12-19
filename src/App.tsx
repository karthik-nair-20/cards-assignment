import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import { jsx } from 'react/jsx-runtime';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken', {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response) {
        setData(response.data.meals);
      }
    }
    fetchData();
  }, [])



  return (
    <>
      {data && data.map((draft) => (
        <div className="container">
          <div className="card">
            <div className="card__header">
              <img src={draft.strMealThumb} alt="card__image" className="card__image" width="600" />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">{draft.strCategory}</span>
              <h4>{draft.strMeal}</h4>
              <p>{draft.strInstructions.substring(0, 100)}</p>
            </div>
          </div>
        </div>
      ))}
      {/* {JSON.stringify(data)} */}
    </>
  )
}

export default App
