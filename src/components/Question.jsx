import Counter from './Counter';
import Answers from './Answers';
import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import Ring from './Ring';

const Question = ({turns, changeTurn, results, setResults}) => {

    const [result, setResult] = useState(0);

    const randomItem = (max, array) => {
        let id = Math.floor(Math.random() * max);
        let item = array[id];

        return item;
    }

    const [question, setQuestion] = useState();
    let questions = useFetch('http://localhost:3004/questions');

    useEffect(() => {
        setQuestion(randomItem(14, questions));
    }, [turns, questions]);
    

    return ( 
        <>
            <Ring  results={results} setResults={setResults}/>
            <Counter turn={turns} />
            {question && <h1>{question.text}</h1>} 
            {question && <Answers question={question} turn={turns} changeTurn={changeTurn} results={results} setResults={setResults}/>}
        </>
    );
}
 
export default Question;