import { Link } from 'react-router-dom';


const NoPage = (): JSX.Element => {
    return (
        <div>
            <h1>Uh oh, it seems like you have made it to a page that does not exist.</h1>
            <Link to="/">Go Back</Link>
        </div>
    )
}


export default NoPage;