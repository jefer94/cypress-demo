import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    if (list.length === 0) {
      axios.get('http://localhost:8000/v1/admissions/cohort/all').then((response) => {
        setList(response.data)
      })
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {list.map((v, k) => <li key={k}>{k}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
