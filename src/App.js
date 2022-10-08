import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import Question from './components/Question';

function App() {

  const [questionPage, setQuestionPage] = useState(false);
  const [turn, setTurn] = useState(0);

  return (
    <>
      {questionPage 
      ? <Question questionPage={questionPage} turns={turn} changeTurn={setTurn} /> 
      : <>
          <Home /> 
          <button onClick={() => {
            setQuestionPage(true);
            setTurn(turn +1);
          }}>OK</button>
        </>
      }
    </>
  );
}

export default App;
