import { useNavigate } from 'react-router-dom';

const Answers = ({question, changeTurn, turn, setResults, results}) => {

    const navigate = useNavigate();

    const disorder = (array) => {
        const copy = [...array];
      
        for (let i = copy.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        
        return copy;
    };

    const handleCorrectAnswer = (key) => {
        if(key === 1) {
            changeTurn(turn +1);
            setResults(results +15);
        } else if (key === 2) {
            changeTurn(turn +1);
            setResults(results +10);
        } else if (key === 3) {
            console.log('YOU SHALL NOT PASS!');
            setResults(0);
            navigate('/results');
        } 
    }

    const handleTestEnd = (turn) => {
        if(turn > 7 ) {
            navigate('/results');
        }
    }

    let answerList = question.answers;
    const disordered = disorder(answerList);

    handleTestEnd(turn);
     
    return (
        <>
            <p>{disordered.map( answer => (
                <button key={answer.id} onClick={() => {
                    handleCorrectAnswer(answer.id)
                }}>{answer.text}</button>
            ))}</p>
        </>
    )
}

export default Answers;

//Correct routing error