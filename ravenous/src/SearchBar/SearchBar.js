import React from 'react';
import './SearchBar.css';

// const sortByOptions = {
//     'Best Match': 'best_match',
//     'Highest Rated': 'rating',
//     'Most Reviewed': 'review_count'
// };

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(newSortByOption) {
        this.setState({
            sortBy: newSortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
           term: event.target.value 
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        this.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sortByOption,i) =>
            (
                <li key={sortByOption + i} className={this.getSortByClass(this.sortByOptions[sortByOption])} onClick={this.handleSortByChange.bind(this, this.sortByOptions[sortByOption])}>
                    {sortByOption}
                </li>
            ));
    }
    // Note on above: calling the bind in this manner allows the bind to attach both the function and the appropriate value to each item as it loops through.

    // Below is the Codecademy version of the SortByOptions function
    // renderSortByOptions() {
    //     return Object.keys(this.sortByOptions).map(sortByOption => {
    //       let sortByOptionValue = this.sortByOptions[sortByOption];
    //       return (<li className={this.getSortByClass(sortByOptionValue)}
    //                   key={sortByOptionValue}
    //                   onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
    //                 {sortByOption}
    //              </li>);
    //     });
    //   }



    searchYelp(term, location, sortBy) {
        const webAddrPrefix = "https://api.yelp.com/v3/businesses/search?";
        // const authorization = "";
        let webAddr = `${webAddrPrefix}term=${term}&location=${location}&sort_by=${sortBy}`;
        console.log(`Performing search for: ${term} in ${location} sorted by ${sortBy}.`)
        console.log(webAddr);
        return webAddr;
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a searchYelp={this.searchYelp} onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
};

export default SearchBar;