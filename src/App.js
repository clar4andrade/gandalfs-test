import './App.css';
import { Routes, Route} from 'react-router-dom';
import Results from './Results';
import Root from './components/Root';
import { useState } from 'react';

function App() {

  const [results, setResults] = useState(0);

  return (
    <Routes>
      <Route path='/' exact element={<Root results={results} setResults={setResults} />} />
      <Route path='/results' element={<Results results={results} />} />
    </Routes>
  );
}

export default App;
