const Ring = ({results, setResults}) => {

    if (results > 100) {
        setResults(100);
    }
    
    return (
        <>
            <h2>{results}%</h2>
        </>
    );
}
 
export default Ring;