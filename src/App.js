// The main import needed to create the React app:
import React from "react";

// Import the main CSS file that will modify all the components:
import './App.css';
// Import each component to be displayed:
import Product from './components/Product';
import Landing from './components/Landing';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import Legal from "./components/Legal";
// import 
import { Routes, Route} from 'react-router-dom';


// Create a parent component that will display all the other components in order.
// Class component contains a constructor that takes props:
class App extends React.Component {
  constructor(props) {
    super(props);
    //creates a state called isLoggedIn and sets its initial value to false:
    this.state = {
      isLoggedIn: false
    }
    // Define user's name:
    this.name = 'Buzz'
  }


/* Method that will cause alerts to pop up when the log in/out button is pressed,
and which will toggle the user's sign in status on the button click.*/
manageLogIn = () => {
  // Checks whether the user is logged in, and returns an alert and sets the state depending on this:
  if (this.state.isLoggedIn) {
    alert(`${this.name}, you have now logged out.`);
    this.setState({
      isLoggedIn: false
    });
  } else {
    alert(`Welcome back, ${this.name}!`);
    this.setState({
      isLoggedIn: true
    });
  }
}

/* The render method returns the elements that the pages will contain in order and uses Routes to show certain components on particular pages.
Three props are sent to the header component and two props are sent to the profile component so they can receive the state from this component.*/
  render() {
    return (
      <div>
        <Navigation />
        <Header name={this.name} isLoggedIn={this.state.isLoggedIn} manageLogIn={this.manageLogIn} />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/shopping' element={<Product />} />
          <Route path='/profile' element={<Profile isLoggedIn={this.state.isLoggedIn} manageLogIn={this.manageLogIn} />} />
          <Route path='/calc' element={< Calculator />} />
          <Route path='/legal' element={< Legal />} />
        </Routes>
      </div >
    );
  }
}

// Export the App component so it can be used by App.js.
export default App;

