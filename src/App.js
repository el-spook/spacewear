// Import the main CSS file that will modify all the components:
import './App.css';
// Import each component to be displayed:
import Product from './components/Product';
import Landing from './components/Landing';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

import {Routes, Route, Link} from 'react-router-dom';
import Calculator from './components/Calculator';



// Create a functional component that will display all the other components in order:
function App() {

  return (
    <div>
      <Navigation />
      <Header />
      <Routes>
        <Route exact path = '/' element = {<Landing/>} />
        <Route path = '/shopping' element = {<Product/>} />
        <Route path = '/profile' element = {<Profile name="Buzz" isLoggedIn = {false}/>} />
        <Route path = '/calc' element = {< Calculator />} />
      </Routes>

    </div>
  );
}

// Export the App component so it can be used by App.js.
export default App;


