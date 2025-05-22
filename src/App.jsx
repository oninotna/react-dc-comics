// ! LAYOUT COMPONENTS
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

// ! DATA 
import comicsData from './data/comics.js';

export default function App () {
    return ( 
    <>
      <Header />
      <Main comics={comicsData} />
      <Footer />
    </>
    );
};