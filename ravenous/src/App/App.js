import React from 'react';
import logo from '../logo.svg';
import './App.css';
// When importing components between files make sure to import by name to assign the proper alias otherwise the js code will not compile
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import { Yelp } from '../Util/Yelp';

// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses = [business, business, business, business, business, business];

// The app will default to a function, this however limits what you can do with the highest level of the project (i.e. no constructors etc can be called.)
// function App() {
//   return (
//     <div className="App">
//         <h1>ravenous</h1>
//         <SearchBar />
//         <BusinessList businesses={businesses} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
  }

  render () {
    return (
      <div className="App">
          <h1>ravenous</h1>
          <SearchBar onClick={this.searchYelp} />
          <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
};

export default App;
