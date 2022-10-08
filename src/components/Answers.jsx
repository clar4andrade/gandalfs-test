
const Answers = ({question, changeTurn, turn}) => {

    const disorder = (array) => {
        const copy = [...array];
      
        for (let i = copy.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        
        return copy;
    };

    const handleCorrectAnswer = (key) => {
        if(key !== 3) {
            changeTurn(turn +1);
        } else if (key ===3 | turn > 7) {
            console.log('YOU SHALL NOT PASS!')
    
        }
    }

    let answerList = question.answers;
    const disordered = disorder(answerList);
     
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