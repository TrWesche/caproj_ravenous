import React from 'react';
import logo from '../logo.svg';
import './App.css';
// When importing components between files make sure to import by name to assign the proper alias otherwise the js code will not compile
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// It looks like they have updated the method of creating components for the newest version of reach to use the function keyword instead?  Both of these work.
function App() {
  return (
    <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
    </div>
  );
}

// class App extends React.Component {
//   render () {
//     return (
//       <div className="App">
//           <h1>ravenous</h1>
//           <SearchBar />
//           <BusinessList />
//       </div>
//     );
//   }
// };

export default App;
