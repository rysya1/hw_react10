import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const[results,setResults] = useState(false)
  const[items,setItems] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
      .then(res => res.json())
      .then(
        (result) => {
          setResults(true)
          setItems(result)
        },
        (error) => {
          setResults(true);
          setError(error);
        }
      )
  },[])
  return (
    <div className="App">
      <div className='cont'>
        {items.map(item => (          
          <div className='obj' key={item.id}>
            <div className='flex'>
              <h5 className='txt'>{item.title} </h5> 
            <h2 className='id'>{item.id}</h2>
            </div>
            <img src={item.thumbnailUrl}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;