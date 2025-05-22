import Store from './Store.jsx';
import Alert from './UI/Alert.jsx';
import ComicsList from './OtherComponents/ComicsList.jsx';

export default function Main ({comics}) {
    return (
        <>
        <div className="main-section">
            <div className="jumbo">
               <span className="info-section">CURRENT SERIES</span>
            </div>
            <div className="container">
                <ComicsList comics={comics} />
            </div>
        </div>
        <Alert type="stocazzo"/>
        <Store />
        </>
    );
};