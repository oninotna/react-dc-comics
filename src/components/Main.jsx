import Store from './Store.jsx';
import Alert from './UI/Alert.jsx';

export default function Main () {
    return (
        <>
        <div className="main-section">
            <div className="container">
              <h1>--&gt; Content goes here &lt;--</h1>              
            </div>
        </div>
        <Alert type="stocazzo"/>
        <Store />
        </>
    );
};