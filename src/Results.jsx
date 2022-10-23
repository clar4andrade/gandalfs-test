import { Link } from 'react-router-dom';
import Ring from './components/Ring'

const Results = ({results}) => {
    return ( 
        <>
            <h1> Finished !!!</h1>
            <Ring results={results} />
            <Link to='/'>Try Again</Link>
        </>
    );
}
 
export default Results;