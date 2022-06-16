import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Entries from './Entries';
import About from './About';
/* import Sidebar from './Sidebar' */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
     <Router>
        <Header/>
        {/* <Sidebar/> */}
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Entries' element={<Entries />}/>
          <Route path='/About' element={<About />}/>
        </Routes>
        <Footer/>
     </Router>
     
     
    );
  }
  
  export default App;
  