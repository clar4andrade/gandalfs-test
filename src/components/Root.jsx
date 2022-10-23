import { useState } from 'react';
import Home from './Home'
import Question from './Question';

const Root = ({results, setResults}) => {

    const [questionPage, setQuestionPage] = useState(false);
    const [turn, setTurn] = useState(0);

    return (
        <>
            {questionPage 
            ? <Question questionPage={questionPage} turns={turn} changeTurn={setTurn} results={results} setResults={setResults}/> 
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
 
export default Root;